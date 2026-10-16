"""Import the two supplied TWK/TKP PDFs; preserve option order and PDF weights.

Usage: python scripts/import-full-casn-pdfs.py TWK.pdf TKP.pdf
Requires pypdf. Generated modules do not depend on Python at runtime.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
TOPICS = {
    "TWK": ["Nasionalisme", "Integritas", "Bela Negara", "Pilar Negara", "Bahasa Indonesia"],
    "TKP": ["Profesionalisme", "Pelayanan Publik", "Jejaring Kerja", "Sosial Budaya", "TIK", "Anti Radikalisme"],
}
LETTERS = "ABCDE"


def normalized(text):
    return re.sub(r"\s+", " ", text).strip()


def read_questions(path, category, per_package):
    reader = PdfReader(path)
    text = normalized(" ".join(page.extract_text() or "" for page in reader.pages))
    starts = list(re.finditer(r"Nomer\s*:\s*(\d+)\s+Topik\s*:\s*", text))
    assert len(starts) == per_package * 2, (category, len(starts))
    packages = [[], []]
    audit = []
    for index, start in enumerate(starts):
        package = index // per_package + 1
        number = index % per_package + 1
        assert int(start[1]) == number
        raw = text[start.end():starts[index + 1].start() if index + 1 < len(starts) else len(text)]
        raw = re.sub(r"SOAL\s+TRY\s+OUT(?:\s+TKP)?\s+[12]\s*$", "", raw).strip()
        topic = next(topic for topic in TOPICS[category] if raw.startswith(topic + " "))
        raw = raw[len(topic):].strip()
        answer = re.findall(r"Jawaban\s*:\s*([A-E])", raw)
        assert len(answer) == 1, (category, package, number, answer)
        if category == "TWK" and package == 1 and number == 26:
            # The PDF puts its explanation heading after the explanation text.
            assert raw.endswith("Pembahasan:")
            raw = re.sub(r"(Jawaban\s*:\s*[A-E])\s*", r"\1 Pembahasan: ", raw.removesuffix("Pembahasan:").strip(), count=1)
        # TWK 1 no. 22 places the answer before its prompt in the PDF.
        raw = re.sub(r"Jawaban\s*:\s*[A-E]\s*", "", raw)
        body, explanation = raw.split("Pembahasan:", 1)
        explanation = re.sub(r"\s*Pembahasan:\s*$", "", explanation).strip()
        if category == "TKP":
            body, score_text = body.split("Skor:", 1)
            scores = {letter: int(value) for letter, value in re.findall(r"([A-E])\s*=\s*([1-5])", score_text)}
            assert set(scores) == set(LETTERS)
            explained_scores = {letter: int(value) for letter, value in re.findall(r"\b([A-E])\s*\(([1-5])\)\s*:", explanation)}
            assert all(scores[letter] == score for letter, score in explained_scores.items()), (package, number, scores, explained_scores)
            if set(explained_scores) != set(scores):
                audit.append({"package": package, "number": number, "issue": "PDF omits per-option explanation for " + ", ".join(sorted(set(scores) - set(explained_scores))) + "; retained complete score table and available explanation."})
            best = [letter for letter in LETTERS if scores[letter] == 5]
            assert len(best) == 1
            if answer[0] != best[0]:
                assert (package, number, answer[0], best[0]) == (2, 19, "D", "C")
                audit.append({"package": package, "number": number, "issue": "Printed answer D conflicts with score table and explanation C; use C (5 points)."})
            if len(set(scores.values())) != 5:
                assert (package, number, scores) == (2, 26, {"A": 3, "B": 2, "C": 4, "D": 3, "E": 5})
                audit.append({"package": package, "number": number, "issue": "Preserved PDF weights A=3, B=2, C=4, D=3, E=5, including equal weights."})
            explanation = "Skor pilihan: " + " | ".join(f"{letter} = {scores[letter]}" for letter in LETTERS) + ".\n\n" + re.sub(r"\s+(?=[A-E]\s*\([1-5]\)\s*:)", "\n\n", explanation)
        else:
            scores = {letter: 5 if letter == answer[0] else 0 for letter in LETTERS}
            conclusions = re.findall(r"jawaban yang tepat adalah\s+([A-E])", explanation)
            assert all(letter == answer[0] for letter in conclusions)
        option_starts = list(re.finditer(r"\b([A-E])\.\s+", body))
        # Unit B. in TKP 1 no. 19 is part of the prompt, before option A.
        option_a = next(i for i, match in enumerate(option_starts) if match[1] == "A")
        option_starts = option_starts[option_a:]
        assert "".join(match[1] for match in option_starts) == LETTERS, (category, package, number)
        prompt = body[:option_starts[0].start()].strip()
        choices = []
        for i, match in enumerate(option_starts):
            label = body[match.end():option_starts[i + 1].start() if i < 4 else len(body)].strip()
            assert label and "Jawaban:" not in label and "Skor:" not in label
            choices.append({"id": match[1].lower(), "label": label, "score": scores[match[1]]})
        if (category, package, number) == ("TWK", 1, 30):
            assert choices[0]["label"] == choices[3]["label"] == "efektivitas"
            choices[0]["label"] = "efektifisasi"
            explanation = explanation.replace(
                "A salah karena meskipun bentuk katanya benar, pada soal ini posisi jawaban yang tepat ditetapkan pada D.",
                "A salah karena efektifisasi bukan perbaikan bentuk baku yang diperlukan; bentuk yang tepat adalah efektivitas.",
            )
            audit.append({"package": package, "number": number, "issue": "Duplicate correct text efektivitas in A and D; changed distractor A to efektifisasi and its explanation, preserving correct D."})
        assert prompt and explanation and len(set(choice["label"] for choice in choices)) == 5, (category, package, number, bool(prompt), bool(explanation))
        packages[package - 1].append({
            "id": f"new-casn-{package}-{category.lower()}-{number:02}",
            "category": category,
            "topic": "Teknologi Informasi" if topic == "TIK" else topic,
            "prompt": prompt,
            "choices": choices,
            "explanation": explanation,
        })
    return packages, {"file": path.name, "sha256": hashlib.sha256(path.read_bytes()).hexdigest(), "pages": len(reader.pages), "questions": len(starts), "audit": audit}


def main():
    assert len(sys.argv) == 3, "Expected TWK PDF path and TKP PDF path"
    provenance = []
    for category, path, count in [("TWK", Path(sys.argv[1]), 30), ("TKP", Path(sys.argv[2]), 45)]:
        packages, source = read_questions(path, category, count)
        provenance.append(source)
        for package, questions in enumerate(packages, 1):
            module = 'import type { Question } from "./types";\n\n'
            module += f"// Imported from {path.name}, package {package}. See content-sources/full-new-casn.json.\n"
            module += f"export const NEW_CASN_{package}_{category}_QUESTIONS: Question[] = "
            module += json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"
            (ROOT / "lib" / f"new-casn-{package}-{category.lower()}-content.ts").write_text(module, encoding="utf-8")
    destination = ROOT / "content-sources" / "full-new-casn.json"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps({"sources": provenance, "tiu": {"tryout-new-casn-1": "MINI_TIU_9_QUESTIONS", "tryout-new-casn-2": "MINI_TIU_10_QUESTIONS"}}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Imported 60 TWK and 90 TKP questions with original choices, scores, and explanations.")


if __name__ == "__main__":
    main()

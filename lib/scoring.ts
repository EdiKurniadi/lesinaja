import { CATEGORIES, EXAM_RULES } from "./exam-rules";
import type { AttemptResult, Category, Question, TopicBreakdown } from "./types";

export function choiceScore(question: Question, choiceId?: string): number {
  if (!choiceId) return 0;
  return question.choices.find((choice) => choice.id === choiceId)?.score ?? 0;
}

export function bestScore(question: Question): number {
  return Math.max(...question.choices.map((choice) => choice.score));
}

export function scoreAttempt(
  questions: Question[],
  answers: Record<string, string>,
  meta: { id: string; packageId: string; startedAt: number; completedAt: number },
): AttemptResult {
  const scores = Object.fromEntries(
    CATEGORIES.map((category) => {
      const categoryQuestions = questions.filter((question) => question.category === category);
      const score = categoryQuestions.reduce((sum, question) => sum + choiceScore(question, answers[question.id]), 0);
      return [category, {
        score,
        maximum: EXAM_RULES.maximumScores[category],
        answered: categoryQuestions.filter((question) => Boolean(answers[question.id])).length,
        total: categoryQuestions.length,
        passed: score >= EXAM_RULES.passingScores[category],
      }];
    }),
  ) as AttemptResult["scores"];

  const topics = new Map<string, { category: Category; topic: string; earned: number; possible: number }>();
  for (const question of questions) {
    const key = `${question.category}:${question.topic}`;
    const current = topics.get(key) ?? { category: question.category, topic: question.topic, earned: 0, possible: 0 };
    current.earned += choiceScore(question, answers[question.id]);
    current.possible += bestScore(question);
    topics.set(key, current);
  }
  const topicBreakdown: TopicBreakdown[] = [...topics.values()].map((topic) => ({
    ...topic,
    percentage: topic.possible ? Math.round((topic.earned / topic.possible) * 100) : 0,
  }));
  const totalScore = CATEGORIES.reduce((sum, category) => sum + scores[category].score, 0);

  return {
    ...meta,
    durationSeconds: Math.max(0, Math.round((meta.completedAt - meta.startedAt) / 1000)),
    answers,
    scores,
    totalScore,
    passed: CATEGORIES.every((category) => scores[category].passed),
    topicBreakdown,
  };
}

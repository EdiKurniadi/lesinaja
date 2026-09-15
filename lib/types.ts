export type Category = "TWK" | "TIU" | "TKP";

export interface Choice {
  id: string;
  label: string;
  score: number;
}

export interface Question {
  id: string;
  category: Category;
  topic: string;
  prompt: string;
  choices: Choice[];
  explanation: string;
}

export interface ExamRules {
  reference: string;
  durationMinutes: number;
  composition: Record<Category, number>;
  maximumScores: Record<Category, number>;
  passingScores: Record<Category, number>;
}

export interface ExamPackage {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  durationMinutes: number;
  kind?: "full" | "mini";
}

export interface DrillPackage {
  id: string;
  title: string;
  category: Category;
  topic: string;
  sequence: number;
  questions: Question[];
}

export interface ActiveSession {
  id: string;
  kind: "drill" | "tryout";
  packageId?: string;
  questionIds: string[];
  answers: Record<string, string>;
  flagged: string[];
  currentIndex: number;
  startedAt: number;
  deadlineAt?: number;
}

export interface CategoryScore {
  score: number;
  maximum: number;
  answered: number;
  total: number;
  passed: boolean;
}

export interface TopicBreakdown {
  category: Category;
  topic: string;
  earned: number;
  possible: number;
  percentage: number;
}

export interface AttemptResult {
  id: string;
  packageId: string;
  startedAt: number;
  completedAt: number;
  durationSeconds: number;
  answers: Record<string, string>;
  scores: Record<Category, CategoryScore>;
  totalScore: number;
  passed: boolean;
  topicBreakdown: TopicBreakdown[];
}

export interface DrillStat {
  attempts: number;
  earned: number;
  possible: number;
  lastAnsweredAt: number;
}

export interface TopicProgress {
  opened: boolean;
  completed: boolean;
  updatedAt: number;
}

export interface PersistedLearningState {
  version: 2;
  activeTryout: ActiveSession | null;
  activeDrill: ActiveSession | null;
  attempts: AttemptResult[];
  drillStats: Record<string, DrillStat>;
  topicProgress: Record<string, TopicProgress>;
  updatedAt: number;
}

export interface MaterialTopic {
  id: string;
  category: Category;
  title: string;
  summary: string;
  points: string[];
  example: string;
  chapters?: MaterialChapter[];
}

export interface MaterialChoice {
  label: string;
  text: string;
}

export interface MaterialAnalysis {
  competency: string;
  scores?: Array<{
    label: string;
    score: number;
  }>;
  bestChoice: string;
  explanation: string;
}

export interface MaterialTable {
  columns: string[];
  rows: string[][];
}

export interface MaterialSection {
  heading: string;
  body: string;
  bullets?: string[];
  choices?: MaterialChoice[];
  analysis?: MaterialAnalysis;
  table?: MaterialTable;
}

export interface MaterialChapter {
  title: string;
  intro: string;
  sections: MaterialSection[];
  callout?: string;
}

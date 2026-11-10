export type AIProviderName = "openai" | "gemini";

export interface InterviewTarget {
  company: string;
  role: string;
  level?: "entry" | "mid" | "senior" | "staff";
}

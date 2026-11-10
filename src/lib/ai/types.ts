export interface TextGenerationInput {
  system: string;
  prompt: string;
  temperature?: number;
  maxOutputTokens?: number;
}

export interface AIProvider {
  generateText(input: TextGenerationInput): Promise<string>;
}

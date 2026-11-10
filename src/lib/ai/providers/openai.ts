import OpenAI from "openai";
import type { AIProvider, TextGenerationInput } from "@/lib/ai/types";

export class OpenAIProvider implements AIProvider {
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(apiKey: string, model: string) {
    this.client = new OpenAI({ apiKey });
    this.model = model;
  }

  async generateText({ system, prompt, temperature, maxOutputTokens }: TextGenerationInput) {
    const response = await this.client.responses.create({
      model: this.model,
      instructions: system,
      input: prompt,
      ...(temperature === undefined ? {} : { temperature }),
      ...(maxOutputTokens === undefined ? {} : { max_output_tokens: maxOutputTokens }),
    });

    return response.output_text;
  }
}

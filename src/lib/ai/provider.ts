import "server-only";

import type { AIProvider } from "@/lib/ai/types";
import { GeminiProvider } from "@/lib/ai/providers/gemini";
import { OpenAIProvider } from "@/lib/ai/providers/openai";
import { getServerEnv } from "@/lib/validations/env";

export function createAIProvider(): AIProvider {
  const env = getServerEnv();

  if (env.AI_PROVIDER === "gemini") {
    if (!env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is required when AI_PROVIDER=gemini.");
    if (!env.AI_MODEL) throw new Error("Set AI_MODEL to a supported Gemini model.");
    return new GeminiProvider(env.GEMINI_API_KEY, env.AI_MODEL);
  }

  if (!env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is required when AI_PROVIDER=openai.");
  if (!env.AI_MODEL) throw new Error("Set AI_MODEL to a supported OpenAI model.");
  return new OpenAIProvider(env.OPENAI_API_KEY, env.AI_MODEL);
}

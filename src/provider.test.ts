import { describe, expect, it } from "vitest";
import {
  applyChomputeOnboardDefaults,
  buildChomputeProviderConfig,
  CHOMPUTE_ACCESS_KEY_AUTH_CHOICE,
  CHOMPUTE_ACCESS_KEY_ENV_VAR,
  CHOMPUTE_ADVANCED_MODEL_ID,
  CHOMPUTE_BASE_URL,
  CHOMPUTE_DEFAULT_MODEL_REF,
  CHOMPUTE_PROVIDER_ID,
} from "./provider.js";

describe("Chompute OpenClaw provider", () => {
  it("declares the Chompute Advanced OpenAI-compatible model", () => {
    const provider = buildChomputeProviderConfig();

    expect(provider.api).toBe("openai-completions");
    expect(provider.baseUrl).toBe(CHOMPUTE_BASE_URL);
    expect(provider.models).toHaveLength(1);
    expect(provider.models[0]).toMatchObject({
      id: CHOMPUTE_ADVANCED_MODEL_ID,
      name: "Chompute Advanced",
      reasoning: true,
      input: ["text", "image"],
      contextWindow: 262_144,
      maxTokens: 98_304,
      compat: {
        supportsReasoningEffort: true,
        supportsTools: true,
        supportsUsageInStreaming: true,
      },
    });
  });

  it("uses Chompute Access Key auth metadata", () => {
    expect(CHOMPUTE_ACCESS_KEY_AUTH_CHOICE).toBe("chompute-access-key");
    expect(CHOMPUTE_ACCESS_KEY_ENV_VAR).toBe("CHOMPUTE_ACCESS_KEY");
  });

  it("applies onboarding defaults without removing existing provider config", () => {
    const cfg = applyChomputeOnboardDefaults({
      models: {
        providers: {
          existing: {
            api: "openai-completions",
            baseUrl: "https://example.com/v1",
            models: [
              {
                id: "example-model",
                name: "Example Model",
                reasoning: false,
                input: ["text"],
                cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
                contextWindow: 8_192,
                maxTokens: 2_048,
              },
            ],
          },
        },
      },
    });

    expect(cfg.models?.providers?.existing).toBeDefined();
    expect(cfg.models?.providers?.[CHOMPUTE_PROVIDER_ID]?.baseUrl).toBe(CHOMPUTE_BASE_URL);
    expect(cfg.models?.providers?.[CHOMPUTE_PROVIDER_ID]?.models[0]?.id).toBe(
      CHOMPUTE_ADVANCED_MODEL_ID,
    );
    expect(cfg.agents?.defaults?.model).toMatchObject({
      primary: CHOMPUTE_DEFAULT_MODEL_REF,
    });
  });
});

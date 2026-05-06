import { applyProviderConfigWithDefaultModelPreset } from "openclaw/plugin-sdk/provider-onboard";
import type {
  ModelDefinitionConfig,
  ModelProviderConfig,
} from "openclaw/plugin-sdk/provider-model-types";
import type { OpenClawConfig } from "openclaw/plugin-sdk/provider-onboard";

export const CHOMPUTE_PROVIDER_ID = "chompute";
export const CHOMPUTE_PROVIDER_LABEL = "Chompute";
export const CHOMPUTE_ACCESS_KEY_ENV_VAR = "CHOMPUTE_ACCESS_KEY";
export const CHOMPUTE_ACCESS_KEY_FLAG = "--chompute-access-key";
export const CHOMPUTE_ACCESS_KEY_AUTH_CHOICE = "chompute-access-key";
export const CHOMPUTE_BASE_URL = "https://chompute-services.dragonfruit.ai/openai/v1";
export const CHOMPUTE_ADVANCED_MODEL_ID = "chompute-advanced";
export const CHOMPUTE_ADVANCED_MODEL_NAME = "Chompute Advanced";
export const CHOMPUTE_DEFAULT_MODEL_REF = `${CHOMPUTE_PROVIDER_ID}/${CHOMPUTE_ADVANCED_MODEL_ID}`;

export const CHOMPUTE_ADVANCED_MODEL: ModelDefinitionConfig = {
  id: CHOMPUTE_ADVANCED_MODEL_ID,
  name: CHOMPUTE_ADVANCED_MODEL_NAME,
  reasoning: true,
  input: ["text", "image"],
  cost: {
    input: 0.6,
    cacheRead: 0.1,
    cacheWrite: 0.6,
    output: 3.0,
  },
  contextWindow: 262_144,
  maxTokens: 98_304,
  compat: {
    supportsDeveloperRole: true,
    supportsReasoningEffort: true,
    supportedReasoningEfforts: ["low", "medium", "high"],
    supportsTools: true,
    supportsUsageInStreaming: true,
  },
};

export function buildChomputeProviderConfig(): ModelProviderConfig {
  return {
    api: "openai-completions",
    baseUrl: CHOMPUTE_BASE_URL,
    models: [
      {
        ...CHOMPUTE_ADVANCED_MODEL,
        input: [...CHOMPUTE_ADVANCED_MODEL.input],
        cost: { ...CHOMPUTE_ADVANCED_MODEL.cost },
        compat: { ...CHOMPUTE_ADVANCED_MODEL.compat },
      },
    ],
  };
}

export function applyChomputeOnboardDefaults(cfg: OpenClawConfig): OpenClawConfig {
  return applyProviderConfigWithDefaultModelPreset(cfg, {
    providerId: CHOMPUTE_PROVIDER_ID,
    api: "openai-completions",
    baseUrl: CHOMPUTE_BASE_URL,
    defaultModel: CHOMPUTE_ADVANCED_MODEL,
    defaultModelId: CHOMPUTE_ADVANCED_MODEL_ID,
    aliases: [
      {
        modelRef: CHOMPUTE_DEFAULT_MODEL_REF,
        alias: CHOMPUTE_ADVANCED_MODEL_NAME,
      },
    ],
    primaryModelRef: CHOMPUTE_DEFAULT_MODEL_REF,
  });
}


import type { ModelDefinitionConfig, ModelProviderConfig } from "openclaw/plugin-sdk/provider-model-types";
import type { OpenClawConfig } from "openclaw/plugin-sdk/provider-onboard";
export declare const CHOMPUTE_PROVIDER_ID = "chompute";
export declare const CHOMPUTE_PROVIDER_LABEL = "Chompute";
export declare const CHOMPUTE_ACCESS_KEY_ENV_VAR = "CHOMPUTE_ACCESS_KEY";
export declare const CHOMPUTE_ACCESS_KEY_FLAG = "--chompute-access-key";
export declare const CHOMPUTE_ACCESS_KEY_AUTH_CHOICE = "chompute-access-key";
export declare const CHOMPUTE_BASE_URL = "https://chompute-services.dragonfruit.ai/openai/v1";
export declare const CHOMPUTE_ADVANCED_MODEL_ID = "chompute-advanced";
export declare const CHOMPUTE_ADVANCED_MODEL_NAME = "Chompute Advanced";
export declare const CHOMPUTE_DEFAULT_MODEL_REF = "chompute/chompute-advanced";
export declare const CHOMPUTE_ADVANCED_MODEL: ModelDefinitionConfig;
export declare function buildChomputeProviderConfig(): ModelProviderConfig;
export declare function applyChomputeOnboardDefaults(cfg: OpenClawConfig): OpenClawConfig;
//# sourceMappingURL=provider.d.ts.map
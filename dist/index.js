import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";
import { buildProviderReplayFamilyHooks } from "openclaw/plugin-sdk/provider-model-shared";
import { buildProviderToolCompatFamilyHooks } from "openclaw/plugin-sdk/provider-tools";
import { applyChomputeOnboardDefaults, buildChomputeProviderConfig, CHOMPUTE_ACCESS_KEY_ENV_VAR, CHOMPUTE_ACCESS_KEY_FLAG, CHOMPUTE_DEFAULT_MODEL_REF, CHOMPUTE_PROVIDER_ID, CHOMPUTE_PROVIDER_LABEL, } from "./provider.js";
export * from "./provider.js";
const plugin = defineSingleProviderPluginEntry({
    id: CHOMPUTE_PROVIDER_ID,
    name: CHOMPUTE_PROVIDER_LABEL,
    description: "Chompute Advanced provider for OpenClaw.",
    provider: {
        label: CHOMPUTE_PROVIDER_LABEL,
        docsPath: "/providers/chompute",
        envVars: [CHOMPUTE_ACCESS_KEY_ENV_VAR],
        auth: [
            {
                methodId: "access-key",
                label: "Chompute Access Key",
                hint: "Sign up at https://chompute.ai/skills to get your Access Key.",
                optionKey: "chomputeAccessKey",
                flagName: CHOMPUTE_ACCESS_KEY_FLAG,
                envVar: CHOMPUTE_ACCESS_KEY_ENV_VAR,
                promptMessage: "Enter your Chompute Access Key",
                defaultModel: CHOMPUTE_DEFAULT_MODEL_REF,
                applyConfig: applyChomputeOnboardDefaults,
            },
        ],
        catalog: {
            buildProvider: buildChomputeProviderConfig,
        },
        ...buildProviderReplayFamilyHooks({ family: "openai-compatible" }),
        ...buildProviderToolCompatFamilyHooks("openai"),
    },
});
export default plugin;

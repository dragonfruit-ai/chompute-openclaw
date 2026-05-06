# Chompute OpenClaw Provider

OpenClaw provider plugin for Chompute Advanced.

This plugin registers Chompute as an OpenAI-compatible completions provider:

- Provider: `chompute`
- Model: `chompute/chompute-advanced`
- Endpoint: `https://chompute-services.dragonfruit.ai/openai/v1`
- Auth: Chompute Access Key via `CHOMPUTE_ACCESS_KEY` or `openclaw onboard --auth-choice chompute-access-key`
- Inputs: text and image

## Local Development

```bash
npm install
npm run verify
```

## Install Locally Into OpenClaw

From this repository:

```bash
npm install
npm run build
openclaw plugins install -l .
openclaw plugins inspect chompute
openclaw onboard --auth-choice chompute-access-key
openclaw gateway restart
```

During onboarding, paste a Chompute Access Key from:

```text
https://chompute.ai/skills
```

You can also pre-seed the key non-interactively:

```bash
openclaw onboard --auth-choice chompute-access-key --chompute-access-key "dfak_..."
```

## Expected OpenClaw Model

After onboarding, the default text model should be:

```text
chompute/chompute-advanced
```

The plugin uses the `openai-completions` transport so OpenClaw sends requests to the Chompute OpenAI-compatible endpoint.

## Uninstall Local Plugin

```bash
openclaw plugins uninstall chompute
```


# Chompute OpenClaw Provider

OpenClaw provider plugin for Chompute Advanced.

This plugin registers Chompute as an OpenAI-compatible completions provider:

- Provider: `chompute`
- Model: `chompute/chompute-advanced`
- Endpoint: `https://chompute-services.dragonfruit.ai/openai/v1`
- Auth: Chompute Access Key via `CHOMPUTE_ACCESS_KEY` or `openclaw onboard --auth-choice chompute-access-key`
- Inputs: text and image

## Requirements

- OpenClaw `2026.5.4` or newer
- Node.js `22` or newer
- A Chompute Access Key from `https://chompute.ai/skills`

## Install Locally

Clone this repository, install dependencies, build the plugin, and link it into OpenClaw:

```bash
git clone https://github.com/dragonfruit-ai/chompute-openclaw.git
cd chompute-openclaw
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

## Verify

Check that OpenClaw sees Chompute as the default model:

```bash
openclaw plugins inspect chompute
openclaw models list
openclaw models status --probe --probe-provider chompute
```

Expected model:

```text
chompute/chompute-advanced
```

Start the normal OpenClaw agent UI:

```bash
openclaw tui
```

Then send:

```text
What is your name? Which model/provider are you currently configured to use?
```

## Expected OpenClaw Model

After onboarding, the default text model should be:

```text
chompute/chompute-advanced
```

The plugin uses the `openai-completions` transport so OpenClaw sends requests to the Chompute OpenAI-compatible endpoint.

## Development

```bash
npm install
npm run verify
```

`npm run verify` runs TypeScript type checking, unit tests, and a production build.

## Uninstall Local Plugin

```bash
openclaw plugins uninstall chompute
```

## Publishing Status

This repository is the source for the Chompute OpenClaw provider. ClawHub/npm publishing is intentionally separate from this source commit so releases can be versioned and reviewed before distribution.

When this provider is published to ClawHub, the target install flow will be:

```bash
openclaw plugins install clawhub:@dragonfruit-ai/openclaw-provider-chompute
openclaw onboard --auth-choice chompute-access-key
openclaw gateway restart
```

## License

MIT

# Studio99 Indic Typography API — OpenAPI spec

The machine-readable description of the **Studio99 Indic Typography API** (v1): exact Hindi, Marathi, Gujarati and English typography as editable SVG and PNG.

- **Live spec (always current):** https://studio99.app/developers/openapi.json
- **This repo:** a versioned snapshot of that file, so you can diff changes, pin a version, or generate a client offline.
- **Docs:** https://studio99.app/developers/docs · **Changelog:** https://studio99.app/developers/changelog · **Status:** https://studio99.app/developers/status

## Use it

Import `openapi.json` into Postman, Insomnia, Bruno or Scalar, or generate a client:

```bash
npx @openapitools/openapi-generator-cli generate -i openapi.json -g go -o ./studio99-go
```

Official clients: [studio99-node](https://github.com/studio99-app/studio99-node) · [studio99-python](https://github.com/studio99-app/studio99-python).

## What is in the spec

| Endpoint | Cost | What it does |
|---|---|---|
| `POST /generate` | 1 credit per variant | Styled calligraphy variants of a phrase |
| `POST /render` | 1 credit | That phrase in one exact font |
| `GET /fonts` | free | The curated font slate, filterable by language, mood, use case |
| `GET /library/search`, `GET /library/{id}` | free | Search ready-made artworks |
| `GET /library/{id}/download`, `/render-svg` | 1 credit | Download an artwork |
| `GET /capabilities`, `GET /health` | free, no key | Discovery for agents and integrators |

Auth: `X-API-Key: <your key>` (or `Authorization: Bearer <your key>`). Get a key at https://accounts.studio99.app/dashboard/products/studio99-api. Free plan: 100 credits a month, watermarked previews.

## Keeping the snapshot current

```bash
node scripts/sync.mjs   # downloads the live spec and prints what changed
```

The API follows additive changes under `/v1`; breaking changes ship as `/v2` with a 12-month overlap. See the changelog.

## Licence

The spec file and scripts: MIT. The API itself, its fonts and its output are governed by the [API terms](https://studio99.app/developers/terms).

Built by [ArtoMania Studio](https://artomaniastudio.com), Pune · reach@studio99.app

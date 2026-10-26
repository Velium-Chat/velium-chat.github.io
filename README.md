<div align="center">

# Velium

### Messaging that feels alive.

An open-source Android messenger, with a little more room for personality.

[**Visit the website →**](https://velium-chat.github.io) · [Android app](https://github.com/Velium-Chat/android) · [Edge services](https://github.com/Velium-Chat/edge)

</div>

---

## About

This repository contains the source for the Velium project website: a small, interactive introduction to an open-source Android messenger. It brings the product’s design ideas to life with a live Pixel-style chat preview, Material You color controls, and bite-sized demonstrations of the experience and technology behind Velium.

The site is built with **Vite and TypeScript**, using [Material Web](https://github.com/material-components/material-web) components and Google’s [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) for real HCT-based color schemes.

## Explore

- **Try the chat preview.** Send a message, tap a quick reply, or preview the predictive back gesture.
- **Make it yours.** Choose a Pixel-inspired palette, enter a custom hex color, switch between Expressive and Tonal Spot schemes, and toggle light or dark mode.
- **See the details.** Explore interactive type scaling, haptic waveform, edge architecture, and Android support demos.
- **Learn about the project.** Find the Android app, Cloudflare edge services, safety approach, and organization repositories.

## Run locally

You’ll need Node.js 22 or newer and npm.

```bash
git clone https://github.com/Velium-Chat/velium-chat.github.io.git
cd velium-chat.github.io
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy

The site deploys to GitHub Pages through GitHub Actions whenever changes are pushed to `main`. You can also start a deployment from the repository’s **Actions** tab with **Deploy to GitHub Pages → Run workflow**.

```bash
git add .
git commit -m "Update website"
git push origin main
```

In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow builds the site and publishes the generated `dist/` directory.

## Project layout

```text
.
├── .github/workflows/deploy.yml  # Build and publish with GitHub Pages
├── index.html                    # HTML entry point and font setup
├── src/
│   ├── components/
│   │   └── pixel-simulator.ts    # Interactive chat preview
│   ├── styles/
│   │   └── main.css             # Layout, surfaces, motion, responsive styles
│   ├── theme/
│   │   └── monet-engine.ts      # HCT palette generation and theme tokens
│   └── main.ts                  # Page composition and interactions
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Repositories

| Project | What it contains |
| --- | --- |
| [android](https://github.com/Velium-Chat/android) | Velium for Android |
| [edge](https://github.com/Velium-Chat/edge) | Cloudflare edge services |
| [velium-chat.github.io](https://github.com/Velium-Chat/velium-chat.github.io) | This website |
| [.github](https://github.com/Velium-Chat/.github) | Shared organization resources |

## Contributing

Ideas, bug reports, and pull requests are welcome. For changes to this site, start the dev server, make your update, and run `npm run build` before opening a pull request.

## License

This website is distributed under the [Apache License 2.0](LICENSE).

---

<div align="center">
  Made for the conversations that matter. · <a href="https://github.com/Velium-Chat">Velium on GitHub</a>
</div>

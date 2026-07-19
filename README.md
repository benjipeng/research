# research.appcubic.com

Source for **research.appcubic.com** — the research site of B. Peng, Ph.D. (Principal Investigator, AppCubic): analytical chemistry and biophysics, and the machine-learning program that grew out of the measurement bench.

Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Concept

The landing page is a traverse of the visible spectrum (300–800 nm): research stations sit at their true wavelengths — the 488 nm excitation line, GFP/optical modulation at 509 nm, mCherry at 610 nm, and mass spectrometry past the edge of vision. Detail pages (`/work/*`) treat each research area as a specimen under the instrument, including its own computed FFT.

All imagery is real science: Wellcome Collection fluorescence micrographs (CC-BY 4.0), RCSB PDB structure renders (CC0), and data-art computed in-house (FFT of the micrographs, chromatogram ridge families, latent-space constellation).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # serve the build locally
```

## Stack

Astro 5 · vanilla JS (no framework runtime) · Jost + EB Garamond + Geist Mono (Fontsource) · GitHub Pages.

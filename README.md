# UBC South Africa Economy Analysis (USE)

Deployed at: [https://ubc-sa-economy-analysis.netlify.app/](https://ubc-sa-economy-analysis.netlify.app/)

This project provides interactive visualizations and data analysis for South Africa, with a focus on the eThekwini metro. The platform is built with React and supports modular galleries of plots grouped into cards and tabs.

## Deployment and Updates

After making code changes, rebuild the project and push to both repositories:

```bash
# build for production
npm run build

# push changes to organization repo
git push origin main

# push changes to public mirror repo
git push mirror main
```

### Remote Setup

Make sure you have two remotes configured:

```bash
# check remotes
git remote -v

# set the organization repo
git remote set-url origin https://github.com/WoutersResearchGroup/South-Africa-Economy-Analysis.git

# add a public mirror repo
git remote add mirror https://github.com/zzmjeremy/South-Africa-Economy-Analysis-public.git
```

Netlify is connected to the **public mirror repository**, so any push there will automatically trigger a new deployment.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will run locally, usually at http://localhost:5173.

## 1. Data Sources

All datasets are hosted on Google Drive.

- National-level (South Africa):  
  https://drive.google.com/drive/u/1/folders/1hFlJhoAdWW5ko20mcpC9Zd9QYE0kY3qc
- eThekwini-specific:  
  https://drive.google.com/drive/u/1/folders/1HD38H5v1oF1jJVkKgr_H_eyv5lW7xlwc

Add or update figures in these folders, then reference them in `src/data/plotsRaw.json`.

## 2. Adding Tabs, Groups, Descriptions, Tags, and Plots

- Tabs are defined in `src/components/Gallery`.
- Groups (cards) are defined in `src/data/plotsRaw.json`.

Example group:

```json
{
  "name": "Industry Growth",
  "description": "Industry growth trends for South Africa",
  "tags": ["Line", "Interactive"],
  "files": [
    "National/Industry_Growth/EmploymentGrowth.html",
    "National/Industry_Growth/EmploymentGrowth.png"
  ]
}
```

- `description`: text shown on the card.
- `tags`: keywords you want to display.
- `files` or `file`: paths to plot files.

## 3. File Locations and Generating galleryData.json

- Place plots under `public/plots`.  
  Example: `public/plots/eThekwini/FTE_Analysis/EmploymentGrowth_vs_ECI.html`

- After editing `plotsRaw.json`, regenerate `galleryData.json`:

```powershell
node scripts/buildGalleryData.mjs | Set-Content -Path src/data/galleryData.json -Encoding utf8
```

- Adjust layout of plots inside a card with `src/config/layoutOverrides.js`.

## 4. Preview Images

- Previews are generated automatically.
- For HTML plots, add a PNG thumbnail to `public/thumbs` with the same base filename.

Example:
- Plot: `EmploymentGrowth.html`
- Thumbnail: `EmploymentGrowth.png`

## 5. Naming Conventions

Use short, descriptive, and consistent file names.

- Good: `EmploymentGrowth_vs_ECI.html`
- Bad: `plot1-final (copy).html`

Consistent names make it easier to display and maintain the gallery.

## Summary

1. Place new plots in `public/plots`.
2. Add or edit groups in `src/data/plotsRaw.json`.
3. Regenerate `galleryData.json` with the build script.
4. Add thumbnails in `public/thumbs` for HTML plots.
5. Keep file names clean and consistent.

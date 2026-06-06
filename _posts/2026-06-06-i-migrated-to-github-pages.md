---
layout: post
title:  "I Successfully Migrated my Portfolio to GitHub Pages"
tags: github pages
categories: tutorial
---

Between Squarespace and Replit, I was spending $45 a month to have a site for Git Cute and one for my personal portfolio page. I enjoyed the custom terminal that I built, but realistically, a portfolio is supposed to show a recruiter, potential client, or anyone who you are without fanfare. That's when I remembered that GitHub Pages was an option. I knew that there were going to be restrictions in terms of bandwidth and technologies used. I'm not a front end engineer and have never pretended to be, so I took on the challenge of the migration.

<!--more-->

This project took me roughly 2 days to complete from design, implementation, and content migration. The thing that saved the most time was to use [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll), a static page builder that already has inherent support for GitHub Pages. Learning a new technology and it will save me time and headaches in the end? A win/win.

## The Constraints

Now, GitHub is straight-forward when it comes to [the constraints](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) that they implement, especially if you want to take advantage of absolutely free hosting. These are the ones that I actually cared about:

- GitHub Free repos *must* be public
- Published sites must be < 1GB
- Bandwidth limit of 100GB

I quickly got over my apprehension of someone being able to see or fork any content from the repo of my portfolio because this is exactly what .gitignore intended for. The limitations for the size of site and bandwidth were of minimal risk to me because that signaled to me that what I design would need to have zero images and 

## The Jekyll Theme

The thing that slowed me down the most in the process was the theme design. I am both terrible at implementing but particular about how I want myself represented on the Internet. I love anything that involves millenial pink, magic girl, and my current hyperfixation of Frieren and her favorite magic spell. I wondered, "Can I implement this with one of Jekyll's base themes" The answer was no: Minima or the others would not be able to cover this.

> Note: There's a limited list of Jekyll themes that work with GitHub Pages!

GitHub's list of [supported themes](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#supported-themes) and also has a Ruby Gem where you can install other themes that you find hosted on GitHub, so you don't have to be difficult like me and build something from scratch unless you absolutely can't find something that suits your needs.

## To Save You Time

### 1. Sass Rules Deprecated
When you are building your Jekyll site locally, you will see the Sass warning of `@import rules are deprecated`. Ignore this. The version of Jekyll will not allow you to implement `@use petal`. I am saving you 20 minutes of frustration that I could not save myself from.

### 2. Hide your _site folder
Your _site folder is where the build artifacts for your project live. To avoid wondering why your .scss isn't, make sure that you are putting them in the correct folders or at root and NOT inside of the build folder. Also be sure to add `_site/` to your `.gitignore`.

### 3. Add Blog Post Drafts
If you are going to be using your site primarily as a blog, be sure to add `_drafts/` to your project directory. You do not have to follow the date formatting for your Markdown files in this project and can use it to store future blog posts that you don't want published right away.

> Tip Add `_drafts/` to your .gitignore if your repo is public

### 4. Use a Separator for Scrolling Posts 
I decided that my collection of blogs were going to be on the front page of my site. Instead of the full post showing, I wanted to show excerpts to allow people to click through to the full blog.

Add this to your `_config.yml`:

`excerpt_separator: "<!--more-->"`

Add the separator in your post wherever you want your excerpt to end.

### 5. Implement SEO for your Page
[This Dev.to](https://dev.to/dss99911/optimizing-jekyll-for-seo-complete-guide-4hl9) post walks you through what Jekyll plugins to add to index your website and posts.

Sources:<br>
[Jekyll Documentation]()<br>
[GitHub Pages Documentation](https://docs.github.com/en/pages)
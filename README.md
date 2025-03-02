# 706tribe.com Website

## Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/706tribe/706tribe-website.git
   cd 706tribe-website
   ```
2. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

## Pages

所有的页面都在 src/pages 下面，路径对应 URL。默认语言为中文。

页面有两种格式，astro 和 mdx。astro 适用于比较复杂的页面，例如自定义的 layout，mdx 可以直接使用 Markdown 语法。

| File Path              | URL                 | Page                    |
|------------------------|---------------------|-------------------------|
| index.astro            | /                   | 主页                      |
| en/index.astro         | /en                 | Home                    |
| about.astro            | /about              | 关于我们                    |
| en/about.astro         | /en/about           | About                   |
| join.astro             | /join               | 加入营地                    |
| en/join.astro          | /en/join            | Join Camp               |
| 2022/index.mdx         | /2022               | 2022                    |
| en/2022/index.mdx      | /en/2022            | 2022 (English)          |
| 2022/collector.mdx     | /2022/collector     | The Collector           |
| en/2022/collector.mdx  | /en/2022/collector  | The Collector (English) |
| 2023/index.mdx         | /2023               | 2023                    |
| en/2023/index.mdx      | /en/2023            | 2023 (English)          |
| 2023/ark.mdx           | /2023/ark           | The Ark                 |
| en/2023/ark.mdx        | /en/2023/ark        | The Ark (English)       |
| 2023/respirator.mdx    | /2023/respirator    | Respirator              |
| en/2023/respirator.mdx | /en/2023/respirator | Respirator (English)    |
| 2024/index.mdx         | /2024               | 2024                    |
| en/2024/index.mdx      | /en/2024            | 2024 (English)          |

导航菜单位于 `src/components/Header.astro` 这个页面上有两套菜单，分别是桌面版本和移动版本的，增加新页面后记得加到导航里。

## Build

修改页面后记得跑一下 `npm run build`，检查有没有错误，没有问题就可以直接 `git push` 了。

main branch 被更新后会自动 build 和 deploy，可以在 https://github.com/706tribe/706tribe-website/actions 检查 workflow 的状态，通常一分钟左右网站就能更新完成。


## Docs

- Astro: https://docs.astro.build/en/getting-started/
- Astro Markdown Support: https://docs.astro.build/en/guides/markdown-content/
- CSS Framework: https://tailwindcss.com/docs/styling-with-utility-classes
- CSS Component: https://daisyui.com/components/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  // GitHub Pages用の設定
  basePath: '/portfolio', // ここをあなたのリポジトリ名に変更
  assetPrefix: '/portfolio/', // ここをあなたのリポジトリ名に変更
}

module.exports = nextConfig 
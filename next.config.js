/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 開発環境での問題解決のため、一時的にコメントアウト
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
}

module.exports = nextConfig 
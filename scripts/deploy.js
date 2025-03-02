const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// out/.nojekyllファイルを作成
const nojekyllPath = path.join(process.cwd(), 'out', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file');

// GitHub PagesブランチにoutディレクトリをデプロイするためのGitコマンド
try {
  // ステップ1: 変更されたファイルをステージングに追加
  console.log('Adding out directory to git...');
  execSync('git add out/ -f');
  
  // ステップ2: コミット
  console.log('Committing changes...');
  execSync('git commit -m "Deploy to GitHub Pages"');
  
  // ステップ3: gh-pagesブランチにプッシュ (outディレクトリのみ)
  console.log('Pushing to gh-pages branch...');
  execSync('git subtree push --prefix out origin gh-pages');
  
  console.log('Successfully deployed to GitHub Pages!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
} 
'use strict';

const core = require('./src/core');

function startServer(port = 3000) {
  console.log(`🚀 Starting nextsj server on http://localhost:${port} ...`);
  console.log(`⚠️ Warning: This is NOT Next.js. Nothing is actually being served.`);
}

function createPage(name) {
  console.log(`📄 Creating page "${name}"…`);
  console.log(`💡 Tip: You can imagine it being fully rendered with SSR.`);
}

function useRouter() {
  console.log('🔀 useRouter called… routing is imaginary.');
  return {
    push: (path) => console.log(`🚧 Navigating to "${path}"… in your imagination`),
    replace: (path) => console.log(`♻️ Replacing with "${path}"… maybe`),
    prefetch: (path) => console.log(`⏳ Prefetching "${path}"… or not`)
  };
}

function nextsj() {
  console.log('Welcome to nextsj !');
  console.log('This is a troll package: behave as if SSR, SSG, and routing exist !');
}

module.exports = {
  nextsj,
  startServer,
  createPage,
  useRouter,
  ...core
};
'use strict';

function build() {
  console.log('Building your nextsj app… nothing actually happens.');
}

function exportApp() {
  console.log('Exporting static files… all imaginary!');
}

function getStaticProps() {
  console.log('getStaticProps called… returns nothing useful.');
  return {};
}

module.exports = {
  build,
  exportApp,
  getStaticProps
};
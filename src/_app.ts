import { readFile, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { DIST_DIR, SRC_DIR } from './directories';

import Mustache = require('mustache');

const defaultEncoding = {
  encoding: 'utf8',
};

async function loadTemplate() {
  const templateFile = resolve(SRC_DIR, 'utag-input.js.mustache');
  return readFile(templateFile, defaultEncoding);
}

// Top-level await not possible …
// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async function init() {
  const template = await loadTemplate();
  const output = Mustache.render(
    template,
    {
      customCss: 'body {  background-color: thistle !important; }',
      customHtml: '<h1>huhu</h1>',
      customJs: 'console.log("hello")',
    },
    undefined,
    ['%%%', '%%%'] // opening and closing tags
  );
  const targetFile = resolve(DIST_DIR, 'utag-override.js');
  await writeFile(targetFile, output, defaultEncoding);
})();

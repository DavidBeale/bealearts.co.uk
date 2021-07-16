import { writeFile, mkdir, copyFile } from 'fs/promises';
import fg from 'fast-glob';
import path from 'path';

import { init as initContext } from './context.mjs';

const sourceFolder = path.resolve('./src/site');
const targetFolder = path.resolve('./dist');

const sourceStream = fg.stream([path.join(sourceFolder, '**/*')], {
  absolute: true,
  objectMode: true
});

for await (const source of sourceStream) {
  const ext = path.extname(source.name);
  const sourcePath = source.path;
  const targetPath = sourcePath.replace(sourceFolder, targetFolder);

  if (ext === '.jsx') {
    const targetFilePath = targetPath.replace(ext, '.html');
    render(sourcePath, targetFilePath)
      .catch(console.error);
  } else {
    copy(sourcePath, targetPath)
      .catch(console.error);
  }

}

async function render(source, target) {
  console.info('Rendering', source, '=>', target);
  initContext();
  const module = await import(source);
  const result = await module.default();

  if (Array.isArray(result)) {
    result.forEach(async ({ params, content }) => {
        // TODO: Generalise
      const resolvedTarget = target.replace('{projectType}', params.projectType);
      await mkdir(path.dirname(resolvedTarget), {
        recursive: true
      });
      return await writeFile(resolvedTarget, ( await content ));
    });
  } else {
    await mkdir(path.dirname(target), {
      recursive: true
    });
    return await writeFile(target, result);
  }
}

async function copy(source, target) {
  console.info('Copying', source, '=>', target);
  await mkdir(path.dirname(target), {
    recursive: true
  });
  return await copyFile(source, target);
}

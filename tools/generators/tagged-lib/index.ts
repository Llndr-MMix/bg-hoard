import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator as wLibraryGenerator } from '@nrwl/workspace/generators';
import { libraryGenerator as aLibraryGenerato } from '@nrwl/angular/generators';
import { GeneratorOptions } from './schema';

export default async function (tree: Tree, schema: GeneratorOptions) {
  var libName = `${schema.type}-${schema.name}`;
  var tags = `scope:${schema.directory}, type:${schema.type}`;
  console.log('library name : ', libName);
  console.log('directory : ', schema.directory);
  console.log('tags : ', tags);
  var typeUI = ['ui', 'feature'];
  if (typeUI.includes(schema.type))
    await aLibraryGenerato(tree, {
      name: libName,
      directory: schema.directory,
      tags: tags,
    });
  else
    await wLibraryGenerator(tree, {
      name: libName,
      directory: schema.directory,
      tags: tags,
    });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

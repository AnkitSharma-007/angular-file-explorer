import { FileNode } from '../models/file-node';

export const FILE_STRUCTURE: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'app',
        type: 'folder',
        children: [
          {
            name: 'file-node',
            type: 'folder',
            children: [
              { name: 'file-node.component.html', type: 'file' },
              { name: 'file-node.component.scss', type: 'file' },
              { name: 'file-node.component.ts', type: 'file' },
            ],
          },
          { name: 'app.component.html', type: 'file' },
          { name: 'app.component.scss', type: 'file' },
          { name: 'app.component.ts', type: 'file' },
          { name: 'app.config.ts', type: 'file' },
          { name: 'app.routes.ts', type: 'file' },
        ],
      },
      {
        name: 'data',
        type: 'folder',
        children: [{ name: 'file-structure.ts', type: 'file' }],
      },
      {
        name: 'models',
        type: 'folder',
        children: [{ name: 'file-node.ts', type: 'file' }],
      },
      { name: 'index.html', type: 'file' },
      { name: 'main.ts', type: 'file' },
      { name: 'styles.scss', type: 'file' },
    ],
  },
  {
    name: 'angular.json',
    type: 'file',
  },
  {
    name: 'package.json',
    type: 'file',
  },
  {
    name: 'tsconfig.json',
    type: 'file',
  },
];

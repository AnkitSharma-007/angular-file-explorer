export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[]; // Only folders will have children
}

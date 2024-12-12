import { Component, Input } from '@angular/core';
import { FileNode } from '../../models/file-node';

@Component({
  selector: 'app-file-node',
  templateUrl: './file-node.component.html',
  styleUrl: './file-node.component.scss',
})
export class FileNodeComponent {
  @Input() nodes: FileNode[] | undefined;

  private fileIcon = new Map<string, string>([
    ['html', 'fa-brands fa-html5'],
    ['css', 'fa-brands fa-css3-alt'],
    ['scss', 'fa-brands fa-sass'],
    ['js', 'fa-brands fa-js'],
    ['json', 'fa-brands fa-node-js'],
    ['ts', 'fa-brands fa-js-square'],
  ]);

  expandedNodes = new Set<FileNode>();

  toggleExpand(node: FileNode): void {
    if (this.expandedNodes.has(node)) {
      this.expandedNodes.delete(node);
    } else {
      this.expandedNodes.add(node);
    }
  }

  isExpanded(node: FileNode): boolean {
    return this.expandedNodes.has(node);
  }

  getFileIcon(node: FileNode) {
    const fileExtension = node.name.split('.').pop();
    return this.fileIcon.get(fileExtension!) || '';
  }
}

import { Component } from '@angular/core';
import { FILE_STRUCTURE } from '../data/file-structure';
import { FileNodeComponent } from './file-node/file-node.component';

@Component({
  selector: 'app-root',
  imports: [FileNodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fileStructure = FILE_STRUCTURE;
}

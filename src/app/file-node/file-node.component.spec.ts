import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNodeComponent } from './file-node.component';

describe('FileNodeComponent', () => {
  let component: FileNodeComponent;
  let fixture: ComponentFixture<FileNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

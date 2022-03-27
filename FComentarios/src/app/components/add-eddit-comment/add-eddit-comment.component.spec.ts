import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdditCommentComponent } from './add-eddit-comment.component';

describe('AddEdditCommentComponent', () => {
  let component: AddEdditCommentComponent;
  let fixture: ComponentFixture<AddEdditCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdditCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

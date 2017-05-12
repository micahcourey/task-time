import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskDetailComponent } from './task-detail.component';
import { Task } from './task';

describe('TaskDetailComponent', () => {

  let comp: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailComponent ],
    });

    fixture = TestBed.createComponent(TaskDetailComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;

    it('should display original task name', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain(Task.name);
    })
  });
});
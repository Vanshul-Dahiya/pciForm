import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button2Page } from './button2.page';

describe('Button2Page', () => {
  let component: Button2Page;
  let fixture: ComponentFixture<Button2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Button2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

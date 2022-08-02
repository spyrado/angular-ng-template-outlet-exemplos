import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletListComHtmlExampleComponent } from './template-outlet-list-com-html-example.component';

describe('TemplateOutletListComHtmlExampleComponent', () => {
  let component: TemplateOutletListComHtmlExampleComponent;
  let fixture: ComponentFixture<TemplateOutletListComHtmlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutletListComHtmlExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletListComHtmlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

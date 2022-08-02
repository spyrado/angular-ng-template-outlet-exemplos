import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletListExampleComponent } from './template-outlet-list-example.component';

describe('TemplateOutletListExampleComponent', () => {
  let component: TemplateOutletListExampleComponent;
  let fixture: ComponentFixture<TemplateOutletListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutletListExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

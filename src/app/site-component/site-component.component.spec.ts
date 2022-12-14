import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteComponentComponent } from './site-component.component';

describe('SiteComponentComponent', () => {
  let component: SiteComponentComponent;
  let fixture: ComponentFixture<SiteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

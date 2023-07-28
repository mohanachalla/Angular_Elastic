//src\app\search-details-bar\search-details-bar.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsBarComponent } from './search-details-bar.component';

describe('SearchDetailsBarComponent', () => {
  let component: SearchDetailsBarComponent;
  let fixture: ComponentFixture<SearchDetailsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDetailsBarComponent]
    });
    fixture = TestBed.createComponent(SearchDetailsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

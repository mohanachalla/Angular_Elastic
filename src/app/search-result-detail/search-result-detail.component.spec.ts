//src\app\search-result-detail\search-result-detail.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultDetailComponent } from './search-result-detail.component';

describe('SearchResultDetailComponent', () => {
  let component: SearchResultDetailComponent;
  let fixture: ComponentFixture<SearchResultDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultDetailComponent]
    });
    fixture = TestBed.createComponent(SearchResultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

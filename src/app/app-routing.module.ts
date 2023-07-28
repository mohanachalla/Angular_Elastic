//src\app\app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultDetailComponent } from './search-result-detail/search-result-detail.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'search-result-detail/:id', component: SearchResultDetailComponent },
  { path: 'search-autocomplete', component: AppComponent }, // Add this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

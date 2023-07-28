// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from './articles.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultDetailComponent } from './search-result-detail/search-result-detail.component';
import { SearchDetailsBarComponent } from './search-details-bar/search-details-bar.component'; // Import the new component

@NgModule({
  declarations: [AppComponent, SearchResultDetailComponent, SearchDetailsBarComponent], // Add SearchDetailsBarComponent here
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [ArticlesService],
})
export class AppModule {}

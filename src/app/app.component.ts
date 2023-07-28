// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleInterface } from './article.interface';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchValue = '';
  articles: ArticleInterface[] = [];
  searchForm = this.fb.group({
    searchValue: '',
  });

  constructor(
    private articlesService: ArticlesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Don't call fetchData here, as it will be called when the search form is submitted.
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue?.trim() || ''; // Trim the search value and set it to an empty string if it is falsy.
    this.fetchData();
  }

  onSearchInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchValue = inputElement?.value || ''; // Use optional chaining (?.) to handle possible null value.
  }

  fetchData(): void {
    this.articlesService.getArticles(this.searchValue).subscribe(
      (articles) => {
        this.articles = articles;
      },
      (error) => {
        console.error('Error fetching articles:', error);
        this.articles = []; // Clear the articles array in case of an error.
      }
    );
  }

  onSelectArticle(article: ArticleInterface): void {
    this.articlesService.setSelectedArticle(article);
    this.router.navigate(['/search-result-detail', article.id]);
  }
}

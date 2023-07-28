// src/app/search-result-detail/search-result-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { ArticleInterface } from '../article.interface';

@Component({
  selector: 'app-search-result-detail',
  templateUrl: './search-result-detail.component.html',
  styleUrls: ['./search-result-detail.component.css'],
})
export class SearchResultDetailComponent implements OnInit {
  selectedArticle: ArticleInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const articleId = params.get('id');
      if (articleId) {
        this.articlesService.getArticleById(articleId).subscribe((article) => {
          this.selectedArticle = article;
        });
      }
    });
  }
}

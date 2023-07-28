//src\app\search-details-bar\search-details-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleInterface } from '../article.interface';

@Component({
  selector: 'app-search-details-bar',
  templateUrl: './search-details-bar.component.html',
  styleUrls: ['./search-details-bar.component.css'],
})
export class SearchDetailsBarComponent implements OnInit {
  selectedArticle: ArticleInterface | null = null;
  articles: ArticleInterface[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.selectedArticle$.subscribe((article) => {
      this.selectedArticle = article;
    });

    this.articlesService.getArticles('').subscribe((articles) => {
      this.articles = articles;
    });
  }

  closeDetails(): void {
    this.articlesService.setSelectedArticle(null);
  }

  showDetails(article: ArticleInterface): void {
    this.articlesService.setSelectedArticle(article);
  }
}

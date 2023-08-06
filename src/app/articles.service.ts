//src\app\articles.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ArticleInterface } from './article.interface';

@Injectable()
export class ArticlesService {
  private readonly apiUrl = 'http://localhost:9200';
  private readonly username = 'elastic';
  private readonly password = '****************';
  private readonly indexNames = ['cars', 'cars_new']; // Add the other index names here

  private selectedArticleSubject = new BehaviorSubject<ArticleInterface | null>(null);
  selectedArticle$: Observable<ArticleInterface | null> = this.selectedArticleSubject.asObservable();

  constructor(private http: HttpClient) {}

  getArticles(searchValue: string): Observable<ArticleInterface[]> {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
      'Content-Type': 'application/json'
    });

    const payload = {
      query: {
        bool: {
          must: {
            match: {
              name: {
                query: searchValue,
                fuzziness: 'AUTO'
              }
            }
          }
        }
      }
    };

    const url = `${this.apiUrl}/${this.indexNames.join(',')}/_search`;
    return this.http.post<any>(url, JSON.stringify(payload), { headers }).pipe(
      map((response) => {
        return response.hits.hits.map((hit: any) => hit._source) as ArticleInterface[];
      }),
      catchError((error) => {
        console.error('Error fetching articles:', error);
        return [];
      })
    );
  }

  getArticleById(id: string): Observable<ArticleInterface | null> {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    });

    const url = `${this.apiUrl}/${this.indexNames.join(',')}/_doc/${id}`;

    return this.http.get<ArticleInterface>(url, { headers }).pipe(
      catchError((error) => {
        console.error('Error fetching article by ID:', error);
        return throwError('Article not found'); // Use throwError to propagate the error
      })
    );
  }

  setSelectedArticle(article: ArticleInterface | null): void {
    this.selectedArticleSubject.next(article);
  }
}

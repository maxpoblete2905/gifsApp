import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseGifs, Gifs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private _api_key: string = 'xc5auUURoUg8P8FQ8E0jHsRfgv0z6YXH';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs/search';
  public gifsList: Gifs[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private _validationsTag(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this._saveLocalStorage();
  }

  private _saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  deleteTagByTitle(tag: string) {
    this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    this._saveLocalStorage();
    if (this._tagsHistory.length === 0) {
      this.gifsList = [];
    } else {
      this.searchTag(this._tagsHistory[0]);
    }
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this._validationsTag(tag);

    const params = new HttpParams()
      .set('api_key', this._api_key)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<ResponseGifs>(`${this._serviceUrl}?`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
      });
  }
}

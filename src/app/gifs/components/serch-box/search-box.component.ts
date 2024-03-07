import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifsService.service';

@Component({
  selector: 'serach-box',
  templateUrl: 'search-box.component.html',
  styleUrl: 'search-box.component.css',
})
export class SearchBoxModule {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}

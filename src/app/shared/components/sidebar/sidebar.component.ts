import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifsService.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get getTagHistory() {
    return this.gifsService.tagHistory;
  }

  getTagAgain(item: string): void {
    this.gifsService.searchTag(item);
  }

  emitDeleteTag(tag: string) {
    this.gifsService.deleteTagByTitle(tag);
  }
}

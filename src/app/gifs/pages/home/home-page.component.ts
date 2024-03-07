import { Component } from '@angular/core';
import { GifsService } from '../../services/gifsService.service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private gifsServece: GifsService) {}

  get gifs(): Gifs[] {
    return this.gifsServece.gifsList;
  }
}

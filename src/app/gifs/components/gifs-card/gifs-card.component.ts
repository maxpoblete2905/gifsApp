import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gif!: Gifs;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required.');
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public gif!: string;
  public hasLoader: boolean = false;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Url Property is required.');
  }

  onLoader() {
    this.hasLoader = true;
  }
}

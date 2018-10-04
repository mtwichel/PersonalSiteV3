import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit, AfterViewInit {

  public loaded = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loaded = true;
  }

}

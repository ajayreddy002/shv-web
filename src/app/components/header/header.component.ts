import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScroll: boolean;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}

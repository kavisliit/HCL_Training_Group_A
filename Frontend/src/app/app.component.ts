import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nav: boolean = true;
  admin: boolean = false
  ngOnInit(): void {
    if (window.location.href === 'http://localhost:4200/login' || window.location.href === 'http://localhost:4200/register') {
      this.nav = false
    }
  }
  title = 'Frontend';
}

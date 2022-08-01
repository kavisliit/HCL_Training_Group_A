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
    if (window.location.href === 'http://localhost:4200/login' || window.location.href === 'http://localhost:4200/' || window.location.href === 'http://localhost:4200/register' || window.location.href === 'http://localhost:4200/adminlogin') {
      this.nav = false
    }
    if (window.location.href === 'http://localhost:4200/home' || window.location.href === 'http://localhost:4200/adminhome') {
      this.nav = true
    }
  }


  logout() {
    var id = localStorage.getItem("uid")

    if (id) {
      localStorage.removeItem("uid")
      location.href = "/login"
    }
    else if (localStorage.getItem("aid")) {
      localStorage.removeItem("aid")
      location.href = "/adminlogin"
    }
  }
  title = 'Frontend';
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nav: boolean = true;
  admin: boolean = false
  ngOnInit(): void {
    if (window.location.href === 'http://localhost:4200/login' || window.location.href === 'http://localhost:4200/' || window.location.href === 'http://localhost:4200/register' || window.location.href === 'http://localhost:4200/adminlogin' || window.location.href === 'http://localhost:4200/main') {
      this.nav = false
    }
    if (window.location.href === 'http://localhost:4200/home' || window.location.href === 'http://localhost:4200/adminhome') {
      this.nav = true
    }
  }

  constructor(private router: Router) { }
  goHome() {
    if (localStorage.getItem("uid")) {
      this.router.navigate(["home"])
    } else if (localStorage.getItem("aid")) {
      this.router.navigate(["adminhome"])
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
      localStorage.removeItem("cart")
      location.href = "/adminlogin"
    }
  }
  title = 'Frontend';
}

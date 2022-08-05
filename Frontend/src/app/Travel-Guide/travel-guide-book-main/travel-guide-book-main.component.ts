import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-guide-book-main',
  templateUrl: './travel-guide-book-main.component.html',
  styleUrls: ['./travel-guide-book-main.component.css']
})
export class TravelGuideBookMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToBookGuide(){
    this.router.navigate(["bookGuide"]);
  }

  redirectToBookedGuides(){
    this.router.navigate(["bookedGuides"]);
  }
}

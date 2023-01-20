import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //variable

  constructor(  private router: Router,) {}
  ngOnInit(): void {
    type Timer = ReturnType<typeof setTimeout>;

    const timer: Timer = setTimeout(() => {
      this.router.navigate(['/login'])
    }, 5000);
  }
}


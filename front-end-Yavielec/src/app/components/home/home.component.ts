import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //variable

  constructor() { }
  ngOnInit(): void {
  }

  redireccionar(){
    const dom = document.getElementById('dom');
    console.log(dom);
  }

}

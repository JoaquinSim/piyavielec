import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: List[] = []

  constructor(private _listService: ListService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._listService.getList().subscribe(data => {
      this.listProduct = data;
    })
  }

  voteList(){
    
  }
}

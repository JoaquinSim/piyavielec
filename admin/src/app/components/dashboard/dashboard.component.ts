import { Component, OnInit, VERSION  } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { ListService } from 'src/app/services/list.service';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  listProduct: List[] = []

  constructor(private _listService: ListService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._listService.getList().subscribe(data => {
      this.listProduct = data;
    })
  }



}

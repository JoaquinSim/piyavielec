import { Component, OnInit, VERSION  } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  nombreLista: string = '';
  descripcionLista: string = '';
  imagenLista: string = '';

  constructor(private _listService: ListService, private http: HttpClient,  private router: Router, private toastr: ToastrService, private _errorService: ErrorService) { }

  ngOnInit(): void {
  }


  registraList(){
    const list: List = {
      name: this.nombreLista,
      description: this.descripcionLista,
      imagen: this.imagenLista
    }

    this._listService.registraList(list).subscribe({
      next: (v) => {
        this.toastr.success(`La lista ${this.nombreLista} fue registrada con exito`, 'Lista registrada');
        this.router.navigate(['/home']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
      }
    })
  }

}

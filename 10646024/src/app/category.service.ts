import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serverIp = 'http://159.65.12.234:8000/';

  constructor(
    public http: HttpClient
  ) { }

}

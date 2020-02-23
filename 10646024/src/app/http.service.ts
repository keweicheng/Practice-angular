import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serverIp = 'http://159.65.12.234:8000/';

  constructor(
    public http: HttpClient
  ) { }

  getData() {
    return this.http.get(this.serverIp + 'category');
  }
}

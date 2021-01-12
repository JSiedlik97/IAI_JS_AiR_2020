import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
   }

   getALL(){
      return this.http.get(this.url);

   }

   getById(id) {
      return this.http.get(this.url +'/api/posts/' + id);
   }
}

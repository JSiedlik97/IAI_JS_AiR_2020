import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://blogtai.herokuapp.com';

  constructor(private http: HttpClient) {
   }

   getALL(){
      return this.http.get(this.url+ ‘/api/posts/’);

   }

   getById(id) {
             return this.http.get(this.url + ‘/api/posts/’ + id);
     }

}

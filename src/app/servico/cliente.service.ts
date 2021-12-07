import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: string;
  estudanteUm: string;
  estudanteDois: string;

  
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
private url ='http://localhost/php/api/api.php'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id:any){
    return this.http.delete(this.url + '?id=' + id);
  }
  create(cliente:Cliente){
    return this.http.post(this.url, cliente);
  }
}

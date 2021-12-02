import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}getAll`);
  }

  registrar_contacto(contacto:any): Observable <any>{
    return this.http.post(`${this.url}addContact`, contacto);
  }

  eliminar_contacto(id:number){
    return this.http.delete(`${this.url}deleteContact/${id}`);
  }

  actualizar_contacto(contacto:any, id:number){
    return this.http.put(`${this.url}updateContact/`+id, contacto);
  }

  leer_contacto(contacto:any){
    return this.http.get(`${this.url}getContactoById`);
  }
}

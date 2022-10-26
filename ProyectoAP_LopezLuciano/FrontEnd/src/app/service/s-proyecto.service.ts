import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  URL= environment.URL + 'proyectos/'

  constructor(private httpClient: HttpClient) {}

  public lista():Observable<proyecto[]>{
    return this.httpClient.get<proyecto[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<proyecto>{
    return this.httpClient.get<proyecto>(this.URL + `detail/${id}`)
  }

  public save(Proyecto:proyecto):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create',Proyecto);
  }

  public update(id: number, Proyecto:proyecto):Observable<any>{
    return this.httpClient.put<any>(this.URL +`update/${id}`,Proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

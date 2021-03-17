import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura';
import { Examen } from '../models/examen';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends CommonService<Examen>{

  protected baseEndpoint = 'http://localhost:8090/api/examenes';

  constructor(http: HttpClient) {
    super(http);
   }

   public findAllAsignatura(): Observable <Asignatura[]>{
     return this.http.get<Asignatura[]>(`${this.baseEndpoint}/asignaturas`);
   }

   public filtrarPorNombre(nombre: string): Observable<Examen[]>{
    return this.http.get<Examen[]>(`${this.baseEndpoint}/filtrar/${nombre}`);
  }
}

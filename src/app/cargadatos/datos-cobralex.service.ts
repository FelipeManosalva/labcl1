import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';
import {Cuenta } from '../models/cuenta';
@Injectable({
  providedIn: 'root'
})
export class DatosCobralexService {
private cuentas$ = new Subject<Cuenta[]>();
  constructor() { }
  
}

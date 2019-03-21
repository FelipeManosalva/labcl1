import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CuentaCobralex} from '../models/CuentaCobralex';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  
  constructor(private http: HttpClient) {}
   getDatos(){
   	/*let params = new HttpParams();
   	params = params.append('usr', usr);
   	params = params.append('psw', psw);*/
   	return this.http.get("http://localhost:8080/data")
   		
	
   }

   getCuentasCobralex( nro_fi : string):Observable<CuentaCobralex[]> {
    console.log("solicitnado cuentas cobralex a la API");
    let params = new HttpParams();
    params = params.append('nro_fi', nro_fi);
    return this.http.get<CuentaCobralex[]>("http://localhost:8080/CuentasCobralex",{ params: params });

   }
   
   nuevoEvento(nro_fi:number,rut_num:string,accion:number,observacion:string){
    let params = new HttpParams();
    params = params.append('nro_fi', nro_fi.toString());
    params = params.append('rut_num', rut_num);
    params = params.append('accion', accion.toString());
    params = params.append('observacion', observacion);
    return this.http.get("http://localhost:8080/NuevaGestion",{ params: params })
      
   }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
   getDatos( usr : string,psw:string){
   	let params = new HttpParams();
   	params = params.append('usr', usr);
   	params = params.append('psw', psw);
   	return this.http.get("http://localhost:8080/login",{ params: params })
   		
	
   }

}

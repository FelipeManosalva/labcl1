import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
//import { environment } from '../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  res ={}
  usuario = {
  	user :'',
  	psw :''
  }	

  constructor(private mfs : LoginService,private router: Router) { 
  	console.log('ENTRO A CONSTRUCTOR');
  }

  ngOnInit() {
     console.log('ENTRO A NGONIT');
  }

  onClickMe() {
  	//console.log(this.usuario.user +" - "+this.usuario.psw);
    this.mfs.getDatos(this.usuario.user,this.usuario.psw).subscribe(res => {
        //console.log(res['status']);   
        if (res['status']=='Login OK')   {
          console.log("Guardando en LS login ok ");
          localStorage.setItem('loggedIn','true');
          localStorage.setItem('user',this.usuario.user);
          
          this.router.navigate(['/panel']);
        } else {
          console.log("ERROR ligin");
        }
    });

  }
}

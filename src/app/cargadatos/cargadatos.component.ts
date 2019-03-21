import { Component, OnInit ,Input} from '@angular/core';
import {Cuenta } from '../models/cuenta';
import {CuentaCobralex} from '../models/CuentaCobralex';
import { ToastrManager } from 'ng6-toastr-notifications';
import {DatosService } from '../panel/datos.service';
declare var $:any

@Component({
  selector: 'app-cargadatos',
  templateUrl: './cargadatos.component.html',
  styleUrls: ['./cargadatos.component.css']
})
export class CargadatosComponent implements OnInit {
 /*@Input() public nro_fi:String;
 @Input() public historial:String;
 @Input() public estado:String;
 @Input() public paciente:String;
 @Input() public saldo:number;
 @Input() public responsable:String;
 @Input() public contacto:String;*/
 @Input('una_cuenta') cuenta:Cuenta;
 //Esto funcionaba ok
 @Input('cuenta_cobralex') cuentacobralex : CuentaCobralex;;
 @Input('cuentas_cobralex') cuentascobralex : CuentaCobralex[];
 public accion:number;
 public observacion:string;
  constructor(public toastr: ToastrManager,private ds : DatosService) { }

  guardagestion(){
    console.log("guardar");

     $("#modalBook").modal('hide');
     this.ds.nuevoEvento(this.cuenta.nro_fi,localStorage.getItem('user'),this.accion,this.observacion).subscribe(res => {
        console.log("RES: "+res);
        if (res){
          this.toastr.successToastr(this.accion+'-'+this.observacion, 'Success!');
        } else {
          this.toastr.errorToastr('This is error toast.', 'Oops!');
        }
     });


     
  }
  
  ngOnInit() {
     this.cuentacobralex={
      nro_fi:0,
     fecha_ingreso:'',
     ultima_gestion:'',
     fecha_ultima_gestion:'',
     usuario_gestion:'',
     fec_ult_compromiso:''
     }
  	 this.cuenta ={


      nro_fi:0,
     rut_num:'',
     nombre_paciente:'',

    
    historial:'',
    
    saldo:0,
    responsable:'',
    fecha_alta:'',
    contacto:'',
    estado:''
    
  	 };
  	
  	//console.log("UNA CUENTA: "+this.cuenta.nro_fi);
  }

}

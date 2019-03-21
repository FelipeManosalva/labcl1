import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabwebComponent } from './labweb/labweb.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { DataTablesModule } from 'angular-datatables';
import { CargadatosComponent } from './cargadatos/cargadatos.component';
import { DatosService } from './panel/datos.service';
import { Puntos } from './pipes/puntos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LabwebComponent,
    LoginComponent,
    NavbarComponent,
    PanelComponent,
    CargadatosComponent,
    Puntos
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    DataTablesModule
  ],
  providers: [LoginService,DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

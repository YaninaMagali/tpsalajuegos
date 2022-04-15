import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string = '';
  contrasenia:string = '';  

  constructor(public ruteo:Router) { 
  }

  ngOnInit(): void {
    
  }

  login(){
    console.log("Usuario:" + this.usuario);
    console.log("Contraseña:" + this.contrasenia);
    } 

/*     redirigir(){
      console.log("hola redirect");
      this.ruteo.
    } */
}




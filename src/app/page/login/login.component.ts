import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { updateImportEqualsDeclaration } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_status = false;
  @Output() showLogoutActionEvent: EventEmitter<object>;
  

  constructor(private router: Router) { 
    this.showLogoutActionEvent = new EventEmitter<object>();
  }

  ngOnInit(): void {
    
  }

  login(username: string) {
    if(this.validateCredentials(username))
    {
      this.changeLoginStatus();
      this.router.navigate(['/home']);
      //mostrar logout en menu
      this.showLogoutAction();
    }
    
  }

  logout(){
    this.changeLoginStatus();
      this.router.navigate(['/login']);
  }

  validateCredentials(username: string){
    if(username == 'yan'){
      return true;
    }
    else{
      return false;
    }
    
  }

  getLoginStatus(){
    return this.login_status;
  }

  setLoginStatus(status: boolean){
    this.login_status = status;
  }

  setLoginStatusLocalStorage(status: string){
    localStorage.setItem("login_status", status);
  }

  getLoginStatusLocalStorage(){
    return localStorage.getItem("login_status");
  }

  changeLoginStatus(){
    if(! this.getLoginStatus()){
      this.setLoginStatus(true);
      this.setLoginStatusLocalStorage('true');
    } 
    else{
      this.setLoginStatus(false);
      this.setLoginStatusLocalStorage('false');
    }
    
  }

  showLogoutAction(){
    
    this.showLogoutActionEvent.emit({'url': '/login','txt': 'Logout'});
  }

}




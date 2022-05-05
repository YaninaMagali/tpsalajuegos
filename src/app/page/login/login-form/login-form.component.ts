import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() sendCredentialsEvent;

  constructor() { 
    this.sendCredentialsEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  sendFormCredentials(value: string) {
    this.sendCredentialsEvent.emit(value);
  }

}

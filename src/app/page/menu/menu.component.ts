import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = [
   {'url': '/home','txt': 'Home'},
   {'url': '/quiensoy','txt': '¿Quien soy?'}
];

  constructor() { }

  ngOnInit(): void {
  }

  addItemToMenu(item: any){
    console.log("entro a addItemToMenu");
    console.log(item);
    this.menuItems.push(item);
  }
  

}

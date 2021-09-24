import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(private nav: NavController) {}

 irParalogin(){ 
   console.log("função irParalogin");
   this.nav.navigateForward("login");
 }

 irParaCadastro() {
   console.log("função irParaCadastro");
   this.nav.navigateForward("registro");
   
 }
}

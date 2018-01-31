import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Employee } from '../../beans/Employee';
import { Engineers } from '../../beans/Engineers';
import { InterfaceCaller } from '../../beans/InterfaceCaller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

  constructor(public navCtrl: NavController) 
  {
          let e = new Employee();
              e.setName("Jayesh");
              e.setGender("Male");

           console.log("Employee Details : " + e.toString());

          let r = new Engineers();
          r.setName("Albert");
          r.setGender("Male");
          r.setLanguage("English");

          console.log("Engineer Details : " + r.toString());

          let i = new InterfaceCaller();
  }

}

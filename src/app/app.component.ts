import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checking';

  isEdit=-1
  cars = [{ car_name: 'verna', company_name: 'hyundai' },
          { car_name: 'hyryder', company_name: 'toyota' }]
    temp = {
      car_name: "",
      company_name: ""
    }
  
    // demo1={car_name:string};
    // demo2={company_name:string};
    // this.cars.push({car_name:demo1,company_name:demo2});
    
    add_new_car() {  
      if(this.isEdit==-1){
        
         this.temp.car_name=this.temp.car_name.toUpperCase()
         this.temp.company_name=this.temp.company_name.toUpperCase()
        this.cars.push(this.temp);
      }else
      {
        this.cars[this.isEdit].car_name=this.temp.car_name
        this.cars[this.isEdit].company_name=this.temp.company_name
      }
        this.isEdit=-1
        this.temp={car_name:"",company_name:""}
      
    }
    delete_car(i:number) {
      this.cars.splice(i,1);  
    }
     edit_car(idx:number) {
      this.isEdit=idx
      this.temp.car_name=this.cars[idx].car_name
      this.temp.company_name=this.cars[idx].company_name
     }
}


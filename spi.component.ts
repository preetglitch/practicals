import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-spi',
  imports:[NgForm,NgModel,NgIf],
  templateUrl: './spi.component.html',
  styleUrl: './spi.component.css'
})
export class SpiComponent {
  user:any = {
    name: '',
    email: '',
    age: '',

  };

}

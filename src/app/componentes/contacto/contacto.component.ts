import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form =  new FormGroup(
      {
        name: new FormControl(''),
        Email: new FormControl(''),
        Message: new FormControl(''),
      }
    )
  sendcontact(){
  console.log(this.form)
  }
}

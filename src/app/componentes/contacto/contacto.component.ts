import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form = signal<FormGroup>(
    new FormGroup(
      {
        name: new FormControl(''),
        Email: new FormControl(''),
        Message: new FormControl(''),
      }
    )

  )

}

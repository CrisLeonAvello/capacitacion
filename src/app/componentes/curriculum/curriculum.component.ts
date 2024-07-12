import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCard, MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,    
  ],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {

}

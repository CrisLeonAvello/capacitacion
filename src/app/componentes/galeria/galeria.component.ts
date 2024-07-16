import { Component, NgModule, OnInit } from "@angular/core";
import { GaleriaService } from "./galeria.service";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements OnInit {
  
  photos: any = [];

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.galeriaService.getAllPhotos().subscribe(
      (data: any) => {
        this.photos = data;
      },
      (error) => {
        console.error('error de busqueda', error);
      }
    )
  }}

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  
  imports: [
    CommonModule
  ]

})
export class GaleriaModule{}
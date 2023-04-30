import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = []

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  contadorPlantasInterior(): number {
    let count: number = 0;
    for (let i = 0; i < this.plantas.length; i++) {
      if (this.plantas[i].tipo === 'Interior'){
        count++;
      }
    }
    return count;
  }

  contadorPlantasExterior(): number {
    let count: number = 0;
    for (let i = 0; i < this.plantas.length; i++) {
      if (this.plantas[i].tipo === 'Exterior'){
        count++;
      }
    }
    return count;
  }

  ngOnInit() {
    this.getPlantas();
  }



}

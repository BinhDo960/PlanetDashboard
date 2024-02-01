import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetService } from '../services/planet.service';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planetdashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetdashboard.component.html',
  styleUrl: './planetdashboard.component.css'
})
export class PlanetdashboardComponent implements OnInit{

  planets:Planet[] = [];

  constructor(private service:PlanetService){
    
  }

  ngOnInit(): void {
    this.service.getAllPlanets().subscribe (data => {this.planets = data; console.log(data)});
    
  }

}

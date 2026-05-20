import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Personnage {
  id: number;
  nom: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-main-page',
  imports: [CommonModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {

  personnages: Personnage[] = [
    { id: 1,  nom: 'Personnage 1',  description: 'Description 1',  image: 'characters/CHARACTER_1.png' },
    { id: 2,  nom: 'Personnage 2',  description: 'Description 2',  image: 'characters/CHARACTER_2.png' },
    { id: 3,  nom: 'Personnage 3',  description: 'Description 3',  image: 'characters/CHARACTER_3.png' },
    { id: 4,  nom: 'Personnage 4',  description: 'Description 4',  image: 'characters/CHARACTER_4.png' },
    { id: 5,  nom: 'Personnage 5',  description: 'Description 5',  image: 'characters/CHARACTER_5.png' },
    { id: 6,  nom: 'Personnage 6',  description: 'Description 6',  image: 'characters/CHARACTER_6.png' },
    { id: 7,  nom: 'Personnage 7',  description: 'Description 7',  image: 'characters/CHARACTER_7.png' },
    { id: 8,  nom: 'Personnage 8',  description: 'Description 8',  image: 'characters/CHARACTER_8.png' },
    { id: 9,  nom: 'Personnage 9',  description: 'Description 9',  image: 'characters/CHARACTER_9.png' },
    { id: 10, nom: 'Personnage 10', description: 'Description 10', image: 'characters/CHARACTER_10.png' },
    { id: 11, nom: 'Personnage 11', description: 'Description 11', image: 'characters/CHARACTER_11.png' },
    { id: 12, nom: 'Personnage 12', description: 'Description 12', image: 'characters/CHARACTER_12.png' },
    { id: 13, nom: 'Personnage 13', description: 'Description 13', image: 'characters/CHARACTER_13.png' },
    { id: 14, nom: 'Personnage 14', description: 'Description 14', image: 'characters/CHARACTER_14.png' },
    { id: 15, nom: 'Personnage 15', description: 'Description 15', image: 'characters/CHARACTER_15.png' },
    { id: 16, nom: 'Personnage 16', description: 'Description 16', image: 'characters/CHARACTER_16.png' },
    { id: 17, nom: 'Personnage 17', description: 'Description 17', image: 'characters/CHARACTER_17.png' },
    { id: 18, nom: 'Personnage 18', description: 'Description 18', image: 'characters/CHARACTER_18.png' },
    { id: 19, nom: 'Personnage 19', description: 'Description 19', image: 'characters/CHARACTER_19.png' },
    { id: 20, nom: 'Personnage 20', description: 'Description 20', image: 'characters/CHARACTER_20.png' },
    { id: 21, nom: 'Personnage 21', description: 'Description 21', image: 'characters/CHARACTER_21.png' },
    { id: 22, nom: 'Personnage 22', description: 'Description 22', image: 'characters/CHARACTER_22.png' },
    { id: 23, nom: 'Personnage 23', description: 'Description 23', image: 'characters/CHARACTER_23.png' },
    { id: 24, nom: 'Personnage 24', description: 'Description 24', image: 'characters/CHARACTER_24.png' },
    { id: 25, nom: 'Personnage 25', description: 'Description 25', image: 'characters/CHARACTER_25.png' },
    { id: 26, nom: 'Personnage 26', description: 'Description 26', image: 'characters/CHARACTER_26.png' },
    { id: 27, nom: 'Personnage 27', description: 'Description 27', image: 'characters/CHARACTER_27.png' },
    { id: 28, nom: 'Personnage 28', description: 'Description 28', image: 'characters/CHARACTER_28.png' },
    { id: 29, nom: 'Personnage 29', description: 'Description 29', image: 'characters/CHARACTER_29.png' },
  ];

  rangees: Personnage[][] = [
    [this.personnages[0],  this.personnages[1],  this.personnages[2],  this.personnages[3]],
    [this.personnages[4],  this.personnages[5],  this.personnages[6],  this.personnages[7]],
    [this.personnages[8],  this.personnages[9],  this.personnages[10], this.personnages[11]],
    [this.personnages[12], this.personnages[13], this.personnages[14], this.personnages[15]],
    [this.personnages[16], this.personnages[17], this.personnages[18], this.personnages[19]],
    [this.personnages[20], this.personnages[21], this.personnages[22], this.personnages[23]],
    [this.personnages[24], this.personnages[25], this.personnages[26], this.personnages[27], this.personnages[28]],
  ];

  personnageActif: Personnage = this.personnages[0];

  survoler(perso: Personnage) {
    this.personnageActif = perso;
  }
}
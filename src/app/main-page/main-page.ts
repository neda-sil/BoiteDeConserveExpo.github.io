import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


interface Personnage {
	id: number;
	nom: string;
	titre_oeuvre: string;
	image: string;
}

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})

export class MainPage {

personnages: Personnage[] = [
    { id: 1,  nom: 'Evan Baillif',                    titre_oeuvre: 'Appel au tordre / Le bijambiste et l\'octopus',  image: 'characters/CHARACTER_1.png' },
	{ id: 2,  nom: 'Aaron Barrientos',                titre_oeuvre: 'Peau Fine',                                      image: 'characters/CHARACTER_2.png' },
    { id: 3,  nom: 'Alycia Nelly Castro',             titre_oeuvre: 'Protocole 27',                                   image: 'characters/CHARACTER_3.png' },
    { id: 4,  nom: 'Masiya Chamorel',                 titre_oeuvre: 'Après le dossier',                               image: 'characters/CHARACTER_4.png' },
    { id: 5,  nom: 'Camila Sarango & Anjali Cottin',  titre_oeuvre: 'Parmi nos racines',                              image: 'characters/CHARACTER_5.png' },
    { id: 6,  nom: 'Kaan Dalyan',                     titre_oeuvre: 'Rats volants',                                   image: 'characters/CHARACTER_6.png' },
    { id: 7,  nom: 'Antony Ejoh',                     titre_oeuvre: 'Le vagabond',                                    image: 'characters/CHARACTER_7.png' },
    { id: 8,  nom: 'Raphaël Fellay',                  titre_oeuvre: 'les lieux restent',                              image: 'characters/CHARACTER_8.png' },
    { id: 9,  nom: 'Yumi Fiorentini',                 titre_oeuvre: 'Elpis',                                          image: 'characters/CHARACTER_9.png' },
    { id: 10, nom: 'Pol Forcadell & Timo Weschler',   titre_oeuvre: 'Unis-que',                                       image: 'characters/CHARACTER_10.png' },
    { id: 11, nom: 'Tanguy Genton',                   titre_oeuvre: 'UNDEFINED',                                      image: 'characters/CHARACTER_11.png' },
    { id: 12, nom: 'Mathilde Grand-Guillaume-Pe',     titre_oeuvre: 'Postiche II',                                    image: 'characters/CHARACTER_12.png' },
    { id: 13, nom: 'Laya Kamber',                     titre_oeuvre: 'Vilains petits canards',                         image: 'characters/CHARACTER_13.png' },
    { id: 14, nom: 'Xenia Eyben',                     titre_oeuvre: 'Bleeding stone / My glorious life',              image: 'characters/CHARACTER_14.png' },
    { id: 15, nom: 'Maïa Monnet',                     titre_oeuvre: 'Captif',                                         image: 'characters/CHARACTER_15.png' },
    { id: 16, nom: 'Eva Monnin',                      titre_oeuvre: 'Apex',                                           image: 'characters/CHARACTER_16.png' },
    { id: 17, nom: 'Woody Nightingale',               titre_oeuvre: 'Pierre',                                         image: 'characters/CHARACTER_17.png' },
    { id: 18, nom: 'Samuel Piccino',                  titre_oeuvre: 'pépé',                                           image: 'characters/CHARACTER_18.png' },
    { id: 19, nom: 'Lais Puopolo',                    titre_oeuvre: 'UNDEFINED',                                      image: 'characters/CHARACTER_19.png' },
    { id: 20, nom: 'Theodoro Riggio',                 titre_oeuvre: 'Mae Yay et Grand-père',                          image: 'characters/CHARACTER_20.png' },
    { id: 21, nom: 'Sebastian',                       titre_oeuvre: 'Démasqué l\'humain',                             image: 'characters/CHARACTER_21.png' },
    { id: 22, nom: 'Camille Santschi',                titre_oeuvre: 'Licorne',                                        image: 'characters/CHARACTER_22.png' },
    { id: 23, nom: 'Camila Sarango & Anjali Cottin',  titre_oeuvre: 'Parmi nos racines',                              image: 'characters/CHARACTER_23.png' },
    { id: 24, nom: 'Ikram Serir',                     titre_oeuvre: 'UNDEFINED',                                      image: 'characters/CHARACTER_24.png' },
    { id: 25, nom: 'Marlène Soares Da Costa',         titre_oeuvre: 'Les pleurs de lys',                              image: 'characters/CHARACTER_25.png' },
    { id: 26, nom: 'Urim Sopa',                       titre_oeuvre: 'Les minis artistes',                             image: 'characters/CHARACTER_26.png' },
    { id: 27, nom: 'Seita Tomaru',                    titre_oeuvre: 'Le malheur des autres, au goût de miel',         image: 'characters/CHARACTER_27.png' },
    { id: 28, nom: 'Marie Wagneur',                   titre_oeuvre: 'peaceful diva',                                  image: 'characters/CHARACTER_28.png' },
    { id: 29, nom: 'Pol Forcadell & Timo Weschler',   titre_oeuvre: 'Unis-que',                                       image: 'characters/CHARACTER_29.png' },
    { id: 30, nom: 'UNDEFINED',                       titre_oeuvre: 'UNDEFINED',                                      image: 'characters/CHARACTER_30.png' },
    { id: 31, nom: 'UNDEFINED',                       titre_oeuvre: 'UNDEFINED',                                      image: 'characters/CHARACTER_31.png' },
    { id: 32, nom: 'UNDEFINED',                       titre_oeuvre: 'UNDEFINED',                                      image: 'characters/CHARACTER_32.png' },
];

  rangees: Personnage[][] = [
    [this.personnages[0],  this.personnages[1],  this.personnages[2],  this.personnages[3]],
    [this.personnages[4],  this.personnages[5],  this.personnages[6],  this.personnages[7]],
    [this.personnages[8],  this.personnages[9],  this.personnages[10], this.personnages[11]],
    [this.personnages[12], this.personnages[13], this.personnages[14], this.personnages[15]],
    [this.personnages[16], this.personnages[17], this.personnages[18], this.personnages[19]],
    [this.personnages[20], this.personnages[21], this.personnages[22], this.personnages[23]],
    [this.personnages[24], this.personnages[25], this.personnages[26], this.personnages[27]],
	[this.personnages[28], this.personnages[29], this.personnages[30], this.personnages[31]],
  ];

  personnageActif: Personnage = this.personnages[0];
personnageLock: boolean = false;

survoler(perso: Personnage) {
  if (!this.personnageLock) {
    this.personnageActif = perso;
  }
}

cliquer(perso: Personnage) {
  if (this.personnageActif === perso && this.personnageLock) {
    this.personnageLock = false;
  } else {
    this.personnageActif = perso;
    this.personnageLock = true;
  }
}

ngOnInit() {
  document.body.className = 'bg-base';
}

demarrerSequence() {
  document.body.className = 'bg-gif';
  setTimeout(() => {
    document.body.className = 'bg-final';
  }, 4000);
}

}
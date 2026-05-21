/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   archive.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: neda-sil <neda-sil@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/05/21 11:32:57 by neda-sil          #+#    #+#             */
/*   Updated: 2026/05/21 14:24:53 by neda-sil         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Oeuvre {
  titre: string;
  description: string;
  annee?: string;
  medium?: string;
  dimensions?: string;
}

interface Personnage {
  id: number;
  nom: string;
  image: string;
  oeuvres: Oeuvre[];
}

@Component({
  selector: 'app-archive',
  imports: [CommonModule, RouterLink],
  templateUrl: './archive.html',
  styleUrl: './archive.css'
})
export class Archive implements OnInit {

	 private bgTimeout: any;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personnage = this.personnages.find(p => p.id === id) ?? this.personnages[0];
    
    document.body.className = 'bg-gif';
    this.bgTimeout = setTimeout(() => {
      document.body.className = 'bg-final';
    }, 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.bgTimeout);
    document.body.className = 'bg-base';
  }
	
	personnages: Personnage[] = [
    {
        id: 1,
        nom: 'Evan Baillif',
        image: 'characters/CHARACTER_1.png',
        oeuvres: [
            {
                titre: 'Appel au tordre',
                description: 'La binarité d\'une vie entre vos mains. Admirable ou déplorable ? Finalité d\'un pion contre quatre sous',
                annee: '2026',
                medium: 'Installation sonore immersive',
                dimensions: '200 x 165 x 230 cm'
            },
            {
                titre: 'Le bijambiste et l\'octopus',
                description: 'Rapport de domination entre entité omniprésente et minorité oppressée. Les sensibilités s\'auto construisent, les membres se développent, sur une terre où leurs chemins sont constamment saccagés.',
                annee: '2026',
                medium: 'Sculpture techniques mixtes',
                dimensions: '175 x 170 x 170 cm'
            }
        ]
    },
    {
        id: 2,
        nom: 'Aaron Barrientos',
        image: 'characters/CHARACTER_2.png',
        oeuvres: [
            {
                titre: 'Peau Fine',
                description: 'Peau Fine raconte l\'anxiété, la peur ainsi que la tristesse d\'un jeune homme lorsque celui-ci rencontre des troubles au sein de sa relation amoureuse.',
                annee: '2026',
                medium: 'Court-métrage',
                dimensions: '6\'13"'
            }
        ]
    },
    {
        id: 3,
        nom: 'Alycia Nelly Castro',
        image: 'characters/CHARACTER_3.png',
        oeuvres: [
            {
                titre: 'Protocole 27',
                description: 'Les photos sont visibles seulement après 24 heures, créant un décalage entre le moment vécu et l\'image.',
                annee: '2026',
                medium: 'Livre de photographie',
                dimensions: 'A4'
            }
        ]
    },
    {
        id: 4,
        nom: 'Masiya Chamorel',
        image: 'characters/CHARACTER_4.png',
        oeuvres: [
            {
                titre: 'Après le dossier',
                description: 'Ce projet explore l\'après d\'une agression sexuelle à travers des objets du quotidien devenus des déclencheurs de mémoire. Photographiés de manière neutre, ces objets sont classés dans un dispositif inspiré des archives administratives et judiciaires.',
                annee: '2025',
                medium: 'Installation photographique et textuelle, photographies imprimées, fourres plastiques, classeur noir, papiers teintés, textes tapés et manuscrits',
                dimensions: 'A4'
            }
        ]
    },
    {
        id: 5,
        nom: 'Camila Sarango & Anjali Cottin',
        image: 'characters/CHARACTER_5.png',
        oeuvres: [
            {
                titre: 'Parmi nos racines',
                description: 'En racontant visuellement leur vie, elles deviennent complices de leurs gestes, de leurs habitudes et de mondes intérieurs secrets. À travers le prisme de la création, ces trois peintures soulèvent les questions du regard, de la connexion et du reflet.',
                annee: '2026',
                medium: 'Peinture à l\'huile sur tissus',
                dimensions: '75x65cm / 72x60cm / 72x62cm'
            }
        ]
    },
    {
        id: 6,
        nom: 'Kaan Dalyan',
        image: 'characters/CHARACTER_6.png',
        oeuvres: [
            {
                titre: 'Rats volants',
                description: 'Le film met en parallèle deux existences jugées "de trop" dans la ville. Il questionne la façon dont l\'espace public se transforme pour exclure, avec une violence discrète, pics anti-pigeons, bancs hostiles, gestes agressifs, regards qui repoussent. Sans discours explicatif, le film cherche à faire sentir le passage de la normalité à l\'exclusion, puis à la reconquête d\'un endroit où l\'on peut enfin respirer.',
                annee: '2026',
                medium: 'Vidéo',
                dimensions: '2\'55"'
            }
        ]
    },
    {
        id: 7,
        nom: 'Antony Ejoh',
        image: 'characters/CHARACTER_7.png',
        oeuvres: [
            {
                titre: 'Le vagabond',
                description: 'Il s\'agit d\'un court-métrage, en noir et blanc avec la couleur rouge. L\'histoire suit le voyage d\'un jeune adolescent qui décide de devenir un vagabond et de voyager à travers la campagne. Ce choix de style visuel a été fait pour permettre l\'attachement au protagoniste.',
                annee: '2026',
                medium: 'Court-métrage',
                dimensions: '1\''
            }
        ]
    },
    {
        id: 8,
        nom: 'Raphaël Fellay',
        image: 'characters/CHARACTER_8.png',
        oeuvres: [
            {
                titre: 'les lieux restent',
                description: 'Dans cette série réalisée à Tokyo, les passants ont été effacés, réduits à des silhouettes blanches. Ce qui reste, c\'est la ville précise, indifférente, permanente. Les lieux accumulent le temps. Les gens, eux, traversent et disparaissent sans laisser de trace.',
                annee: '2026',
                medium: 'Triptyque photographique',
                dimensions: ''
            }
        ]
    },
    {
        id: 9,
        nom: 'Yumi Fiorentini',
        image: 'characters/CHARACTER_9.png',
        oeuvres: [
            {
                titre: 'Elpis',
                description: 'L\'espoir, attendre longtemps, arrêter de souffler les bougies… Et puis soudainement, il arrive des choses en dehors de notre contrôle et même si elles nous bousculent, elles sont belles, je vous l\'assure.',
                annee: '2026',
                medium: 'Vase, argile, pétales, peinture acrylique, colle chaude',
                dimensions: '30 cm'
            }
        ]
    },
    {
        id: 10,
        nom: 'Pol Forcadell & Timo Weschler',
        image: 'characters/CHARACTER_10.png',
        oeuvres: [
            {
                titre: 'Unis-que',
                description: 'Ce projet est né d\'une collaboration avec le designer Victor Brique. A travers un film centré sur sa pièce, nous avons développé un univers brut, tempétueux et immersif, porté par une esthétique sombre et instable. Le projet s\'accompagne également d\'une série photographique. Photographies: Zenon Lallier',
                annee: '2026',
                medium: 'Court-métrage + série photographique',
                dimensions: '1\''
            }
        ]
    },
    {
        id: 11,
        nom: 'Tanguy Genton',
        image: 'characters/CHARACTER_11.png',
        oeuvres: [
            {
                titre: 'UNDEFINED',
                description: '',
                annee: '',
                medium: '',
                dimensions: ''
            }
        ]
    },
    {
        id: 12,
        nom: 'Mathilde Grand-Guillaume-Pe',
        image: 'characters/CHARACTER_12.png',
        oeuvres: [
            {
                titre: 'Postiche II',
                description: 'Forêt parasitée par l\'humain. Celui-ci prospère à la cime d\'une hiérarchie qu\'il s\'est inventée. La forêt d\'abord, semble saine, équilibrée. En réalité, elle est faite de bois morts sans racines, s\'élevant artificiellement. Nature essoufflée, étouffée.',
                annee: '2026',
                medium: 'Bois mort et argile',
                dimensions: 'env 100 x 150 cm'
            }
        ]
    },
    {
        id: 13,
        nom: 'Laya Kamber',
        image: 'characters/CHARACTER_13.png',
        oeuvres: [
            {
                titre: 'Vilains petits canards',
                description: 'Vilains petits canards matérialise l\'absurdité du besoin de contrôle humain. Les pensées intrusives sont une expérience humaine normale. Pourtant, il nous semble impossible de les laisser circuler, on s\'y accroche, on tente de s\'en emparer. Mais avez-vous déjà constaté que plus on cherche à les contrôler et plus elles s\'imposent à nous ?',
                annee: '2026',
                medium: 'Carton, colle chaude, acrylique, objets divers',
                dimensions: '360mm x 160mm'
            }
        ]
    },
    {
        id: 14,
        nom: 'Xenia Eyben',
        image: 'characters/CHARACTER_14.png',
        oeuvres: [
            {
                titre: 'Bleeding stone',
                description: 'Éloge aux femmes via le symbole de la grenade, inspiré de l\'esthétique des contes Perses.',
                annee: '2025',
                medium: 'Court-métrage',
                dimensions: '5\'55"'
            },
            {
                titre: 'My glorious life',
                description: 'Inspiré du réalisateur Roy Andersson, ce projet traduit la morosité d\'une société excessivement bureaucrate. Les hommes sont plongés dans une boucle infernale dans laquelle ils ne peuvent plus rire de rien. Ils sont donc poussés à le faire par auto-dérision.',
                annee: '2025',
                medium: 'Série photographique',
                dimensions: 'A4'
            }
        ]
    },
    {
        id: 15,
        nom: 'Maïa Monnet',
        image: 'characters/CHARACTER_15.png',
        oeuvres: [
            {
                titre: 'Captif',
                description: 'Peur de blesser, peur de quelque chose en soi. Cette peur, on l\'enferme, on l\'étouffe, avant d\'apprendre à la comprendre, à l\'accepter, puis à s\'en libérer.',
                annee: '2025',
                medium: 'Court-métrage + affiche A1',
                dimensions: '10\'18"'
            }
        ]
    },
    {
        id: 16,
        nom: 'Eva Monnin',
        image: 'characters/CHARACTER_16.png',
        oeuvres: [
            {
                titre: 'Apex',
                description: 'Travail sur le corps et sa texture, son abstraction et sa géométrie.',
                annee: '2025',
                medium: 'Série photographique',
                dimensions: '295 x 370 mm'
            }
        ]
    },
    {
        id: 17,
        nom: 'Woody Nightingale',
        image: 'characters/CHARACTER_17.png',
        oeuvres: [
            {
                titre: 'Pierre',
                description: 'Exploration de la manière dont le son peut transformer notre perception sur une image. Décalage entre un paysage naturel et un son brut / industriel.',
                annee: '2026',
                medium: 'Vidéo',
                dimensions: '5\''
            }
        ]
    },
    {
        id: 18,
        nom: 'Samuel Piccino',
        image: 'characters/CHARACTER_18.png',
        oeuvres: [
            {
                titre: 'pépé',
                description: 'À travers un appareil photo des années 30, j\'adopte le regard de quelqu\'un que je n\'ai jamais connu, mon arrière-grand-père. J\'essaie de comprendre et de reconstituer sa vie par le lien qui nous unit, une fascination commune pour la montagne. L\'installation finale est une frise chronologique composée de bribes de sa vie, racontées ou reconstituées.',
                annee: '2025',
                medium: 'Documentaire photo, installation',
                dimensions: 'env. 1 m'
            }
        ]
    },
    {
        id: 19,
        nom: 'Lais Puopolo',
        image: 'characters/CHARACTER_19.png',
        oeuvres: [
            {
                titre: 'UNDEFINED',
                description: '',
                annee: '',
                medium: '',
                dimensions: ''
            }
        ]
    },
    {
        id: 20,
        nom: 'Theodoro Riggio',
        image: 'characters/CHARACTER_20.png',
        oeuvres: [
            {
                titre: 'Mae Yay et Grand-père',
                description: 'Ces deux portraits représentent le début d\'un arbre généalogique, mais aussi deux silences. À Thônex, leurs vies se sont figées dans un refus d\'écoute, écho lointain de dynamiques patriarcales et de poids coloniaux qui ont fissuré le lien.',
                annee: '2026',
                medium: 'Série de dessins sur papier Canson édition 250g, ecoline, graphite, encre de chine',
                dimensions: '75 x 58 cm'
            }
        ]
    },
    {
        id: 21,
        nom: 'Sebastian',
        image: 'characters/CHARACTER_21.png',
        oeuvres: [
            {
                titre: 'Démasqué l\'humain',
                description: 'Ce travail cherche à mettre en lumière la hiérarchisation des êtres vivants dans notre société. Il s\'inspire du tableau The Boar Hunt de Frans Synders, tout en intégrant plusieurs éléments distincts, notamment en remplaçant les personnages humains par des animaux.',
                annee: '2025',
                medium: 'Dessins sur papier neocolors',
                dimensions: 'A3'
            }
        ]
    },
    {
        id: 22,
        nom: 'Camille Santschi',
        image: 'characters/CHARACTER_22.png',
        oeuvres: [
            {
                titre: 'Licorne',
                description: 'Licorne est un projet questionnant la place de l\'imaginaire dans la perception d\'un enfant. Notamment par rapport aux contes et aux images clés dans notre société.',
                annee: '2025',
                medium: 'Feutre/stylo noir',
                dimensions: '420mm x 923mm'
            }
        ]
    },
    {
        id: 23,
        nom: 'Camila Sarango & Anjali Cottin',
        image: 'characters/CHARACTER_23.png',
        oeuvres: [
            {
                titre: 'Parmi nos racines',
                description: 'En racontant visuellement leur vie, elles deviennent complices de leurs gestes, de leurs habitudes et de mondes intérieurs secrets. À travers le prisme de la création, ces trois peintures soulèvent les questions du regard, de la connexion et du reflet.',
                annee: '2026',
                medium: 'Peinture à l\'huile sur tissus',
                dimensions: '75x65cm / 72x60cm / 72x62cm'
            }
        ]
    },
    {
        id: 24,
        nom: 'Ikram Serir',
        image: 'characters/CHARACTER_24.png',
        oeuvres: [
            {
                titre: 'UNDEFINED',
                description: '',
                annee: '',
                medium: '',
                dimensions: ''
            }
        ]
    },
    {
        id: 25,
        nom: 'Marlène Soares Da Costa',
        image: 'characters/CHARACTER_25.png',
        oeuvres: [
            {
                titre: 'Les pleurs de lys',
                description: 'Cette vidéo retranscrit le mal-être lié à l\'image du corps, faisant écho aux troubles du comportement alimentaire et à la dysmorphophobie. Le lys y apparaît comme le réceptacle de cette souffrance, tout en incarnant à la fois la force, la transformation et la possibilité d\'une renaissance.',
                annee: '2026',
                medium: 'Art vidéo',
                dimensions: '2\'27"'
            }
        ]
    },
    {
        id: 26,
        nom: 'Urim Sopa',
        image: 'characters/CHARACTER_26.png',
        oeuvres: [
            {
                titre: 'Les minis artistes',
                description: 'L\'exposition commence et les spectateurs arrivent, la curiosité des minis artistes est à son paroxysme. Ils vous observeront. Ils seront partout. Mais n\'ayez crainte, vous ne leur échapperez pas.',
                annee: '2026',
                medium: 'Sculpture en pâte polymère à modeler',
                dimensions: '10 cm'
            }
        ]
    },
    {
        id: 27,
        nom: 'Seita Tomaru',
        image: 'characters/CHARACTER_27.png',
        oeuvres: [
            {
                titre: 'Le malheur des autres, au goût de miel',
                description: 'Une installation qui représente le transfert d\'émotions à partir du thème "l\'altérité". La circulation et la transmission des émotions, ainsi que leurs variations.',
                annee: '2025',
                medium: 'Installation numérique',
                dimensions: '160cm x 50cm'
            }
        ]
    },
    {
        id: 28,
        nom: 'Marie Wagneur',
        image: 'characters/CHARACTER_28.png',
        oeuvres: [
            {
                titre: 'peaceful diva',
                description: '',
                annee: '2026',
                medium: 'Dessin sur papier aux crayons de couleurs',
                dimensions: '30x45 cm'
            }
        ]
    },
    {
        id: 29,
        nom: 'Pol Forcadell & Timo Weschler',
        image: 'characters/CHARACTER_29.png',
        oeuvres: [
            {
                titre: 'Unis-que',
                description: 'Ce projet est né d\'une collaboration avec le designer Victor Brique. A travers un film centré sur sa pièce, nous avons développé un univers brut, tempétueux et immersif, porté par une esthétique sombre et instable. Le projet s\'accompagne également d\'une série photographique. Photographies: Zenon Lallier',
                annee: '2026',
                medium: 'Court-métrage + série photographique',
                dimensions: '1\''
            }
        ]
    },
    {
        id: 30,
        nom: 'UNDEFINED',
        image: 'characters/CHARACTER_30.png',
        oeuvres: [{ titre: 'UNDEFINED', description: '', annee: '', medium: '', dimensions: '' }]
    },
    {
        id: 31,
        nom: 'UNDEFINED',
        image: 'characters/CHARACTER_31.png',
        oeuvres: [{ titre: 'UNDEFINED', description: '', annee: '', medium: '', dimensions: '' }]
    },
    {
        id: 32,
        nom: 'UNDEFINED',
        image: 'characters/CHARACTER_32.png',
        oeuvres: [{ titre: 'UNDEFINED', description: '', annee: '', medium: '', dimensions: '' }]
    },
];

  personnage: Personnage = this.personnages[0];

  constructor(private route: ActivatedRoute) {}
}
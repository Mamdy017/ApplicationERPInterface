import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acteur } from '../modeles/acteur/acteur';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';


@Component({
  selector: 'app-modifier-acteur',
  templateUrl: './modifier-acteur.page.html',
  styleUrls: ['./modifier-acteur.page.scss'],
})
export class ModifierActeurPage implements OnInit {
  donner: any;
  erreur: any;
  msg: any;

  constructor( private service: AdminActeurUserService, private route: ActivatedRoute, private router: Router ) { }



  // eslint-disable-next-line @typescript-eslint/member-ordering
  modiferAct: Acteur = {
    nom: '',
    idActeur: null,
    prenom: '',
    numero: '',
    email: '',
    statut: undefined
  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  nom = '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  prenom = '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  numero= '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  email= '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  id!: any;

  ngOnInit() {

    this.route.paramMap.subscribe(params =>{
       this.id = +params.get('idacteur');

      console.log('idacteur');
    });
  }

  public saveActeur(): void{
    this.modiferAct.idActeur = this.id;
    this.modiferAct.nom = this.nom;
    this.modiferAct.prenom = this.prenom;
    this.modiferAct.email = this.email;
    this.modiferAct.numero = this.numero;
    // if(this.modiferAct == null){
    //   if(Acteur.idacteur === 0){
    //     //
    //   }
    //   else{
        this.service.modifierActeur(this.modiferAct, this.id).subscribe({
          next: () => this.saveComplete()
    });
      }
    // }
  // }
//   modifier(){
//     console.log('bien');
//     if (this.nom !== '' && this.prenom !== '' && this.email !== '') {
//       console.log('condition');
//     this.modiferAct.nom = this.nom;
//     this.modiferAct.prenom = this.prenom;
//     this.modiferAct.email = this.email;
//     this.modiferAct.numero = this.numero;
//     this.service.modifierActeur(this.modiferAct).subscribe(data => {
//     this.donner = data;

//       this.msg = 'Modifier avec succes!';
//       console.log('ok');
// });
//   }
//    {
//     console.log('erreur');
//     this.erreur = 'Veuillez remplir tous les champs !';
//   }
// }

public saveComplete(): void{
  this.router.navigate(['/liste-acteur']);
}
}

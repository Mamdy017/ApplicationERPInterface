import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acteur } from '../modeles/acteur/acteur';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-modifier-acteur',
  templateUrl: './modifier-acteur.page.html',
  styleUrls: ['./modifier-acteur.page.scss'],
})
export class ModifierActeurPage implements OnInit {
  donner: any;
  erreur: any;
  msg: any;
  menuBureau = true;
  menuMobile = false;
  obj: any;
  name: any;
  acteurModif: any;
  editForm: any;

  constructor( private service: AdminActeurUserService, private route: ActivatedRoute,
    private router: Router, public breakpointObserver: BreakpointObserver ) { }

    actualise(): void {
      setInterval(
        () => {
        }, 100, clearInterval(1500));
    }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  modiferAct = new Acteur();
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

    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.menuBureau = false;
        this.menuMobile = true;
        this.actualise();
      } else {
        this.menuBureau = true;
        this.menuMobile = false;
        this.actualise();
      }
    });

    this.route.paramMap.subscribe(params =>{
       this.id = +params.get('idacteur');
      console.log('id');
    });

    this.service.trouverparId(this.id).subscribe(data =>
      {
        this.acteurModif = data;
        console.log(this.acteurModif);
        this.editForm.patchValue({
          nom: this.acteurModif.nom
        });
      });
  }
  resetForm(){
    this.nom = '';
    this.prenom = '';
    this.numero= '';
    this.email= '';
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


  public saveActeur(): void{
    this.modiferAct.idActeur = this.id;
    this.modiferAct.nom = this.nom;
    this.modiferAct.prenom = this.prenom;
    this.modiferAct.email = this.email;
    this.modiferAct.numero = this.numero;
    // eslint-disable-next-line no-cond-assign, eqeqeq
    if(this.nom == '' || this.prenom == '' || this.email == '' || this.numero == ''){
        this.erreur = 'Veuillez remplir tous les champs!';
     }
      else{
        this.service.modifierActeur(this.modiferAct, this.id).subscribe({
          next: () => this.saveComplete(),
        });
        this.resetForm();
      }
    }

public saveComplete(): void{
  this.router.navigate(['/liste-acteur']);
}
}

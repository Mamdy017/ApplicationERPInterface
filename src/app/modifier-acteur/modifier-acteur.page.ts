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

<<<<<<< HEAD
// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  constructor() { }

  ngOnInit() {
    // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");
=======
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
       this.id = params.get('idacteur');
      console.log('id');
    });

    this.service.trouverparId(this.id).subscribe(data =>
      {
        this.acteurModif = data;

        this.nom=this.acteurModif[0].nom;
        this.prenom=this.acteurModif[0].prenom;
        this.email=this.acteurModif[0].email;
        this.numero=this.acteurModif[0].numero;
        console.log(this.acteurModif[0].nom);
      });
>>>>>>> f6dc2ee8b4f7f4f1b4cd1d6534d723c045dafcdf
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

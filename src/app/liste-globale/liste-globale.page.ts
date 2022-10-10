import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { ListePostulant } from '../modeles/liste-postulant/liste-postulant';
import { ListePostulantService } from '../Services/liste-postulant.service';

@Component({
  selector: 'app-liste-globale',
  templateUrl: './liste-globale.page.html',
  styleUrls: ['./liste-globale.page.scss'],
})
export class ListeGlobalePage implements OnInit {

  libelleActivite:any
  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
bool_erreur: boolean = false;
bool_erreurImp: boolean = false;
bool_erreurImpTrie: boolean = false;



  p =1;
  
  menuBureau = true;
  menuMobile = false;
activitesSansListes$: any;
  libelleListe: string;
  nombrePostulantTire: any;
  constructor( private alertController: AlertController,
    private animationCtrl: AnimationController,
    private serviceListe: ListePostulantService, 
    public breakpointObserver: BreakpointObserver,
    private route:Router) { }


  listeTotal: any
  mesListe: any
  page:number=1;
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {

    // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");


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

    // ON RECUPERE LE NOMBRE TOTAL DE LISTE
    this.serviceListe.listeTotales().subscribe(data => { this.listeTotal = data })

    // ON RECUPERE LES LISTES
    this.serviceListe.mesListes().subscribe(data => {
      this.mesListe = data
      //console.log("Activite "+ this.mesListe.activate.nom)
      
    })



  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

// ============================================================ Modal

actualiseApresImp(): void {
  setInterval(
    () => {
    }, 100, clearInterval(1500));
}

resetImportForm() {
  this.libelleListe = "",
    this.libelleActivite = "",
    this.nombrePostulantTire = null
}

myForm = new FormGroup({

  libelleListe: new FormControl('', [Validators.required, Validators.minLength(3)]),
  libelleActivite: new FormControl('', [Validators.required, Validators.minLength(3)]),
  file: new FormControl('', [Validators.required]),

  fileSource: new FormControl('', [Validators.required])

});


get f() {

  return this.myForm.controls;

}

onFileChange(event) {

  if (event.target.files.length > 0) {

    const file = event.target.files[0];

    this.myForm.patchValue({

      fileSource: file

    });

  }

}

submit() {

  const formData = new FormData();

  formData.append('file', this.myForm.get('fileSource').value);

}
























enterAnimation = (baseEl: HTMLElement) => {
  const root = baseEl.shadowRoot;

  const backdropAnimation = this.animationCtrl
    .create()
    .addElement(root.querySelector('ion-backdrop')!)
    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  const wrapperAnimation = this.animationCtrl
    .create()
    .addElement(root.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, opacity: '0', transform: 'scale(0)' },
      { offset: 1, opacity: '0.99', transform: 'scale(1)' },
    ]);

  return this.animationCtrl
    .create()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(500)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

leaveAnimation = (baseEl: HTMLElement) => {
  return this.enterAnimation(baseEl).direction('reverse');
};





























































  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }

}

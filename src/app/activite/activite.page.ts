import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activite } from '../modeles/activite/activite';
import { ActiviteService } from '../Services/activite/activite.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.page.html',
  styleUrls: ['./activite.page.scss'],
})
export class ActivitePage implements OnInit {


  // @ViewChild(IonContent) content: IonContent;

  // scrollToTop() {
  //   this.content.scrollToTop(400);
  // }
  // ionViewDidEnter(){
  //   this.scrollToTop();
  // }



  erreurImpTrieBack: any;
  bool_erreurImpTrieBack: boolean;
  bool_erreurImpTrieFr: boolean;
  erreurImpTrieFr: string;

  constructor(public breakpointObserver: BreakpointObserver, private activiteService: ActiviteService,
    private utilisateurs: ListeActeurService,
    private http: HttpClient,
    private route: Router,) { }

  salles$: any;
  annees$: any;
  typeActivites$: any;
  entites$: any;
  users$: any;
  acteurs$: any;
  respons$: any;
  activitesSansListes$: any;

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  titre: string
  salles: string;
  annees: any;
  typeActivites: string;
  entites: string;
  users: any;
  acteurs: string;
  descpt: string;
  dateDebut: string;
  dateFin: string;
  respons: string
  nombrepersonnedemande: string;

  bool_erreur: boolean = false
  erreur: any
  id: any = 1;

  fichier: File


  activiteObjet: Activite = {
    nom: "",
    description: "",
    dateDebut: new Date(),
    dateFin: new Date(),
    nombrepersonnedemande: 0

  }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1000));
  }



  getListeEntite() {
    this.activiteService.recupererListeEntite().subscribe((data) => {
      this.entites$ = data;
    })
  }

  getListeSalle() {
    this.activiteService.recupererListeSalle().subscribe((data) => {
      this.salles$ = data;
    })
  }

  getListeTypeActivite() {
    this.activiteService.recupererListeTypeActivite().subscribe((data) => {
      this.typeActivites$ = data
    })
  }

  // getListeAnnee(){
  //   this.activiteService.recupererListeAnne().subscribe((data) =>{
  //     this.annees$ = data;
  //   })
  // }

  getListeUsers() {
    this.utilisateurs.lesUtilisateurs().subscribe((data) => {
      this.users$ = data
      this.respons$ = data
    })
  }

  getActeurs() {
    this.utilisateurs.afficherLesActeurs().subscribe((data) => {
      this.acteurs$ = data;
    })
  }


  //ajout de l'activité


  myFormActivite = new FormGroup({

    //file, nom, description,nombrepersonnedemande, datedeb, datefin, idacteurs, idacteurInternes, libelleEntite, typeAct, libelleSalle, idresponsable, userid


    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nombrepersonnedemande: new FormControl('', [Validators.required, Validators.minLength(3)]),
    datedeb: new FormControl('', [Validators.required, , Validators.minLength(1)]),
    datefin: new FormControl('', [Validators.required, Validators.minLength(1)]),
    libelleEntite: new FormControl('', [Validators.required]),

    idacteurs: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idacteurInternes: new FormControl('', [Validators.required, Validators.minLength(1)]),

    idacteursOrg: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idacteurInternesOrg: new FormControl('', [Validators.required, Validators.minLength(1)]),

    idacteursInterv: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idacteurInternesInterv: new FormControl('', [Validators.required, Validators.minLength(1)]),

    idacteursLead: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idacteurInternesLead: new FormControl('', [Validators.required, Validators.minLength(1)]),


    typeAct: new FormControl('', [Validators.required, Validators.minLength(1)]),
    libelleSalle: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idresponsable: new FormControl('', [Validators.required, Validators.minLength(1)]),


    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });



  get fActivite() {

    return this.myFormActivite.controls;

  }

  onFileChangeActivite(event) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      this.myFormActivite.patchValue({

        fileSource: file

      });

    }

  }

  submitActivite() {


    let userid: any = 1;

    let data = new FormData();


    if (this.myFormActivite.get('file').value.length == 0 || this.myFormActivite.get('nom').value.length == 0 || this.myFormActivite.get('description').value.length == 0 || typeof this.myFormActivite.get('idresponsable').value === 'undefined' || this.myFormActivite.get('nombrepersonnedemande').value.length == 0 || this.myFormActivite.get('datedeb').value.length == 0 || this.myFormActivite.get('datefin').value.length == 0 || typeof this.myFormActivite.get('libelleEntite').value === 'undefined' || typeof this.myFormActivite.get('typeAct').value === 'undefined') {
      //this.myFormActivite.get('filesource').value !=  null  || 
      //, this.myFormActivite.get('idacteurInternes').value.length, typeof this.myFormActivite.get('typeAct').value  === 'unedifined'
      this.bool_erreurImpTrieFr = true;
      this.bool_erreurImpTrieBack = false;
      this.erreurImpTrieFr = "Veuillez remplir tous les champs";

    } else if (this.myFormActivite.get('datedeb').value > this.myFormActivite.get('datefin').value) {
      this.bool_erreurImpTrieFr = true;
      this.bool_erreurImpTrieBack = false;
      this.erreurImpTrieFr = "La data de debut ne peut pas etre superieur à la date de fin";
    }
    else {
      data.append("file", this.myFormActivite.get('fileSource').value);
      data.append("nom", this.myFormActivite.get('nom').value);
      data.append("description", this.myFormActivite.get('description').value);
      data.append("nombrepersonnedemande", this.myFormActivite.get('nombrepersonnedemande').value);
      data.append("datedeb", this.myFormActivite.get('datedeb').value);
      data.append("datefin", this.myFormActivite.get('datefin').value);

      data.append("idacteurs", this.myFormActivite.get('idacteurs').value);
      data.append("idacteurInternes", this.myFormActivite.get('idacteurInternes').value);

      data.append("idacteursOrg", this.myFormActivite.get('idacteursOrg').value);
      data.append("idacteurInternesOrg", this.myFormActivite.get('idacteurInternesOrg').value);

      data.append("idacteursInterv", this.myFormActivite.get('idacteursInterv').value);
      data.append("idacteurInternesInterv", this.myFormActivite.get('idacteurInternesInterv').value);

      data.append("idacteursLead", this.myFormActivite.get('idacteursLead').value);
      data.append("idacteurInternesLead", this.myFormActivite.get('idacteurInternesLead').value);


      data.append("libelleEntite", this.myFormActivite.get('libelleEntite').value);
      data.append("typeAct", this.myFormActivite.get('typeAct').value);
      data.append("libelleSalle", this.myFormActivite.get('libelleSalle').value);
      data.append("idresponsable", this.myFormActivite.get('idresponsable').value);

      console.log(`http://localhost:8080/activite/ajouter`, data);

      this.http.post<any>("http://localhost:8080/activite/ajouter", data).subscribe(res => {

        console.log(res);

        this.erreurImpTrieBack = res;
        this.bool_erreurImpTrieBack = true;
        this.bool_erreurImpTrieFr = false;

        if (res.status == true) {
          this.bool_erreurImpTrieBack = false;
          alert("activité ajouté avec succes");
          this.route.navigateByUrl("/details-activite");
          this.actualise();
        }
      });
    }

  }

  ngOnInit() {

    this.myFormActivite

    this.getListeSalle();
    this.getListeEntite();
    this.getListeTypeActivite();
    this.getListeUsers();
    this.getActeurs();

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


  }

  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
  }


  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}


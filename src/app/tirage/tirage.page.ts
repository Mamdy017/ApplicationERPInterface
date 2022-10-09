// import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { Tirage } from '../modeles/tirage/tirage';*
// import { TirageService } from '../Services/tirage/tirage.service';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
import { ActiviteService } from '../Services/activite/activite.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TirageService } from '../Services/tirage/tirage.service';
import { Tirage } from '../modeles/tirage/tirage';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ListePostulantService } from '../Services/liste-postulant.service';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  activitesSansListes$:any;



  //tirage
  bool_erreurBack: boolean;
  bool_erreurFr: boolean;
  erreurTirageFr: string;
  erreurTirageBack: string;
  

  //importation
  bool_erreurImpFr: boolean;
  bool_erreurImpBack: boolean;
  erreurImpFr: string;
  erreurImpBack: string;

  //importation et trie
  erreurImpTrieBack: any;
  bool_erreurImpTrieBack: boolean;
  bool_erreurImpTrieFr: boolean;
  erreurImpTrieFr: string;

  constructor(private serviceTirage: TirageService,
    private ajoutPostulantService: AjouterPostulantService,
    private activiteService: ActiviteService,
    private listePostulantService: ListePostulantService,
    private http: HttpClient, public breakpointObserver: BreakpointObserver,
    private route: Router) { }


  tirageObjet: Tirage = {
    libelleTirage: '',
    nombrePostulantTire: 0
  }

  listes$!: any;
  listeActivites$!: any

  listeSansTirageValides$!: any;

  bool_erreur: boolean = false;
  bool_erreurImp: boolean = false;
  bool_erreurImpTrie: boolean = false;


  libelleTirage: ""
  nombrePostulantTire: number
  libelleActivite: ""
  libelleListe: ""
  libelleListet: ""

  formmodule!: FormGroup;

  getActiviteSansListe(){
    this.activiteService.recupererActiviteSansListe().subscribe((data) =>{
      this.activitesSansListes$ = data;
    })
  }

  getListeSansTirageValide(){
    this.listePostulantService.recupererListeAvecTirageNonValide().subscribe((data) => {
      this.listeSansTirageValides$ = data;
    })
  }

  getListePostulant() {
    this.ajoutPostulantService.recupererListePostulant().subscribe((data) => {
      this.listes$ = data;
    })
  }

  getListeActivite() {
    this.activiteService.recupererListeActivite().subscribe((data) => {
      this.listeActivites$ = data;
    })
  }


  //Tirage
  resetTirageForm() {
    this.libelleTirage,
      this.libelleListe = "",
      this.libelleActivite = "",
      this.nombrePostulantTire = null
  }

  postTirage() {

    this.tirageObjet.libelleTirage = this.libelleTirage;
    this.tirageObjet.nombrePostulantTire = this.nombrePostulantTire;

    console.log("Libelle " + this.libelleListet)
    console.log("Libelle Tirage " + this.libelleTirage)
    console.log("Nobre " + this.nombrePostulantTire)




    if (this.libelleListet == "" || this.libelleTirage == "" || this.nombrePostulantTire == null) {
      this.bool_erreurFr = true;
      this.bool_erreurBack = false;
      this.erreurTirageFr = "Veuillez renseigner tout les champs";
    } else {
      this.serviceTirage.postTirage(this.libelleListet, this.tirageObjet).subscribe((data) => {
        this.erreurTirageBack = data
        if (data.status == true) {
          this.route.navigateByUrl("/liste-tirage")
          this.actualise();
        } else {

          this.bool_erreurFr = false
          this.bool_erreurBack = true

        }
        console.log("Donnée envoyé avec succes");
      });

      this.resetTirageForm()
    }


  }





  //importation de  fichier

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


    //console.log(`http://localhost:8080/postulant/import/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)


    if (this.myForm.get('libelleListe').value.length > 0 && this.myForm.get('libelleActivite').value.length > 0 && formData != null) {
      this.http.post<any>(`http://localhost:8080/postulant/import/excel/${this.myForm.get('libelleListe').value}/${this.myForm.get('libelleActivite').value}`, formData)

        .subscribe(res => {

          this.erreurImpBack = res;

          console.log(res.status);

          if (res.status == true) {
            this.route.navigateByUrl("/postulant-tire/")
            this.actualise();
          } else {
            this.bool_erreurImpFr = false;
            this.bool_erreurImpBack = true;
          }

          console.log(res);



        })

    } else {
      this.bool_erreurImpFr = true;
      this.bool_erreurImpBack = false;
      this.erreurImpFr = "veuillez remplir tous les champs";
    }


  }




  //import trie

  myFormImportTrie = new FormGroup({

    libelleListe: new FormControl('', [Validators.required, Validators.minLength(3)]),
    libelleActivite: new FormControl('', [Validators.required, Validators.minLength(3)]),
    libelleTirage: new FormControl('', [Validators.required]),
    nbreTire: new FormControl('', [Validators.required, Validators.minLength(1)]),
    file: new FormControl('', [Validators.required]),

    fileSource: new FormControl('', [Validators.required])

  });



  get fImportTrie() {

    return this.myFormImportTrie.controls;

  }

  onFileChangeImportTrie(event) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      this.myFormImportTrie.patchValue({

        fileSource: file

      });

    }

  }

  submitImportTrie() {

    const formData = new FormData();

    formData.append('file', this.myFormImportTrie.get('fileSource').value);

    console.log(`http://localhost:8080/importTrie/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleTirage').value}/${this.myFormImportTrie.get('nbreTire').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)

    if (this.myFormImportTrie.get('libelleListe').value.length > 0 && this.myFormImportTrie.get('libelleTirage').value.length > 0 && this.myFormImportTrie.get('libelleListe').value.length > 0 && formData != null) {
      this.http.post<any>(`http://localhost:8080/importTrie/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleTirage').value}/${this.myFormImportTrie.get('nbreTire').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)

        .subscribe(res => {

          console.log(res);

          this.erreurImpTrieBack = res;
          this.bool_erreurImpTrieBack = true;
          this.bool_erreurImpTrieFr = false;
        })

    } else {

      this.bool_erreurImpTrieFr = true;
      this.bool_erreurImpTrieBack = false;
      this.erreurImpTrieFr = "Veuillez remplir tous les champs";



    }


  }

  actualise(): void {

    this.getListePostulant();
    this.getListeActivite();

    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
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

      this.getActiviteSansListe();
      this.getListeSansTirageValide();
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }



  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
  }
}

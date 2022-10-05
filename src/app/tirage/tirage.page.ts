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


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private serviceTirage: TirageService,
    private ajoutPostulantService: AjouterPostulantService,
    private activiteService: ActiviteService,
    private http: HttpClient,public breakpointObserver: BreakpointObserver) { }


  tirageObjet: Tirage = {
    libelleTirage: '',
    nombrePostulantTire: 0
  }

  listes$!: any;
  listeActivites$!: any

  bool_erreur: boolean = false;
  bool_erreurImp: boolean = false;
  bool_erreurImpTrie: boolean = false;


    libelleTirage: ""
    nombrePostulantTire: number
    libelleActivite:""
    libelleListe:""
    libelleListet:""

    formmodule!:FormGroup;
    erreurTirage: any;
    erreurImport:any;
    erreurImportTrie:any;

    getListePostulant(){
      this.ajoutPostulantService.recupererListePostulant().subscribe((data) =>{
        this.listes$ = data;
      })
    }

    getListeActivite(){                                            
      this.activiteService.recupererListeActivite().subscribe((data) =>{
        this.listeActivites$ = data;
      })
    }

    resetTirageForm(){
      this.libelleTirage,
      this.libelleListe = "",
      this.libelleActivite = "",
      this.nombrePostulantTire = null
    }

    postTirage(){
      
      this.bool_erreur = true;
      
      this.tirageObjet.libelleTirage = this.libelleTirage;
      this.tirageObjet.nombrePostulantTire = this.nombrePostulantTire;
      //console.log(this.libelleListe)

      if(this.libelleListet == "" || this.libelleTirage == "" || this.libelleActivite == "" || this.nombrePostulantTire == null){
        this.erreurTirage = "Veuillez renseigner tout les champs";
      }else{
        alert("test");
        console.log("maliste: "+ this.libelleListet)
        console.log("Mon activite: " + this.libelleActivite)
        this.serviceTirage.postTirage(this.libelleListet, this.libelleActivite, this.tirageObjet).subscribe((data) =>{
          this.erreurTirage = data
          console.log("Donnée envoyé avec succes");
        });
        this.resetTirageForm()
      }

      
    }












    myForm = new FormGroup({

      libelleListe: new FormControl('', [Validators.required, Validators.minLength(3)]),
      libelleActivite: new FormControl('', [Validators.required, Validators.minLength(3)]),
      file: new FormControl('', [Validators.required]),
  
      fileSource: new FormControl('', [Validators.required])
  
    });
  
  
  
    get f(){
  
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
  
    submit(){
  
      const formData = new FormData();
  
      formData.append('file', this.myForm.get('fileSource').value);

      //console.log(`http://localhost:8080/postulant/import/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)
  
      if(this.myForm.get('libelleListe').value.length > 0 && this.myForm.get('libelleActivite').value.length > 0 && formData != null){
        this.http.post<any>(`http://localhost:8080/postulant/import/excel/${this.myForm.get('libelleListe').value}/${this.myForm.get('libelleActivite').value}`, formData)
  
        .subscribe(res => {

          this.erreurImport = res.contenu;
          this.bool_erreurImp = true;

          console.log(res);
          
        })
       
      }else{
        this.bool_erreurImp = true;
        this.erreurImport = "veuillez remplir tous les champs";
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
  
  
  
    get fImportTrie(){
  
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
  
    submitImportTrie(){
  
      const formData = new FormData();
  
      formData.append('file', this.myFormImportTrie.get('fileSource').value);

      console.log(`http://localhost:8080/importTrie/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleTirage').value}/${this.myFormImportTrie.get('nbreTire').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)
  
      if(this.myFormImportTrie.get('libelleListe').value.length > 0  && this.myFormImportTrie.get('libelleTirage').value.length > 0 && this.myFormImportTrie.get('libelleListe').value.length > 0 && formData != null){
        this.http.post<any>(`http://localhost:8080/importTrie/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleTirage').value}/${this.myFormImportTrie.get('nbreTire').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)
  
        .subscribe(res => {
  
          console.log(res);
  
          this.erreurImportTrie = res.contenu;
          this.bool_erreurImpTrie = true;
          console.log(this.erreurImportTrie)
        })

      }else{

          this.bool_erreurImpTrie = true;
          this.erreurImportTrie = "Veuillez remplir tous les champs";
          console.log(this.erreurImportTrie)
  
      
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
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }




}

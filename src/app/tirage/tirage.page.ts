import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Tirage } from '../modeles/tirage/tirage';
import { TirageService } from '../Services/tirage/tirage.service';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
import { ActiviteService } from '../Services/activite/activite.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {

  constructor(private serviceTirage: TirageService,
    private ajoutPostulantService: AjouterPostulantService,
    private activiteService: ActiviteService,
    private http: HttpClient) { }


  tirageObjet: Tirage = {
    libelleTirage: '',
    nombrePostulantTire: 0
  }

  liste$!: any;
  listeActivites$!: any
  bool_erreur: boolean = false;
  bool_erreurImp: boolean = false;


    libelleTirage: ''
    nombrePostulantTire: 0
    libelleActivite:""
    libelleListe:""

    formmodule!:FormGroup;
    erreurTirage: any;
    erreurImport:any;
    erreurImportTrie:any;

    getListePostulant(){
      this.ajoutPostulantService.recupererListePostulantT().subscribe((data) =>{
        this.liste$ = data;
      })
    }

    getListeActivite(){
      this.activiteService.recupererListeActiviteT().subscribe((data) =>{
        this.listeActivites$ = data;
      })
    }

    resetTirageForm(){
      this.libelleTirage,
      this.libelleListe = "",
      this.libelleActivite = "",
      this.nombrePostulantTire = 0
    }

    postTirage(){
      
      this.bool_erreur = true;
      
      this.tirageObjet.libelleTirage = this.libelleTirage;
      this.tirageObjet.nombrePostulantTire = this.nombrePostulantTire;

      if(this.libelleTirage == "" || this.libelleActivite == "" || this.nombrePostulantTire == 0){
        this.erreurTirage = "Veuillez tous champs";
      }else{
        
        this.serviceTirage.postTirage(this.libelleListe, this.libelleActivite, this.tirageObjet).subscribe((data) =>{
          this.erreurTirage = data.contenu
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
  
      if(this.myForm.get('libelleListe').value != "" || this.myForm.get('libelleActivite').value != ""){
        this.http.post<any>(`http://localhost:8080/postulant/import/excel/${this.myForm.get('libelleListe').value}/${this.myForm.get('libelleActivite').value}`, formData)
  
        .subscribe(res => {

          this.erreurImport = res.contenu;
          this.bool_erreurImp = false;

          console.log(res);
          
        })
       
      }else{
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
  
      this.http.post(`http://localhost:8080/importTrie/excel/${this.myFormImportTrie.get('libelleListe').value}/${this.myFormImportTrie.get('libelleTirage').value}/${this.myFormImportTrie.get('nbreTire').value}/${this.myFormImportTrie.get('libelleActivite').value}`, formData)
  
        .subscribe(res => {
  
          console.log(res);
  
          alert('Uploaded Successfully.');
  
        })
  
    }
















  ngOnInit() {
    this.getListePostulant();
    this.getListeActivite();
  }



}

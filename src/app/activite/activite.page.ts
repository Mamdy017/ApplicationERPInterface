import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Activite } from '../modeles/activite/activite';
import { TypeActivite } from '../modeles/type-activite/type-activite';
import { ActiviteService } from '../Services/activite/activite.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.page.html',
  styleUrls: ['./activite.page.scss'],
})
export class ActivitePage implements OnInit {

  constructor(private activiteService : ActiviteService,
    private utilisateurs: ListeActeurService,
    private http: HttpClient) {}

  salles$:any;
  annees$:any;
  typeActivites$:any;
  entites$:any;
  users$:any;
  acteurs$:any;
  respons$:any

  titre:any
  salles:any;
  annees:any;
  typeActivites:any;
  entites:any;
  users:any;
  acteurs:any;
  descpt:any;
  dateDebut:any;
  dateFin:any;
  respons:any
  nombrepersonnedemande:any;

  bool_erreur:boolean = false
  erreur:any

  id:any = 1;

  fichier:File


  activiteObjet: Activite = {
    nom: "",
    description: "",
    dateDebut: new Date(),
    dateFin: new Date(),
  nombrepersonnedemande:0

  }

 

  getListeEntite(){
    this.activiteService.recupererListeEntite().subscribe((data) =>{
      this.entites$ = data;
    })
  }

  getListeSalle(){
    this.activiteService.recupererListeSalle().subscribe((data) =>{
      this.salles$ = data;
    })
  }

  getListeTypeActivite(){
    this.activiteService.recupererListeTypeActivite().subscribe((data) =>{
      this.typeActivites$ = data
    })
  }

  // getListeAnnee(){
  //   this.activiteService.recupererListeAnne().subscribe((data) =>{
  //     this.annees$ = data;
  //   })
  // }

  getListeUsers(){
    this.utilisateurs.lesUtilisateurs().subscribe((data) =>{
      this.users$ = data
      this.respons$ = data
    })
  }

  getActeurs(){
    this.utilisateurs.afficherLesActeurs().subscribe((data) =>{ 
      this.acteurs$ = data;
    })
  }


//ajout de l'activité


  myFormActivite = new FormGroup({

    //file, nom, description,nombrepersonnedemande, datedeb, datefin, idacteurs, idacteurInternes, libelleEntite, typeAct, libelleSalle, idresponsable, userid

    
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nombrepersonnedemande: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // datedeb: new FormControl('', [Validators.required]),
    // datefin: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idacteurs: new FormControl('', [Validators.required, Validators.minLength(1)]),
    idacteurInternes: new FormControl('', [Validators.required, Validators.minLength(1)]),
    libelleEntite: new FormControl('', [Validators.required]),
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

  
    let data = new FormData();
    
   let userid:any = 1;

    data.append("file",this.myFormActivite.get('fileSource').value);
    data.append("nom", this.myFormActivite.get('nom').value);
    data.append("description", this.myFormActivite.get('description').value);
    data.append("nombrepersonnedemande",this.myFormActivite.get('nombrepersonnedemande').value);
    // data.append("datedeb",this.myFormActivite.get('datedeb').value );
    // data.append("datefin", this.myFormActivite.get('description').value);
    data.append("idacteurs", this.myFormActivite.get('idacteurs').value);
    data.append("idacteurInternes", this.myFormActivite.get('idacteurInternes').value);
    data.append("libelleEntite", this.myFormActivite.get('libelleEntite').value);
    data.append("typeAct", this.myFormActivite.get('typeAct').value);
    data.append("libelleSalle", this.myFormActivite.get('libelleSalle').value);
    data.append("idresponsable", this.myFormActivite.get('idresponsable').value);
    data.append("userid", userid);


        //file, nom, description,nombrepersonnedemande, datedeb, datefin, idacteurs, idacteurInternes, libelleEntite, typeAct, libelleSalle, idresponsable, userid

   // if (this.myFormActivite.get('file').value.length > 0 && this.myFormActivite.get('nom').value.length > 0 && this.myFormActivite.get('description').value.length > 0 && this.myFormActivite.get('nombrepersonnedemande').value.length  > 0 && this.myFormActivite.get('datedeb').value.length  > 0 && this.myFormActivite.get('datefin').value.length  > 0 && this.myFormActivite.get('idacteurs').value.length  > 0 && this.myFormActivite.get('idacteurInternes').value.length  > 0 && this.myFormActivite.get('libelleEntite').value.length  > 0 && this.myFormActivite.get('typeAct').value.length  > 0 && this.myFormActivite.get('libelleSalle').value.length  > 0 && this.myFormActivite.get('idresponsable').value.length  > 0 && this.myFormActivite.get('idresponsable').value.length  > 0)  {
   
   console.log(this.myFormActivite.get('file').value)
   console.log(this.myFormActivite.get('nom').value)
   console.log(this.myFormActivite.get('description').value)
   console.log(this.myFormActivite.get('nombrepersonnedemande').value)
  //  console.log(this.myFormActivite.get('datedeb').value)
  //  console.log(this.myFormActivite.get('datefin').value)
   console.log(this.myFormActivite.get('description').value)
   console.log(this.myFormActivite.get('idacteurInternes').value)
   console.log(this.myFormActivite.get('libelleEntite').value)
   console.log(this.myFormActivite.get('typeAct').value)
   console.log(this.myFormActivite.get('libelleSalle').value)
   console.log(this.myFormActivite.get('idresponsable').value)
   console.log(userid)

      
   console.log(`http://localhost:8080/activite/ajouter`, data);
     
      this.http.post<any>("http://localhost:8080/activite/ajouter",data).subscribe(res => {

          console.log(res);

          // this.erreurImpTrieBack = res;
          // this.bool_erreurImpTrieBack = true;
          // this.bool_erreurImpTrieFr = false;
        });

   // } else {

      // this.bool_erreurImpTrieFr = true;
      // this.bool_erreurImpTrieBack = false;
      // this.erreurImpTrieFr = "Veuillez remplir tous les champs";



  //  }



  }











  // postActivite(){
  //   this.bool_erreur = true
  //   this.activiteObjet.nom = this.titre;
  //   this.activiteObjet.dateDebut = this.dateDebut;
  //   this.activiteObjet.dateFin = this.dateFin;
  //   this.activiteObjet.description = this.descpt;
  //   this.activiteObjet.nombrepersonnedemande = this.nombrepersonnedemande;

  //   console.log("les acteurs internes: " + this.users);
  //   console.log("les acteurs internes: " + this.acteurs);
  //   console.log("Les acteurs externes" + this.salles)
  //   console.log("Les acteurs externes" + this.entites)
  //   console.log("Les acteurs externes" + this.acteurs)
  //   console.log("Les acteurs externes" + this.descpt)
  //   console.log("titre: " + this.titre);
  //   console.log("a" + this.dateDebut);
  //   console.log("da: "+ this.dateFin);
  //   console.log("type: " + this.typeActivites)
  //   console.log("resp: " + this.respons)

  //  if(this.acteurs == "" || this.users == "" || this.entites == "" || this.typeActivites == "" || this.activiteObjet == null){
  //     this.erreur = "Veuillez remplir tous les champ obligatoire";
  //  }else{
  //   this.activiteService.postActivite(this.acteurs, this.users, this.entites, this.typeActivites, this.salles, this.activiteObjet).subscribe((data) =>{
  //     this.erreur = data.contenu
  //     console.log("Donnée envoyé avec succes");
  //   });
  // }
  //  }

  
  

  ngOnInit() {

    this.getListeSalle();
    this.getListeEntite();
    this.getListeTypeActivite();
    // this.getListeAnnee();
    this.getListeUsers();
    this.getActeurs();

  }

 

}

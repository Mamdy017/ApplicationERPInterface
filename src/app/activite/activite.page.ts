import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private activiteService : ActiviteService,
    private utilisateurs: ListeActeurService,
    private http: HttpClient,
    private route: Router) {}

  salles$:any;
  annees$:any;
  typeActivites$:any;
  entites$:any;
  users$:any;
  acteurs$:any;
  respons$:any

  titre:string
  salles:string;
  annees:any;
  typeActivites:string;
  entites:string;
  users:any;
  acteurs:string;
  descpt:string;
  dateDebut:string;
  dateFin:string;
  respons:string
  nombrepersonnedemande:string;

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


  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1000));
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

  
    let data = new FormData();
    
   let userid:any = 1;

    data.append("userid", userid);


        //file, nom, description,nombrepersonnedemande, datedeb, datefin, idacteurs, idacteurInternes, libelleEntite, typeAct, libelleSalle, idresponsable, userid

        // if(typeof this.myFormActivite.get('datedeb').value === 'undefined'){
        //   alert("alerte")
        //   this.myFormActivite.get('datedeb').setValue("");
        //   this.myFormActivite.get('idacteurInternes').setValue("")
        // }

        // if(this.myFormActivite.get('nom').value.length == 0){
        //   alert("faut pas")
        // }

        console.log("file" + this.myFormActivite.get('file').value)
        console.log("nom" +this.myFormActivite.get('nom').value)
        console.log("description" +this.myFormActivite.get('description').value)
        console.log("nombrepersonnedemande" +this.myFormActivite.get('nombrepersonnedemande').value)
        console.log("datedeb " +this.myFormActivite.get('datedeb').value)
        console.log("datefin " +this.myFormActivite.get('datefin').value)
        //console.log("" +this.myFormActivite.get('description').value)
        console.log("idacteurInternes" +this.myFormActivite.get('idacteurInternes').value)
        console.log("libelleEntite" +this.myFormActivite.get('libelleEntite').value)
        console.log("typeAct" +this.myFormActivite.get('typeAct').value)
        console.log("libelleSalle" +this.myFormActivite.get('libelleSalle').value)
        console.log("idresponsable" +this.myFormActivite.get('idresponsable').value)
        console.log("userid" +userid)


        if (this.myFormActivite.get('file').value.length == 0 || this.myFormActivite.get('nom').value.length == 0 || this.myFormActivite.get('description').value.length == 0|| typeof this.myFormActivite.get('idresponsable').value === 'undefined' || this.myFormActivite.get('nombrepersonnedemande').value.length  == 0 || this.myFormActivite.get('datedeb').value.length == 0 || this.myFormActivite.get('datefin').value.length  == 0 ||  typeof this.myFormActivite.get('libelleEntite').value  === 'undefined' || typeof this.myFormActivite.get('typeAct').value  === 'undefined')  {
   //this.myFormActivite.get('filesource').value !=  null  || 
          //, this.myFormActivite.get('idacteurInternes').value.length, typeof this.myFormActivite.get('typeAct').value  === 'unedifined'
          this.bool_erreurImpTrieFr = true;
          this.bool_erreurImpTrieBack = false;
          this.erreurImpTrieFr = "Veuillez remplir tous les champs";
   
   } else if(this.myFormActivite.get('datedeb').value > this.myFormActivite.get('datefin').value){
    this.bool_erreurImpTrieFr = true;
    this.bool_erreurImpTrieBack = false;
    this.erreurImpTrieFr = "La data de debut ne peut pas etre superieur à la date de fin";
   }
   else {

    // console.log("avant change: " + this.myFormActivite.get('idacteurs').value)

    // this.myFormActivite.get('idacteurs').setValue("null");

    // console.log("apres change: " + this.myFormActivite.get('idacteurs').value)
    

    // if(typeof this.myFormActivite.get('idacteurs').value  === 'undefined'){        
    //   //  this.myFormActivite.get('libelleSalle').value.length
    //   this.myFormActivite.get('idacteurs').setValue("null");
    //   console.log(this.myFormActivite.get('idacteurs').value)
      
    // }
    //  if(typeof this.myFormActivite.get('idacteurInternes').value === 'undefined'){
    //   this.myFormActivite.get('idacteurInternes').setValue("null");
    //  // console.log(this.myFormActivite.get('idacteurInternes').value);
    //  alert("hello word:  " + this.myFormActivite.get('idacteurInternes').value)  

    // }

    // if(typeof this.myFormActivite.get('idacteursOrg').value  === 'undefined'){     
    //   //  this.myFormActivite.get('libelleSalle').value.length
    //   this.myFormActivite.get('idacteursOrg').setValue("null");
    //   console.log(this.myFormActivite.get('idacteursOrg').value)
    // }
    //  if(typeof this.myFormActivite.get('idacteurInternesOrg').value === 'undefined'){
    //   this.myFormActivite.get('idacteurInternesOrg').setValue("null");
    //   console.log(this.myFormActivite.get('idacteurInternesOrg').value);
    // }

    // if(typeof this.myFormActivite.get('idacteursInterv').value  === 'undefined'){     
    //   //  this.myFormActivite.get('libelleSalle').value.length
    //   this.myFormActivite.get('idacteursInterv').setValue("null");
    //   console.log(this.myFormActivite.get('idacteursInterv').value)
    // }

    //  if(typeof this.myFormActivite.get('idacteurInternesInterv').value === 'undefined'){
    //   this.myFormActivite.get('idacteurInternesInterv').setValue("null");
    //   console.log(this.myFormActivite.get('idacteurInternesInterv').value);
    // }

    // if(typeof this.myFormActivite.get('idacteursLead').value  === 'undefined'){     
    //   //  this.myFormActivite.get('libelleSalle').value.length
    //   this.myFormActivite.get('idacteursLead').setValue("null");
    //   console.log(this.myFormActivite.get('idacteursLead').value)
    // }
    //  if(typeof this.myFormActivite.get('idacteurInternesLead').value === 'undefined'){
    //   this.myFormActivite.get('idacteurInternesLead').setValue("null");
    //   console.log(this.myFormActivite.get('idacteurInternesLead').value);
    // }


    // if(typeof this.myFormActivite.get('libelleSalle').value === 'undefined'){
    //   this.myFormActivite.get('libelleSalle').setValue("");
    // } 
   


    data.append("file",this.myFormActivite.get('fileSource').value);
    data.append("nom", this.myFormActivite.get('nom').value);
    data.append("description", this.myFormActivite.get('description').value);
    data.append("nombrepersonnedemande",this.myFormActivite.get('nombrepersonnedemande').value);
    data.append("datedeb",this.myFormActivite.get('datedeb').value );
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
         
          if(res.status == true){
            this.bool_erreurImpTrieBack = false;
            alert("activité ajouté avec succes");
            this.route.navigateByUrl("/details-activite");
            this.actualise();
          }
        });
   }

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

    this.myFormActivite

    this.getListeSalle();
    this.getListeEntite();
    this.getListeTypeActivite();
    // this.getListeAnnee();
    this.getListeUsers();
    this.getActeurs();

  }

 

}

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { Component, OnInit } from '@angular/core';
import { Postulant } from '../modeles/postulant/postulant';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
@Component({
  selector: 'app-ajouter-postulant',
  templateUrl: './ajouter-postulant.page.html',
  styleUrls: ['./ajouter-postulant.page.scss'],
})
export class AjouterPostulantPage implements OnInit {
  
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  status: boolean = false;

  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  postulant: Postulant = {
    nom_postulant: "",
    prenom_postulant: "",
    numero_postulant: "",
    email: " ",
    genre: " "

    }
  
    nom_postulant: string = '';
    prenom_postulant: string = '';
    numero_postulant: string = '';
    email: string = '';
    genre: string = '';
  
    listePostulant:any;
  
    liste:any;
    listes:any
    erreurs: any;
    bool_erreur: boolean = false;
    bool_erreurFr: boolean = false;
  errors: string;
  
  
    constructor(
      private ajouterPostulant : AjouterPostulantService, public breakpointObserver: BreakpointObserver
    ,private route:Router) { }
  
    actualise(): void {
      setInterval(
        () => {
        }, 100, clearInterval(1500));
    }


    resetForm(){

         
   this.nom_postulant = "";
   this.prenom_postulant = "";
    this.numero_postulant = "";
   this.email = " ";
 this.genre = " ";

    }
    ngOnInit() {



      // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");

      this.getListePostulant();
  
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

      this.getListePostulant();
  
    }
  
  
    getListePostulant(){
      this.ajouterPostulant.recupererListePostulant().subscribe((data) =>{
        this.listePostulant = data;
      })
    }
  
  
  

  posterPostulant(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',

      },
      heightAuto: false
    })
    
    this.postulant.nom_postulant = this.nom_postulant;
    this.postulant.prenom_postulant = this.prenom_postulant;
    this.postulant.numero_postulant = this.numero_postulant;
    this.postulant.email = this.email;
    this.postulant.genre = this.genre;

    

    if(this.nom_postulant.length != 0 || this.prenom_postulant.length != 0 || this.email.length != 0 || this.genre.length != 0 || this.numero_postulant.length != 0){
      

      this.ajouterPostulant.ajouterPostulant(this.listes, this.postulant).subscribe((data) =>{ 
        console.log(data.contenu);

        if(data == null){
          swalWithBootstrapButtons.fire(
            this.erreurs = "Ce postulant existe déjà",
          )
          this.status = false;
        }else{
          swalWithBootstrapButtons.fire(
            this.erreurs = "Postulant ajouté avec succès",
          )
         
          this.status = true;
           this.resetForm()
        }
      
      
      })

     
      this.bool_erreur = true;
      this.bool_erreurFr = false

  

    }else{  
     
      console.log("vvvv   " +this.nom_postulant)
    console.log("bbbb   " +this.prenom_postulant)
    console.log("bbbb   " +this.numero_postulant)
    console.log("bbb    " +this.postulant)
      this.bool_erreurFr = true;
      this.bool_erreur = false;
      swalWithBootstrapButtons.fire(
        this.erreurs = "Veuillez remplir tous les champs !",
      )
   
       
    }

   
  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }

}

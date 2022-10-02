import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Entite, Fichier } from '../modeles/entite/entite';
import { EntiteService } from '../Services/entite/entite.service';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.page.html',
  styleUrls: ['./entite.page.scss'],
})
export class EntitePage implements OnInit {
// ajouterEntite() {
// throw new Error('Method not implemented.');
// }

  entiteobjet: Entite = {

    idEntite: 0,
    nom: '',
    description: '',
    slogant: ''

  }

  photo$!: Observable<any>;
  formmodule!:FormGroup;

  file:any;

  fichier!:Fichier;

  nom: string;
  description: string;
  slogant: string;
  
  message: string;
  contenu: string;

  constructor(private serviceEntite: EntiteService,
    private formB:FormBuilder,
    // private serviceq:EntiteService,
    // private servicez:
    ) { }

    ngOnInit(): void {
   
      this.formmodule=this.formB.group({
        nom:["",Validators.required],
        file:["",Validators.required],
        description:["",Validators.required],
        slogant:["",Validators.required],
        })
      }

      fileChang(event:any){
         this.file=event.target.files[0]
       console.log(event)
        
      
      }
      


      creerEntite(){
        this.entiteobjet=this.formmodule.value
        let data =new FormData();

        // data.append("file",this.file)

        console.log(data)
        this.serviceEntite.ajouterEntite(this.entiteobjet.nom, this.entiteobjet.description, this.entiteobjet.slogant, this.file).subscribe(data => {
            this.formmodule.reset()
            this.message = "entite ajouter avec succes";
            this.contenu = data.contenu;
            
            console.log(data.contenu)
            
          
        })
      
      }

      //on vide le formulaire
resetForm(){

   this.nom= ''

   this.description = ''

   this.slogant = ''
}

    entitecreer(){
      this.fichier=this.formmodule.value

      this.entiteobjet.description = this.description;

      this.entiteobjet.nom = this.nom;

      this.entiteobjet.slogant = this.slogant

      console.log(this.fichier.photoentite)


      this.serviceEntite.ajouterEntite(this.nom, this.description, this.slogant, this.fichier.file).subscribe(data=>{
       
        console.log(data)
        
        this.formmodule.reset()
        })
        
        this.resetForm();
    }
}

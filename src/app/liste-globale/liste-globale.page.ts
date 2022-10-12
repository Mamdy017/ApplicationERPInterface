import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListePostulantService } from '../Services/liste-postulant.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostulantTire } from '../modeles/postulant-tire/postulant-tire';
import { ActiviteService } from '../Services/activite/activite.service';
@Component({
  selector: 'app-liste-globale',
  templateUrl: './liste-globale.page.html',
  styleUrls: ['./liste-globale.page.scss'],
})
export class ListeGlobalePage implements OnInit {


  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




  p =1;

  closeResult:string;
  
  menuBureau = true;
  menuMobile = false;
  constructor(private serviceListe: ListePostulantService,
     public breakpointObserver: BreakpointObserver,
     private http: HttpClient,
     private modalService: NgbModal,
     private route: Router ,
     private activiteService: ActiviteService) { }
//importation
bool_erreurImpFr: boolean;
bool_erreurImpBack: boolean;
erreurImpFr: string;
erreurImpBack: string;
libelleTirage: ""
  nombrePostulantTire: number
  libelleActivite: ""
  libelleListe: ""
  libelleListet: ""
  bool_erreur: boolean = false;
  bool_erreurImp: boolean = false;
  activitesSansListes$:any;
  
  formmodule!: FormGroup;

  listeTotal: any
  mesListe: any
  page:number=1;


 Postulants:PostulantTire[]

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

this. getListeActivite();


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
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }

    // ===========================================================================Popup Formulaire importer une liste================================================

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    
    getListeActivite() {
      this.activiteService.recupererActiviteSansListe().subscribe((data) => {
        this.activitesSansListes$  = data;
 
      })
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
            //this.route.navigateByUrl("/")
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


}

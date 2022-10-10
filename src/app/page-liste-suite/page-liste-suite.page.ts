import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulantTireService } from '../Services/postulant-tire/postulant-tire.service';
import { TirageService } from '../Services/tirage/tirage.service';
import { ListePostulantService } from "../Services/liste-postulant.service";
import { Tirage } from '../modeles/tirage/tirage';


@Component({
  selector: 'app-page-liste-suite',
  templateUrl: './page-liste-suite.page.html',
  styleUrls: ['./page-liste-suite.page.scss'],
})
export class PageListeSuitePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  ListeTirage: any;
  //nombre de postulant tire par genre
  PostulantTireParGenre: any;
  page: number = 1;
  Tirage:Tirage[]
  liste: any
  mesListe: any
  nomliste: any
  idTirage: any
  libelleliste: any
  libele_liste: string;
  iduser: string;
  roles: string;
  prenom_users: string;
  numero_users: string;
  email_users: string;
  noms_users: string;
  constructor(public breakpointObserver: BreakpointObserver, private service: TirageService,
    private route: ActivatedRoute,
    private servicePostulantTire: PostulantTireService, private serviceListe: ListePostulantService, private servicenom: ListePostulantService) { }
  actualise(): void {
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



    // /==============================================================================SESSION==========

    // ===========================================================================SESSION VALEURS================================================
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.noms_users = sessionStorage.getItem("nom_users");
    this.prenom_users = sessionStorage.getItem("prenom_users",);
    this.email_users = sessionStorage.getItem("email_users");
    this.numero_users = sessionStorage.getItem("numero_users");

    //Recuperer les tirages sur une liste
    const id_liste = +this.route.snapshot.params["idliste"];
    console.log(id_liste)
    this.service.TrouverTirageParListe(id_liste).subscribe(data => {
      this.ListeTirage = data

      //STATISTIQUES PAR GENRE
      this.serviceListe.mesListes().subscribe(data => {
        this.mesListe = data;
        console.table(this.mesListe)
        for (const liste of this.mesListe) {
          if (liste.idliste == id_liste) {
            this.libele_liste = liste.libelleliste;
          }
        }

      })

    })



  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}

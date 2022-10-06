import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../Services/reporting.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { EntiteService } from '../Services/entite/entite.service';
import { AlertController, AnimationController } from '@ionic/angular';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.page.html',
  styleUrls: ['./reporting.page.scss'],
})
export class ReportingPage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
p:1


// ==================Les declarations ici ===============================
lesActivites:any
searchText: any;
lesEntites : any;
lesPersonnesTirer:any;
elementVide:any

  constructor(public breakpointObserver: BreakpointObserver,
              private serviceReporting:ReportingService,
              private serviceEntite : EntiteService,
              private alertController: AlertController,
              private animationCtrl: AnimationController,
              
              ) { }

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


      // =========================================== RECURATION : Activités =======================================
this.serviceReporting.afficherTouteLesActivite().subscribe(data=>{
  this.lesActivites = data
})

      // =========================================== RECURATION Entité =======================================
  
      this.serviceEntite.afficherEntite().subscribe(data=>{
        this.lesEntites = data
      })

  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Modal d'Affichage des Personnes tirées ++++++++++++++++++++++++++++

enterAnimation = (baseEl: HTMLElement) => {
  const root = baseEl.shadowRoot;

  const backdropAnimation = this.animationCtrl
    .create()
    .addElement(root.querySelector('ion-backdrop')!)
    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  const wrapperAnimation = this.animationCtrl
    .create()
    .addElement(root.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, opacity: '0', transform: 'scale(0)' },
      { offset: 1, opacity: '0.99', transform: 'scale(1)' },
    ]);

  return this.animationCtrl
    .create()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(500)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

leaveAnimation = (baseEl: HTMLElement) => {
  return this.enterAnimation(baseEl).direction('reverse');
};


  // ===================================ICI ON RECUPERE LES PERSONNES D'UNE ACTIVITE===========================================
recId(idactivite:number){
this.serviceReporting.lesPersonnesTireValide(idactivite).subscribe(async data=>{
  this.lesPersonnesTirer = data

  console.log("============ "+this.lesPersonnesTirer[0])

  if(this.lesPersonnesTirer[0] == undefined)
  {
      // alert("Cette activité n'as pas de tirage validé")
      
        const alert = await this.alertController.create({
          header: 'Desolé',
          subHeader: '',
          message: "Cette activité n'a pas de tirage validé sur une liste ",
          buttons: ['OK'],
        });
    
        await alert.present();
  }

})

}

// Exportation du fichier

name = 'lesPersonnesValider.xlsx';
exportToExcel(): void {
  const element = document.getElementById('season-tble');
  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  const book: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
  XLSX.writeFile(book, this.name);
}

}



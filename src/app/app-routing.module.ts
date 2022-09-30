<<<<<<< .merge_file_a22048

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> .merge_file_a13384

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
<<<<<<< .merge_file_a22048
    redirectTo: 'authentification',
=======
    redirectTo: 'accueil-user',
>>>>>>> .merge_file_a13384
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'accueil-admin',
    loadChildren: () => import('./accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
  },
  {
    path: 'accueil-user',
    loadChildren: () => import('./accueil-user/accueil-user.module').then( m => m.AccueilUserPageModule)
  },
  {
    path: 'tirage',
    loadChildren: () => import('./tirage/tirage.module').then( m => m.TiragePageModule)
  },
  {
    path: 'postulant-tire',
    loadChildren: () => import('./postulant-tire/postulant-tire.module').then( m => m.PostulantTirePageModule)
  },
  {
    path: 'ajouter-postulant',
    loadChildren: () => import('./ajouter-postulant/ajouter-postulant.module').then( m => m.AjouterPostulantPageModule)
  },
  {
    path: 'admin-ajouter-acteur-user',
<<<<<<< .merge_file_a22048
    loadChildren: () => import('./admin-ajouter-acteur-user/admin-ajouter-acteur-user.module').then(
       m => m.AdminAjouterActeurUserPageModule)
=======
    loadChildren: () => import('./admin-ajouter-acteur-user/admin-ajouter-acteur-user.module').then( m => m.AdminAjouterActeurUserPageModule)
>>>>>>> .merge_file_a13384
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
<<<<<<< .merge_file_a22048
=======
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
>>>>>>> .merge_file_a13384
    path: 'liste-acteur',
    loadChildren: () => import('./liste-acteur/liste-acteur.module').then( m => m.ListeActeurPageModule)
  },
  {
    path: 'liste-user',
    loadChildren: () => import('./liste-user/liste-user.module').then( m => m.ListeUserPageModule)
  },
  {
    path: 'activite',
    loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule)
  },
  {
    path: 'header-user',
    loadChildren: () => import('./header-user/header-user.module').then( m => m.HeaderUserPageModule)
  },
  {
    path: 'header-admin',
    loadChildren: () => import('./header-admin/header-admin.module').then( m => m.HeaderAdminPageModule)
  },
  {
    path: 'ajouter-activate',
    loadChildren: () => import('./ajouter-activate/ajouter-activate.module').then( m => m.AjouterActivatePageModule)
  },
  {
    path: 'salle',
    loadChildren: () => import('./salle/salle.module').then( m => m.SallePageModule)
  },
  {
<<<<<<< .merge_file_a22048
    path: 'page-liste-suite',
    loadChildren: () => import('./page-liste-suite/page-liste-suite.module').then( m => m.PageListeSuitePageModule)
  },
  {
    path: 'page-liste-tirage',
    loadChildren: () => import('./page-liste-tirage/page-liste-tirage.module').then( m => m.PageListeTiragePageModule)
  },
  {
    path: 'liste-globale',
    loadChildren: () => import('./liste-globale/liste-globale.module').then( m => m.ListeGlobalePageModule)
  },
  {
    path: 'ajouter-participant',
    loadChildren: () => import('./ajouter-participant/ajouter-participant.module').then( m => m.AjouterParticipantPageModule)
  },
  {
    path: 'profile-user-profile',
    loadChildren: () => import('./profile-user-profile/profile-user-profile.module').then( m => m.ProfileUserProfilePageModule)
  },  {
    path: 'ajouter-tache',
    loadChildren: () => import('./ajouter-tache/ajouter-tache.module').then( m => m.AjouterTachePageModule)
  },
  {
    path: 'liste-salle',
    loadChildren: () => import('./liste-salle/liste-salle.module').then( m => m.ListeSallePageModule)
  },
  {
    path: 'liste-tirage-nonvalide',
    loadChildren: () => import('./liste-tirage-nonvalide/liste-tirage-nonvalide.module').then( m => m.ListeTirageNonvalidePageModule)
  },

 
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
=======
    path: 'gestionentite',
    loadChildren: () => import('./gestionentite/gestionentite.module').then( m => m.GestionentitePageModule)
  },  {
    path: 'liste-des-salles',
    loadChildren: () => import('./liste-des-salles/liste-des-salles.module').then( m => m.ListeDesSallesPageModule)
  },
  {
    path: 'renitialisation-m-p',
    loadChildren: () => import('./renitialisation-m-p/renitialisation-m-p.module').then( m => m.RenitialisationMPPageModule)
  },
  {
    path: 'detail-activite',
    loadChildren: () => import('./detail-activite/detail-activite.module').then( m => m.DetailActivitePageModule)
  },
  {
    path: 'renialiser-code',
    loadChildren: () => import('./renialiser-code/renialiser-code.module').then( m => m.RenialiserCodePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    NgbModule
>>>>>>> .merge_file_a13384
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< .merge_file_a22048

=======
>>>>>>> .merge_file_a13384


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-accueil',
    loadChildren: () => import('./admin-accueil/admin-accueil.module').then( m => m.AdminAccueilPageModule)
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
    path: 'ajouter-acteur',
    loadChildren: () => import('./admin-ajouter-acteur-user/admin-ajouter-acteur-user.module').then(
       m => m.AdminAjouterActeurUserPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
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
  },
  {
    path: 'ajouter-tache',
    loadChildren: () => import('./ajouter-tache/ajouter-tache.module').then( m => m.AjouterTachePageModule)
  },
  {
    path: 'liste-salle',
    loadChildren: () => import('./liste-salle/liste-salle.module').then( m => m.ListeSallePageModule)
  },
  {
    path: 'ajouter-entite',
    loadChildren: () => import('./entite/entite.module').then( m => m.EntitePageModule)
  },
  {
    path: 'liste-tirage-nonvalide',
    loadChildren: () => import('./liste-tirage-nonvalide/liste-tirage-nonvalide.module').then( m => m.ListeTirageNonvalidePageModule)
  },
  {
    path: 'accueil-entite',
    loadChildren: () => import('./accueil-entite/accueil-entite.module').then( m => m.AccueilEntitePageModule)
  },
  {
    path: 'changer-profile',
    loadChildren: () => import('./changer-profile/changer-profile.module').then( m => m.ChangerProfilePageModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then( m => m.ReportingPageModule)
  },
  {
    path: 'importer-participant',
    loadChildren: () => import('./importer-participant/importer-participant.module').then( m => m.ImporterParticipantPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


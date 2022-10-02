
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthentificationPageModule } from '../../../InterfaceApplicationERP/src/app/authentification/authentification.module';







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
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
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
    path: 'gestionentite',
    loadChildren: () => import('./gestionentite/gestionentite.module').then( m => m.GestionentitePageModule)
  },
  {
    path: 'entite',
    loadChildren: () => import('./entite/entite.module').then(m => m.EntitePageModule)
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
    loadChildren: () => import('./admin-ajouter-acteur-user/admin-ajouter-acteur-user.module').then( m => m.AdminAjouterActeurUserPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('../../../InterfaceApplicationERP/src/app/authentification/authentification.module').then( m => m.AuthentificationPageModule)
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
    path: 'liste-utilisateur',
    loadChildren: () => import('./liste-utilisateur/liste-utilisateur.module').then( m => m.ListeUtilisateurPageModule)
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
    path: 'page-liste-suite',
    loadChildren: () => import('./page-liste-suite/page-liste-suite.module').then(m => m.PageListeSuitePageModule)
  },
  {
    path: 'page-liste-tirage',
    loadChildren: () => import('./page-liste-tirage/page-liste-tirage.module').then( m => m.PageListeTiragePageModule)
  },

 
  {
    path: 'salle',
    loadChildren: () => import('./salle/salle.module').then( m => m.SallePageModule)
  },
  {
    path: 'liste-tirage',
    loadChildren: () => import('./liste-tirage/liste-tirage.module').then( m => m.ListeTiragePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    loadChildren: () => import('./admin-ajouter-acteur-user/admin-ajouter-acteur-user.module').then(
      m => m.AdminAjouterActeurUserPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

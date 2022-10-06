import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';
// import { Acteur } from '../act';

@Injectable({
  providedIn: 'root'
})
export class ListeActeurService {

  constructor(private http : HttpClient) { }

  // IcI ON RECUPERE LE NOMBRE TOTAL D'UTILISATEURS 
  utilisateurTotal():Observable<any>{
    return this.http.get("http://localhost:8080/utilisateur/afficherNbreUser")
  }
   // IcI ON RECUPERETOUS LES UTILISATEURS 
   lesUtilisateurs():Observable<any>
{
  return this.http.get("http://localhost:8080/utilisateur/afficher")
}


afficherLesActeurs() :Observable<Acteur[]> {
  return this.http.get<Acteur[]>("http://localhost:8080/acteur/afficher");
}

supprimerActeur(id : number) :Observable<any>{
  return this.http.delete(`http://localhost:8080/acteur/supprimer/${id}`);
}

supprimerUtilisateur( iduser: number) :Observable<any>{
  return this.http.delete(`http://localhost:8080/utilisateur/supprimer/${iduser}`);
}



// debut statistique pour kalanso
KalansoJanvier():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/janvierKalanso`);
}
KalansoFevier():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/fevrierKalanso`);
}

KalansoMars():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/marsKalanso`);
}
KalansoAvril():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/avrilKalanso`);
}
KalansoMai():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/maiKalanso`);
}
KalansoJuin():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/juinKalanso`);
}
KalansoJuillet():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/juilletKalanso`);
}
KalansoAout():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/aoutKalanso`);
}
KalansoSep():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/sepKalanso`);
}
KalansoOct():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/octKalanso`);
}
KalansoNo():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/noKalanso`);
}
KalansoDe():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/deKalanso`);
}
// fin statistique pour kalanso

// debut statistique pour fab
fabJanvier():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/janvierfab`);
}
fabFevier():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/fevrierfab`);
}

fabMars():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/marsfab`);
}
fabAvril():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/avrilfab`);
}
fabMai():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/maifab`);
}
fabJuin():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/juinfab`);
}
fabJuillet():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/juilletfab`);
}
fabAout():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/aoutfab`);
}
fabSep():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/sepfab`);
}
fabOct():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/octfab`);
}
fabNo():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/nofab`);
}
fabDe():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/defab`);
}
// fin statistique pour fab


// debut statistique pour fablab
fablabJanvier():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/janvierfablab`);
}
fablabFevier():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/fevrierfablab`);
}

fablabMars():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/marsfablab`);
}
fablabAvril():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/avrilfablab`);
}
fablabMai():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/maifablab`);
}
fablabJuin():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/juinfablab`);
}
fablabJuillet():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/juilletfablab`);
}
fablabAout():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/aoutfablab`);
}
fablabSep():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/sepfablab`);
}
fablabOct():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/octfablab`);
}
fablabNo():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/nofablab`);
}
fablabDe():Observable<object>{
  return this.http.get(`http://localhost:8080/activite/defablab`);
}
// fin statistique pour fablab


}

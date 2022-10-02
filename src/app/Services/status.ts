import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { status } from "../modeles/status/status";

@Injectable({
    providedIn: 'root'
  })
  export class servicestatus{
    n:number
    constructor(private http:HttpClient) { }
  
  savestatus(statu:status) :Observable<status>{
    return this.http.post<status>("http://localhost:8080/statut/ajouter",statu);
  }
  allstatus() :Observable<status[]>{
    return this.http.get<status[]>("http://localhost:8080/statut/afficher");
  }
  trouverparnom(nom :String) :number{
    
     this.http.get<number>("http://localhost:8080/statut/id/"+nom).subscribe(data=>{
        this.n=data;
        console.log(this.n)
    })
    return  this.n;
  }
  }
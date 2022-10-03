import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActiviteService } from '../Services/activite/activite.service';


@Component({
  selector: 'app-importer-participant',
  templateUrl: './importer-participant.page.html',
  styleUrls: ['./importer-participant.page.scss'],
})
export class ImporterParticipantPage implements OnInit {

  constructor(private http: HttpClient,
    private activiteService: ActiviteService) { }

    libelleListe:any
    libelleActivite:""
    libelleActivites$:any

    erreurImport:any;
    bool_erreurImp: boolean = false; 




  getListeActivite(){
    this.activiteService.recupererListeActiviteT().subscribe((data) =>{
      this.libelleActivites$ = data;
    })
  }


  myForm = new FormGroup({

    libelleListe: new FormControl('', [Validators.required, Validators.minLength(3)]),
    libelleActivite: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),

    fileSource: new FormControl('', [Validators.required])

  });



  get f(){

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

  submit(){

    const formData = new FormData();

    formData.append('file', this.myForm.get('fileSource').value);

    

    console.log(`http://localhost:8080/postulant/posulantTires/excel/${this.myForm.get('libelleListe').value}/${this.myForm.get('libelleActivite').value}`, formData)

    if(this.myForm.get('libelleListe').value.length > 0  && this.myForm.get('libelleActivite').value.length > 0){
      this.http.post<any>(`http://localhost:8080/postulant/posulantTires/excel/${this.myForm.get('libelleListe').value}/${this.myForm.get('libelleActivite').value}`, formData)

      .subscribe(res => {
        
        this.erreurImport = res.contenu;
        this.bool_erreurImp = true;
      

        console.log(res.contenu);
        
      })
     
    }else{
      this.bool_erreurImp = true;
      this.erreurImport = "veuillez remplir tous les champs";
   }
    

  }


  ngOnInit() {
    this.getListeActivite();
  }

}

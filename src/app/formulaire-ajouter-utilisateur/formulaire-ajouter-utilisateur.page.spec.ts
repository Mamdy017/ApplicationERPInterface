import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulaireAjouterUtilisateurPage } from './formulaire-ajouter-utilisateur.page';

describe('FormulaireAjouterUtilisateurPage', () => {
  let component: FormulaireAjouterUtilisateurPage;
  let fixture: ComponentFixture<FormulaireAjouterUtilisateurPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAjouterUtilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireAjouterUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

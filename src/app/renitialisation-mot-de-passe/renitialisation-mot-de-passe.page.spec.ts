import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenitialisationMotDePassePage } from './renitialisation-mot-de-passe.page';

describe('RenitialisationMotDePassePage', () => {
  let component: RenitialisationMotDePassePage;
  let fixture: ComponentFixture<RenitialisationMotDePassePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RenitialisationMotDePassePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenitialisationMotDePassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

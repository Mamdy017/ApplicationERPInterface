import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAjouterActeurUserPage } from './admin-ajouter-acteur-user.page';

describe('AdminAjouterActeurUserPage', () => {
  let component: AdminAjouterActeurUserPage;
  let fixture: ComponentFixture<AdminAjouterActeurUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjouterActeurUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAjouterActeurUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

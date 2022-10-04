import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeTirageNonvalidePage } from './liste-tirage-nonvalide.page';

describe('ListeTirageNonvalidePage', () => {
  let component: ListeTirageNonvalidePage;
  let fixture: ComponentFixture<ListeTirageNonvalidePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTirageNonvalidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeTirageNonvalidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

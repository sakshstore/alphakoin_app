import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyCoinPage } from './buy-coin.page';

describe('BuyCoinPage', () => {
  let component: BuyCoinPage;
  let fixture: ComponentFixture<BuyCoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyCoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

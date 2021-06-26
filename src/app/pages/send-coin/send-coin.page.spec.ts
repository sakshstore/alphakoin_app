import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendCoinPage } from './send-coin.page';

describe('SendCoinPage', () => {
  let component: SendCoinPage;
  let fixture: ComponentFixture<SendCoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendCoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

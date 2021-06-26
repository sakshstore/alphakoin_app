import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTicketMessagePage } from './add-ticket-message.page';

describe('AddTicketMessagePage', () => {
  let component: AddTicketMessagePage;
  let fixture: ComponentFixture<AddTicketMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTicketMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTicketMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicketMessageListPage } from './ticket-message-list.page';

describe('TicketMessageListPage', () => {
  let component: TicketMessageListPage;
  let fixture: ComponentFixture<TicketMessageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMessageListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketMessageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

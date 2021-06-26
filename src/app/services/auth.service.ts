import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';
import { Transactions } from '../model/transactions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
  private readonly baseurl="https://wapi.alphakoin.io/api/";

  constructor(private http: HttpClient) { }


  getlogo() {
    return this.http.get(this.baseurl+'getlogo');
  }


   
  // Register

  register(body) {
    return this.http.post(this.baseurl+'auth/register', body);
  }


  register_otp(body) {
    return this.http.post(this.baseurl+'auth/register_otp', body);
  }
  

// Login
  checkgoogleauth(body) {
    return this.http.post(this.baseurl + "auth/googleauthtest", body);
  }

  emailotpverify(body) {
    return this.http.post(this.baseurl + "auth/emailotpverify", body);
  }

  login(body) {
    return this.http.post(this.baseurl+'auth/googleauthverify', body);
  }


  // Dashboard

  balance(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/system/Balance', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

 

// Profile

  getuserById(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/user', { headers: headers })
      .pipe(
        catchError(e => throwError(e))


      );
  }


  updateProfile(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.post<User[]>(this.baseurl + 'auth/postprofile', data, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

// Buy Coin


getsettings(): Observable<any> {
  return this.http.get<any>(this.baseurl + 'getsettings1');
}


getBtcAddress(data: any): Observable<any> {

  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });



  return this.http.post<any>(this.baseurl + 'wallet/getInvoiceBtc', data, { headers: headers });
}



buycoinprocess(data: any): Observable<any> {

  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });



  return this.http.post<any>(this.baseurl + 'wallet/buycoinprocess', data, { headers: headers });
}




// send coin

rate(id: number): Observable<any> {

  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });

  return this.http.get<User[]>(this.baseurl + 'auth/system/rate?id=' + id, { headers: headers })
    .pipe(
      catchError(e => throwError(e))


    );
}


send_payment(data: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });

  return this.http.post<User[]>(this.baseurl + 'wallet/sendFund', data, { headers: headers })
    .pipe(
      catchError(e => throwError(e))

    );
}

// Transactions

transactions(): Observable<any> {

  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });
  return this.http.get<Transactions[]>(this.baseurl + 'auth/system/transactions', { headers: headers })
    .pipe(
      catchError(e => throwError(e))


    );
}

// Setting or Change Password

changepassword(data: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });

  return this.http.post<User[]>(this.baseurl + 'auth/changepassword', data, { headers: headers })
    .pipe(
      catchError(e => throwError(e))

    );

}


// Two Factor Authentication

authenable(): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });

  return this.http.get<User[]>(this.baseurl + 'auth/enableg2f', { headers: headers })
    .pipe(
      catchError(e => throwError(e))

    );

}
authcode(data: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
  });

  return this.http.post<User[]>(this.baseurl + 'auth/enableg2f', data, { headers: headers })
    .pipe(
      catchError(e => throwError(e))

    );


}

  //Support Ticket


  

  ticket_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    return this.http.get<any>(this.baseurl + 'auth/system/ticket_list', { headers: headers });
  }

 

  addticket(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.post<any>(this.baseurl + 'auth/system/add_ticket', data, { headers: headers });
  }
  


  ticket_by_id(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    return this.http.get<any>(this.baseurl + 'auth/system/ticket_by_id/' + id, { headers: headers });
  }


  getticket_message(id: any): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<any>(this.baseurl + 'auth/system/getticket_message/' + id, { headers: headers });
  }


  ticket_addmessage(data: any): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });


    return this.http.post<any>(this.baseurl + 'auth/system/addticket_message', data, { headers: headers });
  }


  

}

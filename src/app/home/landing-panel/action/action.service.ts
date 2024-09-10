import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }
  private API_URL = environment.API_URL;

  submitMail(mail: string) {
      return this.http.post(this.API_URL + "submit_mail", mail);
  }
};
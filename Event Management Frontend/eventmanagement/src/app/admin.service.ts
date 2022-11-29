import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = "http://localhost:8095/app/"
  constructor(private httpClient: HttpClient,){ }

  public loginAdminFromRemote(admin : Admin):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`+'Login', admin);
  }
 
}

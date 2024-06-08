import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = 'http://localhost:8080/api/inscription'; // Remplacez par votre URL backend

    constructor(private http: HttpClient) {}
  
    inscrireUtilisateur(inscriptionDTO: any): Observable<any> {
      return this.http.post(`${this.baseUrl}`, inscriptionDTO);
}
}

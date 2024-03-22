import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { specialistResponse } from '../../interfaces/expertcardResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpertprofileService {

  constructor(private http:HttpClient) { }
  getOneSpecialist(specialistId: string){
    return this.http.get<specialistResponse>(`http://localhost:3900/users/specialist/${specialistId}`)
  }
}

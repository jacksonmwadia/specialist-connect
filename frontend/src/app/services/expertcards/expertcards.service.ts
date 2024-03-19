import { Injectable } from '@angular/core';
import { ExpertCardResponse, OneexpertcardResponse } from '../../interfaces/expertcardResponse.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateExpertCard } from './expertcard.interface';


@Injectable({
  providedIn: 'root'
})
export class ExpertcardsService {

  token = localStorage.getItem('authToken') as string

  constructor(private http:HttpClient) {}

  getExpertcards(){
    // const token = localStorage.getItem('authToken') as string
    return this.http.get<ExpertCardResponse>('http://localhost:4100/expertcards')
  }

  deleteExpertcards(id:string){
    const token = localStorage.getItem('authToken') as string
    return this.http.delete(`http://localhost:4100/expertcards/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        token
      })
    })
  }

  getOneExpertcardsDetails(id:string){
    const token = localStorage.getItem('authToken') as string

    return this.http.get<OneexpertcardResponse>(`http://localhost:4100/expertcards/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        token
      })
    })
  }


  updateProductDetails(id:string, details:UpdateExpertCard){

    const token = localStorage.getItem('authToken') as string

    return this.http.put<{message:string, error:string}>(`http://localhost:4100/expertcards/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        token
      })
    })
  }
}

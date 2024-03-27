import { Injectable } from '@angular/core';
import { ExpertCardResponse, OneexpertcardResponse } from '../../interfaces/expertcardResponse.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateExpertCard } from './expertcard.interface';

export interface infoRes {
    info: {
      id: string;
      email: string,
      role: string
    }
  }
@Injectable({
  providedIn: 'root'
})
export class ExpertcardsService {
     
  //    readToken(token: string) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       token,
  //     }),
  //   };
  //   return this.http.get<{
  //     info: { id: string; email: string; role: string };
  //   }>('http://localhost:4100/auth/checkdetails', {}, httpOptions);
  // }

  readToken(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token,
      }),
    };
    return this.http.get<{
      info: { id: string; email: string; role: string };
    }>('http://localhost:4100/auth/checkdetails', httpOptions);
  }
  

  constructor(private http:HttpClient) {

  }

  getExpertcards(userId: string){
    
    return this.http.get<ExpertCardResponse>(`http://localhost:4100/expertcards`)
    // const token = localStorage.getItem('authToken') as string
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

    return this.http.get<OneexpertcardResponse>(`http://localhost:4100/expertcards/one/${id}`, {
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





  getCard(card_id:string){


    interface cardRepo{
      message:[
        {
          card_id:string,
          banner:string,
          profile_img:string,
          description:string,
          salary:string,
          user_id:string,
          recent_work:string,
          about:string,
          delivery:string,

        }
      ]


    }
    return this.http.get<cardRepo>(`http://localhost:4100/expertcards/card/${card_id}`)
  }
}

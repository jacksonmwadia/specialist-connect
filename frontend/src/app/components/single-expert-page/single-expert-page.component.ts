import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExpertProfile } from '../../services/expertprofile/expertprofile.interface';
import { ExpertcardsService } from '../../services/expertcards/expertcards.service';

@Component({
  selector: 'app-single-expert-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './single-expert-page.component.html',
  styleUrl: './single-expert-page.component.css'
})
export class SingleExpertPageComponent {

  card_id!:string;
  card:any[]=[];
  constructor(private route:ActivatedRoute, private api:ExpertcardsService){

    this.route.params.subscribe(params => {
      this.card_id = params['card_id'];
      console.log('card_id:', this.card_id);
    });

  
  this.api.getCard(this.card_id).subscribe(res=>{
    
    console.log(res.message);
    this.card=res.message
    
    console.log('One profile:', this.card);
    
  })



  }
}
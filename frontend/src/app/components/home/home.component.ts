import { ExpertCard } from './../../../../../backend/src/interface/expertcard.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ExpertcardsService } from '../../services/expertcards/expertcards.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  p: any[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private ExpertCard: ExpertcardsService) {
  

    this.ExpertCard.getExpertcards().subscribe(
      res=>{
        console.log(res.expertCards);
        this.p=res.expertCards
        
      }
    )
  }

  
}

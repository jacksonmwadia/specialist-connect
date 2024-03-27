import { ExpertCard } from './../../../../../backend/src/interface/expertcard.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ExpertcardsService } from '../../services/expertcards/expertcards.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink, FooterComponent, FormsModule, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filter=''
  p: any[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private ExpertCard: ExpertcardsService, private route:Router) {
  

    this.ExpertCard.getExpertcards(``).subscribe(
      res=>{
        console.log(res.expertCards);
        this.p=res.expertCards
        
      }
    )
  }

  userPost(card_id:string){
    this.route.navigate(['/view-expert-post/', card_id])
    console.log(card_id);
    
  }
}

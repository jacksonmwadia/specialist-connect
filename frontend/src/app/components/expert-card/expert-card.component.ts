import { Component } from '@angular/core';
import { ExpertcardsService } from '../../services/expertcards/expertcards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expert-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expert-card.component.html',
  styleUrl: './expert-card.component.css'
})
export class ExpertCardComponent {
  token = localStorage.getItem('authToken') as string
  userId!: string

  p: any[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private ExpertCard: ExpertcardsService) {
    this.ExpertCard.readToken(this.token).subscribe(res => {
      console.log(res);
      
      this.userId = res.info.id
  
this.getExpertCards()
      
    })

    // this.ExpertCard.getOneExpertcardsDetails(id:string).subscribe(
      //   res=>{
    //     console.log(res.expertCard);
    //     this.p=res.expertCard
        
    //   }
    // )
  }
  getExpertCards() {
    
    this.ExpertCard.getOneExpertcardsDetails(this.userId).subscribe(
      res=>{
        console.log(res.expertCard);
        this.p=res.expertCard
        
      }
    )
  }

  deleteProduct(id: string) {

    console.log('deleteProduct function called with id:', id);


    this.ExpertCard.deleteExpertcards(id).subscribe({
      next: (res) => {
        console.log(res);
        this.successMessage = 'Product deleted successfully.';
        this.errorMessage = '';
        // this.fetchProducts();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Failed to delete the product. Please try again.';
        this.successMessage = '';
      }

    });


  }

}

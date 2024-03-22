import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpertProfile } from '../../services/expertprofile/expertprofile.interface';

@Component({
  selector: 'app-single-expert-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './single-expert-page.component.html',
  styleUrl: './single-expert-page.component.css'
})
export class SingleExpertPageComponent {

  specialistId!: string;
  specialist: Specialist[] = []
  getId(){
    this.route.params.subscribe(params => {
      this.specialistId = params['id'];
    })
    this.getSpecialistDetails()
  }
  constructor(private dataservice: ExpertProfile, private route: ActivatedRoute){
    this.getId()
  }

  getSpecialistDetails(){
    this.dataservice.getOneSpecialist(this.specialistId).subscribe(res =>{
      console.log(res);
      
      res.specialists.forEach(specialist => {
        this.specialist.push(specialist)
      })
    })
  }
}

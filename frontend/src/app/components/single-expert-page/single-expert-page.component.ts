import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-expert-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './single-expert-page.component.html',
  styleUrl: './single-expert-page.component.css'
})
export class SingleExpertPageComponent {

}

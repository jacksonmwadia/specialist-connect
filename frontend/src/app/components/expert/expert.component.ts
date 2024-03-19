import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.css'
})
export class ExpertComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expert-add-appointment',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './expert-add-appointment.component.html',
  styleUrl: './expert-add-appointment.component.css'
})
export class ExpertAddAppointmentComponent {

}

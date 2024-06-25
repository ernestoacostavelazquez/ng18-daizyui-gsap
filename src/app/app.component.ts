import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng18-daizyui-gsap';
}

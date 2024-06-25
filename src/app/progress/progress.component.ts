import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  ngOnInit():void{
    this.animatedProgressBars();
  }

  animatedProgressBars(){
    gsap.to('#htmlProgress',{
      value:90,
      duration:2,
      ease:"poer2.inOut"
    });
    gsap.to('#cssProgress',{
      value:80,
      duration:2,
      ease:"poer2.inOut",
      delay:0.5
    });
    gsap.to('#jsProgress',{
      value:70,
      duration:2,
      ease:"poer2.inOut",
      delay:1
    });
    gsap.to('#angularProgress',{
      value:80,
      duration:2,
      ease:"poer2.inOut",
      delay:1.5
    });
    gsap.to('#reactProgress',{
      value:80,
      duration:2,
      ease:"poer2.inOut",
      delay:2
    });
    gsap.to('#phpProgress',{
      value:90,
      duration:2,
      ease:"poer2.inOut",
      delay:2.5
    });

  }

}

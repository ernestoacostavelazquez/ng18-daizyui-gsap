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
    this.animateRadialProgress();
  }

  animatedProgressBars(){
    gsap.to('#htmlProgress',{
      value:90,
      duration:2,
      ease:"power2.inOut"
    });
    gsap.to('#cssProgress',{
      value:80,
      duration:2,
      ease:"power2.inOut",
      delay:0.5
    });
    gsap.to('#jsProgress',{
      value:70,
      duration:2,
      ease:"power2.inOut",
      delay:1
    });
    gsap.to('#angularProgress',{
      value:80,
      duration:2,
      ease:"power2.inOut",
      delay:1.5
    });
    gsap.to('#reactProgress',{
      value:80,
      duration:2,
      ease:"power2.inOut",
      delay:2
    });
    gsap.to('#phpProgress',{
      value:90,
      duration:2,
      ease:"power2.inOut",
      delay:2.5
    });
    gsap.to('#javaProgress div',{
      width:"70%",
      duration:2,
      ease:"power2.inOut",
      delay:3.5
    });
    gsap.to('#nodeProgress div',{
      width:"80%",
      duration:2,
      ease:"power2.inOut",
      delay:4
    });
    gsap.to('#mysqlProgress div',{
      width:"90%",
      duration:2,
      ease:"power2.inOut",
      delay:4.5
    });
  }
  animateRadialProgress(){
    gsap.to('#mongoRadial',{
      "--value":70,
      duration:2,
      ease:"power2.inOut",
      delay:5
    });
    gsap.to('#ionicRadial',{
      "--value":80,
      duration:2,
      ease:"power2.inOut",
      delay:5.5
    });
    gsap.to('#expressRadial',{
      "--value":90,
      duration:2,
      ease:"power2.inOut",
      delay:6
    });
  }

}

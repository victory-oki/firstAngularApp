import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  
  @Input() userName='';
 

  show(val){    this.userName= val;
    console.log(this.userName);
    localStorage.setItem("username", JSON.stringify(this.userName));
  }

  constructor() { }
  ngOnInit() {

  }

}

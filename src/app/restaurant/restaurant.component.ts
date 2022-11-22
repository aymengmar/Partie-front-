import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log("111")
    this.loadScripts()
  }
   
  commander(){
   this.route.navigate(['/commander'])
  }
// Method to dynamically load JavaScript
loadScripts() {
  
  // This array contains all the files/CDNs
  const dynamicScripts = [
    "assets/js/jquery-3.2.1.min.js",
    "assets/js/popper.min.js",
    "assets/js/bootstrap.min.js",
    "assets/js/jquery.superslides.min.js",
    "assets/js/images-loded.min.js",
    "assets/js/isotope.min.js",
    "assets/js/baguetteBox.min.js",
    "assets/js/form-validator.min.js",
    "assets/js/contact-form-.js",
    "assets/js/custom.js"
  ];

for (let i = 0; i < dynamicScripts.length; i++) {
  const node = document.createElement('script');
  node.src = dynamicScripts[i];
  node.type = 'text/javascript';
  node.async = false;
  document.getElementsByTagName('body')[0].appendChild(node);
}
}
}

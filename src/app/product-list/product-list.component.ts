import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { listOfProduct } from './iprod';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  productList: listOfProduct[]=[
    {
      id: 101,
      name: "M I Smart Watch",
      price: 600,
      quantity: 10,
      discount: 10,
      displayImage: "https://w7.pngwing.com/pngs/504/311/png-transparent-apple-watch-series-2-apple-watch-series-3-smartwatch-black-smart-watch-black-hair-digital-black-white-thumbnail.png",
      fullImage: "https://w7.pngwing.com/pngs/504/311/png-transparent-apple-watch-series-2-apple-watch-series-3-smartwatch-black-smart-watch-black-hair-digital-black-white-thumbnail.png",
      description: "All-day activity tracking: Track steps, distance, calories burned, active minutes, you can check daily activity and time on OLED display",
      returnPolicy: "No return policy" 
    },
  
    {
      id:102,
      name: "Fire-Boltt SpO2",
      price: 3000,
      quantity: 8,
      discount: 8,
      displayImage: "https://w7.pngwing.com/pngs/991/969/png-transparent-apple-watch-series-1-iphone-x-apple-watch-series-2-watches-electronics-watch-accessory-sport-thumbnail.png",
      fullImage: "https://w7.pngwing.com/pngs/991/969/png-transparent-apple-watch-series-1-iphone-x-apple-watch-series-2-watches-electronics-watch-accessory-sport-thumbnail.png",
      description: "Fire-Boltt is India' No 1 Wearable Watch Brand Q122 by IDC Worldwide quarterly wearable device tracker Q122【360’ Rotating Menu】- Fire Boltt 360 Smartwatch has a new unique rolling and quick access menu. The new Rotating UI interaction provides a great user experience. 【Changeable Strap】;【HD Large Screen Full Touch 】- Fire-Boltt SpO2 smartwatch is a 1.3 inches Color screen full touch display, the material, design and craftsmanship are all exquisite. Full capacitive touch, supporting taps and swipes",
      returnPolicy: "15days return policy" 
    },
    {
      id: 103,
      name: "Notepad",
      price: 100,
      quantity: 8,
      discount: 20,
      displayImage: "https://w7.pngwing.com/pngs/372/394/png-transparent-paper-notebook-coil-binding-notepad-notebook-miscellaneous-spiral-bookbinding-thumbnail.png",
      fullImage: "https://w7.pngwing.com/pngs/372/394/png-transparent-paper-notebook-coil-binding-notepad-notebook-miscellaneous-spiral-bookbinding-thumbnail.png",
      description: "Things To Do Adhesive Bound Notepad With Micro Perforation On Each Sheet Which Enable The User To Remove The Sheet Out Of The Pad Easily. Customer Notice: This Is a single, Pack Of 3 means- Only 3 Refill.",
      returnPolicy: "10days return policy" 
    }
  ]

  constructor(private router : Router){
    
  }



  viewProductDetails(id: number) {
    this.router.navigate(['/productDetail', id]);
  }
}

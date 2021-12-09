import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// Initialize and add the map
/*function initMap(): void {
  // The location of Eni
  const eni = { lat: 48.1, lng: -1.700000 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: eni,
    }
  );

  // The marker, positioned at Eni
  const marker = new google.maps.Marker({
    position: eni,
    map: map,
  });
}*/

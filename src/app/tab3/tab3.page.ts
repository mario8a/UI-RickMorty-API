import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  Locations:any = [];

  constructor(private locService: LocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(){
    this.locService.getLocations().subscribe(location => {
      this.Locations = location;
    })
  }

}

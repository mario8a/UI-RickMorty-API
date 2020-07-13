import { Component } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Episodes:any = [];

  constructor(private EpService: EpisodesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getEpisodes();
  }

  getEpisodes() {
    this.EpService.getEpisodes().subscribe(epi => {
      // console.log(epi)
      this.Episodes = epi;
    })
  }

}

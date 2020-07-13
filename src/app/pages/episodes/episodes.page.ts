import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  Episodes:any = [];

  constructor(private EpService: EpisodesService, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);
    this.EpService.getEpisode(id).subscribe(epi => {
      // console.log(epi)
      this.Episodes = epi;
    })
  }

}

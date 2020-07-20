import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Characters:any = [];

  constructor(
    private charService: CharactersService
  ) {}

  options = {
    centeredSlices: true,
    loop: true,
    spaceBetween: -100,
  };

  ngOnInit(): void {
    this.getCharaters()
  }

  getCharaters() {
    this.charService.getCharacters().subscribe(character => {
      // console.log(character);
      this.Characters = character;
    })
  }

}

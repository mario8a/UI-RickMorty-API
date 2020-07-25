import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Characters:any = [];
  
  constructor(private charactserService: CharactersService) {}

  ngOnInit(): void {
  }

  onSearch(value:string) {
    this.charactserService.searchCharacter(value).subscribe(character => {
      console.log(character)

      this.Characters = character;
    })
  }

}

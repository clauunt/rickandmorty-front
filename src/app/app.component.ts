import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from './interfaces/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rickandmorty-front';
  public characters: Array<Character> = [];
  selectedId: number;

  constructor(
    private characterService: CharacterService
  ){

    this.characterService.getAllCharacters().subscribe((resp: any) => {
      this.characters = resp.results
    })

  }

  setSelectedId(id: number) {
    this.selectedId = id;
  }
/*
  openModal(id: number){
    if(id){
      this.characterService.getCharacterByID(id).subscribe((resp: any) => {
        this.character = resp;
        console.log(resp);
      })
    }
  }
*/
}

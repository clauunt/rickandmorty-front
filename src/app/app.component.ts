import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from './interfaces/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rickandmorty-front';
  selectedId: number = 2;
  public characters: Array<Character> = [];
  
  constructor(
    private characterService: CharacterService, 
    private router: Router,
    private route: ActivatedRoute,
  ){

    this.characterService.getAllCharacters().subscribe((resp: any) => {
      this.characters = resp.results
    })

  }

  openModal(id: number){
    this.selectedId = id;
  }

}

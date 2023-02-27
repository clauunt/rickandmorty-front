import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {
  @Input() id: number;
  character: Character;

  constructor(
    private characterService: CharacterService
  ){
    
  }

  ngOnInit(): void {
    this.characterService.getCharacterByID(this.id).subscribe((resp: any) => {
      this.character = resp;
      console.log(resp);
    })
  }


}

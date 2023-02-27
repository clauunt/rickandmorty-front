import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{
  @Input() data:any;
  constructor(
    private characterService: CharacterService 
  ){}

  ngOnInit(): void {
    
  }

  getCharacterModal(id:number) {
    return this.characterService.getCharacterByID(id).subscribe((resp: any) => {
      //console.log(resp)
    })
  }
  
}

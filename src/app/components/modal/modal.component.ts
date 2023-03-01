import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  @Input() id: any;
  @Output() closeModal = new EventEmitter();
  character: Character;

  constructor(
    private characterService: CharacterService
  ){

  }

  ngOnInit(): void {
    this.characterService.getCharacterByID(this.id).subscribe((resp: any) => {
      this.character = resp;
    })
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }
}

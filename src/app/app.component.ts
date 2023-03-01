import { Component, OnInit } from '@angular/core';
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

  cards: Array<Character> = [];
  cardsPerPage: number = 8;
  cardsNumPage: number = 1;
  public selectedPage = 1;

  constructor(
    private characterService: CharacterService
  ){
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((resp: any) => {
      this.characters = resp.results;
      this.changePage(1);
    })
    let pageIndex = (this.selectedPage - 1) * this.cardsPerPage;
    this.cards = this.characters.slice(pageIndex, this.cardsPerPage);
  }

  changeToPrevious(){
    this.changePage((this.selectedPage == 1) ? 1 : this.selectedPage - 1);
  }

  changeToNext(){
    this.changePage((this.selectedPage == this.characters.length) ? 5 : this.selectedPage + 1);
  }

  setSelectedId(id: number) {
    this.selectedId = id;
  }

  changePageSize(event:Event){
    const newSize = (event.target as HTMLInputElement).value
    this.cardsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers():number[]{
    let pages: number[] = Array(Math.ceil(this.characters.length / this.cardsPerPage)).fill(0).map((x,i) => i+1);
    this.cardsNumPage = pages.length;
    return Array(Math.ceil(this.characters.length / this.cardsPerPage)).fill(0).map((x,i) => i+1);
  }

  changePage(page : number){
    this.selectedPage = page;
    this.slicedCards();
  }

  slicedCards(){
    let pageIndex = (this.selectedPage - 1) * this.cardsPerPage;
    let endIndes = (this.selectedPage -1) * this.cardsPerPage + this.cardsPerPage;
    this.cards = [];
    this.cards = this.characters.slice(pageIndex, endIndes);
  }

}

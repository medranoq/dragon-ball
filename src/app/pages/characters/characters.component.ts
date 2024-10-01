import {Component, OnInit} from '@angular/core';
import {CharacterService} from "./character.service";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title = 'dragon-ball';
  groupedCharacters: { [key: string]: any[] } = {};

  constructor(private _characterService: CharacterService) {

  }

  ngOnInit() {
    this._characterService.getCharacters().subscribe({
        next: (response) => {
          this.groupedCharacters = this.groupBy(response.items, 'affiliation');
          console.log('Characters:', this.groupedCharacters);
        },
        error: (error) => {
          console.error('Ocurrió un error:', error);
        }
      }
    );
  }

  groupBy(array: any[], key: string): { [key: string]: any[] } {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  }
}

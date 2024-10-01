import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../character.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-characters-show',
  templateUrl: './characters-show.component.html',
  styleUrls: ['./characters-show.component.css']
})
export class CharactersShowComponent implements OnInit {
  title = 'Characters Show';
  character: any;

  constructor(private _characterService: CharacterService,
              private _route: ActivatedRoute) {

  }

  ngOnInit() {
    const characterID = this._route.snapshot.params['id'];
    this._route.params.subscribe(params => {
      this._characterService.getCharacterById(characterID).subscribe({
          next: (response) => {
            this.character = response;
            console.log('Character:', this.character);
          },
          error: (error) => {
            console.error('Ocurrió un error:', error);
          }
        }
      );
    });
  }

}


import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  public pokemon$ !: Observable<any>
  public pokemonName = "pikachu"

  constructor(private apiService : ApiService) {
      this.pokemon$ = apiService.searchPokemon('charizard').pipe(
        tap(console.log)
      );
   }

  ngOnInit(): void {
    
  }

  onChange(){
    console.log(this.pokemonName);
    this.pokemon$ = this.apiService.searchPokemon(this.pokemonName);
  }

}

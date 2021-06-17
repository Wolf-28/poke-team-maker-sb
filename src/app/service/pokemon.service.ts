import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPokemon(name: string) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }
}

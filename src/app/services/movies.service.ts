import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { Trending } from '../shared/interfaces/Trending.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api_key = '6f418ca5d1499da77a2ff120a8f07681';

  base_url = 'https://api.themoviedb.org/3';


  constructor(
    private _hppt: HttpClient,
  ) { }

  getTrending(): Observable<Trending> {
    return this._hppt.get<Trending>(this.base_url + '/trending/all/week', {
      params: {
        api_key: this.api_key,
        language: 'es-Es'
      }
    })
  }

  getMovies(): Observable<any> {
    return this._hppt.get(this.base_url + '/movie/popular', {
      params: {
        api_key: this.api_key,
        language: 'es-Es'
      } ,
    })
  }

  getSeries(): Observable<any> {
    return this._hppt.get(this.base_url + '/tv/popular', {
      params: {
        api_key: this.api_key,
        language: 'es-Es'
      },
    })
  }


}

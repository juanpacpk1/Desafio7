import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.css'],
  providers: [MoviesService, FirestoreService]
})
export class AgregarItemComponent {
  Movies_series: any[] = [];

  constructor(
    private _MoviesService: MoviesService,
    private _firestoreService: FirestoreService
  ) { 
  }

  ngOnInit(): void {
    this.getTrendingAll();
  }

  getTrendingAll() {
    this._MoviesService.getTrending().subscribe({
      next: (data) => {
        this.Movies_series = data.results;
        for (const element of this.Movies_series) {
          element.poster_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  addItem(newItem: number) {
    console.log('Peliculas para agregar', newItem);
    let peliculasParaAgregar = this.Movies_series.find(movie => movie.id == newItem);
    console.log('Pelicula encontrada', peliculasParaAgregar);
    this._firestoreService.create(peliculasParaAgregar);
  }

  obtenerPeliculasGuardadas() {
    this._firestoreService.getAll().subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService, FavoriteResponse } from '../../service/favorite';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {

  favorites: FavoriteResponse[] = [];
  userId = Number(localStorage.getItem('userId'));

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteService.getFavorites(this.userId).subscribe(data => {
      this.favorites = data;
    });
  }
}
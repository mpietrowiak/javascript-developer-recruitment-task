import { Inject, Injectable } from '@angular/core';

const STORAGE_KEY = 'fav_cities_id';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStorageService {
  private favoriteCityIds: Set<number>;

  constructor() { 
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const arr: Array<number> = JSON.parse(localStorage.getItem('STORAGE_KEY'));
      this.favoriteCityIds = new Set(arr);
    } catch (error) {
      console.log(error);
      this.favoriteCityIds = new Set();
    }
  }

  private saveToStorage() {
    const arr: Array<number> = Array.from(this.favoriteCityIds.values());
    localStorage.setItem('STORAGE_KEY', JSON.stringify(arr));
  }

  addFavoriteCityID(id: number): void {
    this.favoriteCityIds.add(id);
    this.saveToStorage();
  }

  removeFavoriteCityID(id: number): void {
    this.favoriteCityIds.delete(id);
    this.saveToStorage();
  }

  getFavoriteCityIDs(): Set<number> {
    return this.favoriteCityIds;
  }

  isCityFavorite(id: number): boolean {
    return this.favoriteCityIds.has(id);
  }
}

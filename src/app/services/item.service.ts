import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = environment.apiUrl

  constructor(private readonly httpSevice: HttpClient) { }

  getWishlist() {
      // Para devolver la llamada a nuestro servicio
      return this.httpSevice.get(`${this.url}wishlist`).pipe(
          tap(console.log)
      )
  }
}

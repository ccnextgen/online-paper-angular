import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) { }

  postItemAd(data: any){
    return this.http.post(`${environment.apiUrl}/api/vehicle/add`, data)
  }

  getVehicleList(){
    return this.http.get(`${environment.apiUrl}/api/vehicle/getList`)
  }
}

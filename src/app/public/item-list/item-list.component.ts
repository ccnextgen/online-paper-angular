import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList:VehicleDetails[] = []
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getVehicleList().subscribe((res:any) => {
      this.itemList = res
      console.log(res)
    })
  }

}

export interface VehicleDetails {
  id: string
  contactName: string;
  phoneNumber: string;
  city: string;
  vehicleType: string;
  vehicleCondition: string;
  vehicleMake: string;
  vehicleModel: string;
  manufacturedYear: string;
  price: number;
  transmissionType: number;
  fuelType: number;
  engineCapacity: number;
  mileage: number;
  options?: object;
  additionalInfo?: string;
  imageUrls: string[];
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  isAuthenticatedUser = false
  isItemPosted = false
  additionalCarFeatures = [
    {id: 1, value: 'AIR CONDITION'},
    {id: 2, value: 'POWER STEERING'},
    {id: 3, value: 'POWER MIRROR'},
    {id: 3, value: 'POWER WINDOW'},
  ]
  transmissionTypes = [
    {id: 1, value: 'Manuel'},
    {id: 1, value: 'Auto'},
    {id: 1, value: 'Hybrid'}
  ]

  fuelTypes = [
    {id: 1, value: 'Petrol'},
    {id: 1, value: 'Diesel'},
  ]

  itemPostForm = new FormGroup({
    contactName: new FormControl(''),
    phoneNumber: new FormControl(''),
    city: new FormControl(''),
    vehicleType: new FormControl(''),
    vehicleCondition: new FormControl(''),
    vehicleMake: new FormControl(''),
    vehicleModel: new FormControl(''),
    manufacturedYear: new FormControl(''),
    price: new FormControl(''),
    transmissionType: new FormControl(''),
    fuelType: new FormControl(''),
    engineCapacity: new FormControl(''),
    mileage: new FormControl(''),
    options: this.formBuilder.array([]),
    additionalInfo: new FormControl(''),
    imageUrls: new FormControl(''),
  })
  constructor(
    private userService: UserService,
    private itemService: ItemService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.isAuthenticated()
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if (token) {
      return this.userService.isAuthenticatedUse(token).subscribe((res: any) => {
        console.log(res)
        this.isAuthenticatedUser = res
      })
    } else {
      return this.isAuthenticatedUser = false
    }
  }


  itemPost(){
    console.log(this.itemPostForm.value)
    this.itemService.postItemAd(this.itemPostForm.value).subscribe((res:any) => {
      this.itemPostForm.reset({})
      this.isItemPosted = true
      console.log(res)
    })
  }

  onCheckboxChange(name: string, data: any){
    console.log(event, data)
  }

  onChange(name: string, isChecked: any) {
    let x = isChecked.target.checked
    const countries = (this.itemPostForm.controls['options'] as FormArray);

    if (x) {
      countries.push(new FormControl(name));
    } else {
      const index = countries.controls.findIndex(x => x.value === name);
      countries.removeAt(index);
    }
  }
}

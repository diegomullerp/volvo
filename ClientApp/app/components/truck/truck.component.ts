import { Component, Inject, Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { getBaseUrl } from '../../app.browser.module';
import { TruckService } from './truck.service';


@Component({
    selector: 'truck',
    templateUrl: './truck.component.html',
    providers: [TruckService]
    
})


export class TruckComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
    constructor(private _truckService: TruckService ) { }
    public forecasts: Truck[];
    
    getFoods() {
        this._truckService.getModels().subscribe(
           
          // the first argument is a function which runs on success
          data => { this.forecasts = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => console.log('done loading foods')
        );
      }

      createTruck(truck:Truck) {
        let food = {name: name};
        this._truckService.newTruck(truck).subscribe(
           data => {
             // refresh the list
             this.getFoods();
             return true;
           },
           error => {
             console.error("Error saving food!");
             return null;

           }
        );
      }
    /*
    //Get list
    public forecasts: Truck[];
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Model/getModels').subscribe(result => {
            this.forecasts = result.json() as Truck[];
        }, error => console.error(error));
    }
*/

    
//Save
onSubmit(truck: Truck){
    this.createTruck(truck);
      //  http.post(this.base_url + 'api/Truck/addTruck', truck).subscribe(status=> console.log(JSON.stringify(status)));
      }
}


interface Truck {
    id: string;
    name: string;
    model: string;
}



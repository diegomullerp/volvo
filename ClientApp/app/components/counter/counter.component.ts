import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { getBaseUrl } from '../../app.browser.module';


@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }

    

    public forecasts: Truck[];
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {

        http.get(baseUrl + 'api/Model/getModels').subscribe(result => {
            this.forecasts = result.json() as Truck[];
        }, error => console.error(error));
    }
    
    
onSubmit(truck: Truck, http: Http, @Inject('BASE_URL') baseUrl: string){
    alert(baseUrl);
        http.post(baseUrl + 'api/Truck/addTruck', truck).subscribe(status=> console.log(JSON.stringify(status)));
      }

    //onSubmit(truck: Truck, http: Http, @Inject('BASE_URL') baseUrl: string){
    //    http.post(baseUrl + 'api/Truck/addTruck', truck).subscribe(status=> console.log(JSON.stringify(status)));
     // }
}


interface Truck {
    id: string;
    name: string;
    model: string;
}


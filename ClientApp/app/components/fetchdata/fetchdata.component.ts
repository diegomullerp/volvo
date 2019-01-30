import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: Truck[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Truck/getTrucks').subscribe(result => {
            this.forecasts = result.json() as Truck[];
        }, error => console.error(error));
    }
}

interface Truck {
    id: string;
    name: string;
    model: string;
}

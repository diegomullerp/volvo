import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { getBaseUrl } from '../../app.browser.module';


@Injectable()
export class TruckService {

    constructor(private http:Http) {
    }

    private baseurl = getBaseUrl();

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.

    // Uses http.get() to load data from a single API endpoint
    getTrucks() {
        return this.http.get(this.baseurl + 'api/Truck/getTrucks');
    }

    getModels() {
        return this.http.get(this.baseurl + 'api/Model/getModels');
    }

    // send a POST request to the API to create a new data object
    newTruck(truck: Truck) {
        let body = JSON.stringify(truck);
        return this.http.post(this.baseurl + 'api/truck/addTruck', truck);
    }

    // send a PUT request to the API to update a data object
    updateTruck(truck: Truck) {
        let body = JSON.stringify(truck);
        return this.http.put(this.baseurl + 'api/truck/addTruck', truck);
    }

    // send a DELETE request to the API to delete a data object
    deleteTruck(truck: Truck) {
        return this.http.delete(this.baseurl + 'api/truck/addTruck', truck.id);
    }


}

interface Truck {
    id: string;
    name: string;
    model: string;
}

import { Http } from "@angular/http";
import { Inject } from "@angular/core";

export class LocationService {
    constructor(@Inject(Http) private http: Http){}

    getAddress(lat, lng){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDPLP2h6nOys_vD0b_aTN-rnRJqupmFSSE');
    }
}
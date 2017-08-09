import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'; 
import { Observable } from 'rxjs/rx'; 
import 'rxjs/add/operator/map';

@Injectable()
export class CustomDivService {
    private profileInfoURL = "assets/jsonFiles/profileInfo.json";
    private accountSettingsURL = "assets/jsonFiles/accountSettings.json";
    private likeShareURL = "assets/jsonFiles/likeShare.json";

    constructor(private _http: Http){}

    getProfileInfoData() {
        return this._http.get(this.profileInfoURL).map(response => response.json()).catch(this.handleError);
    }
    private  handleError (error:  any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let  errMsg  =  (error.message)  ?  error.message  :
            error.status  ?  `${error.status} - ${error.statusText}`  :  'Server error';
        console.error(errMsg); // log to console instead
        return  Observable.throw(errMsg);
    }
}
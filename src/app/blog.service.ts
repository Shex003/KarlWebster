import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _httpCleint:HttpClient) { }
  getData(dataType:string): Observable <any>
  {
return this._httpCleint.get (`${environment.API_URL}/${dataType}/posts`)
// return this._httpCleint.get (`https://server.karlwebster.com/${dataType}/posts?fbclid=IwAR2t_Aj1avooj_5H2kcPyjo2DCGJxzb5V3hNV0HLviwgMCL3x4tb8pgoOeE`)
  }
  getBlogDetails(slug:string =''): Observable <any>
  {
     return this._httpCleint.get(`${environment.API_URL}/public/posts/`+slug)
    // return this._httpCleint.get (`https://server.karlwebster.com/${dataType}/posts?fbclid=IwAR2t_Aj1avooj_5H2kcPyjo2DCGJxzb5V3hNV0HLviwgMCL3x4tb8pgoOeE`)
  }
}

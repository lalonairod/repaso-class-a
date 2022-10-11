import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import StorageHelper from '../../libs/helpers/storage.helper';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  username : string = "";
  password : string = "";

  constructor(public apiService : ApiService, private dataService : DataService, public route : Router) { }

  ngOnInit(): void {
  }

  onClick(){
   
    this.apiService.login(this.username, this.password).subscribe(
      {
        next : (res) => {
          StorageHelper.setItem('session', res);
          this.route.navigate(['search']);
        }

      }
    )
  }

}

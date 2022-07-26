import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminImveebyService } from 'src/app/services/admin-imveeby.service';

@Component({
  selector: 'app-admin-imveeby-table',
  templateUrl: './admin-imveeby-table.component.html',
  styleUrls: ['./admin-imveeby-table.component.css']
})
export class AdminImveebyTableComponent implements OnInit {

  public dataToDo: Array<any> = [];

  constructor(
    private adminImveebySvc: AdminImveebyService,
    // private routerSvc: Router,
  ) { }

  ngOnInit(): void {
    const parameter = '/todo'
    this.adminImveebySvc.getData(parameter).subscribe((response)=> {
      this.dataToDo = response['data'];
      console.log('dataToDo', this.dataToDo);
    });
  }

  public onButtonCreateClicked() {
    // this.routerSvc.navigate([this.routerSvc.url + '/create']);
  }

  public onButtonEditClicked(data: any) {
    console.log(data);
  }

}

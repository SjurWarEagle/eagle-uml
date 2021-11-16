import {Component, OnDestroy, OnInit} from '@angular/core';


// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnInit {
  public started: boolean;

  constructor() {
  }

  public ngOnInit(): void {
  }


  public ngOnDestroy(): void {
  }

}

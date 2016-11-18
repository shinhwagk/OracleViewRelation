import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello Angular!</h1> 
             <a href="#" *ngFor="let name of parameters" (click)="onff(name)"> {{name}} </a>
             <br/> <my-app-parameter [setName]="xxx"></my-app-parameter>`
})
export class AppComponent {
  constructor(private http: Http) {
    this.http.get('./data/parameters.json')
      .map((r: Response) => r.json())
      .toPromise()
      .then(response => this.parameters = response)
  }
  parameters: string[] = []

  onff(name) {
    this.xxx = name
  }

  xxx
}
import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app-parameter',
  templateUrl: 'app/parameter.component.html'
})
export class ParameterComponent {
  constructor(private http: Http) { }
  property = []
  notes = []
  section
  err

  name: string
  @Input() set setName(name) {
    if (name) {
      this.name = name
      this.http.get('./data/parameters/' + this.name + '.json')
        .map(r => r.json())
        .toPromise()
        .then(response => {
          for (let key in response["property"]) {
            console.info(key)
            this.property.push([key, response["property"][key]])
          }
          this.notes = response["notes"]
          this.section = response["section"]
        })
        .catch(err => this.err = err)
    }
  }
}
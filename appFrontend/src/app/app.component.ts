import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'appFrontend';
  title: string = '';
  id: number;
  found: boolean;
  constructor(private httpClient: HttpClient){ }
  onNameKeyUp(event: any){
    this.title = event.target.value;
    this.found = false;
  }
  getProfile(){
    this.httpClient.get('https://github.com/ingsw-dev/frontend-test/tree/master/backend/app/db/events/?title=${this.title}')
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.id = data[0].id;
          this.found = true;
        }
      }
    )
  }



  postProfile(){
    this.httpClient.post('https://github.com/ingsw-dev/frontend-test/tree/master/backend/app/db/events/?name=${this.name}',
    {
      name: 'mark',
      age: 41
    })
    .subscribe(
      (data: any) => {
        console.log(data)
      }
    )
  }
}

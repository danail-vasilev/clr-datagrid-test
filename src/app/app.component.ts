import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  selectedItem: any;
   users = [{"id":1, "name":"name111"},{"id":2, "name":"name222"},
      {"id":3, "name":"name333"}];
  constructor(private changeDetector: ChangeDetectorRef) {

  }
  selectItem = (item: any): void => {
    this.selectedItem = item;
 }
 
 isItemSelected = (item: any): boolean => {
    console.log(item === this.selectedItem);
    return item === this.selectedItem;
 };
 resetDataSelection(){
    let preselectLater: any = this.selectedItem;
    let users = this.users;
 
    //this.users = null;
    //this.selectedItem = null;
    
    this.users = [{"id":1, "name":"name111"},{"id":2, "name":"name222"},
       {"id":3, "name":"name333"}];
    this.selectedItem = this.users.find(
          user => user.id == (<any> preselectLater).id);
    //this.changeDetector.detectChanges();
 }
 
}

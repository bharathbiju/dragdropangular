import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'draganddrop';
  number: number[] = [];
  othernumber: number[] = [];
  task: any;

  constructor(){
    
  }
  arrayRemove(arr, value) { 
  
    return arr.filter(function(geeks){ 
        return geeks != value; 
    }); 
   
 } 
del(task){
  console.log(task)
  this.number = this.arrayRemove(this.number, task);
  this.othernumber = this.arrayRemove(this.othernumber, task);
  

}
 add(){
  //  this.task
   this.number.push( this.task);
   this.task=''
 }

  drop(event:CdkDragDrop<number []>){
    if(event.previousContainer!=event.container){
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);

    }else{
      moveItemInArray(this.number,event.previousIndex,event.currentIndex)
    }
   
  }
}

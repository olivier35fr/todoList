import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { TodoListService } from '../../services/todolist.service';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
  providers: [TodoListService]
})
export class DescriptionPage implements OnInit {

  public todoList;
  public id: number;

  constructor( public viewCtrl: ViewController, public params: NavParams, private todoListService: TodoListService ) {

    let item = [this.params.get('myParam')];
    this.id = item[0]['id'];

  }

  ngOnInit(){
    console.log(this.id);
    this.todoListService.getItem(this.id).subscribe(
      data => this.todoList = data
    );
  }


  cancel() {
    this.viewCtrl.dismiss();
  }



}

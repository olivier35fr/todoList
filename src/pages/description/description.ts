import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { TodoListService } from '../../services/todolist.service';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
  providers: [TodoListService]
})
export class DescriptionPage implements OnInit {

  public todoList: any[];
  public index: number;

  constructor(public viewCtrl: ViewController, public params: NavParams, private todoListService: TodoListService) {

    this.index = this.params.get('myParam');

  }

  ngOnInit() {
    this.todoListService.getItem(this.index).subscribe(
      data => this.todoList = data
    );
  }


  cancel() {
    this.viewCtrl.dismiss();
  }



}

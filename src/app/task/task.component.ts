import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";

import { Task } from './task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  // AngularのLifecycle Hooksに検知される
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}





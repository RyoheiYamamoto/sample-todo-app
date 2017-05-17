import { Injectable } from '@angular/core';
import { Task } from './task/task';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks():Task[] {
    // 本来はAjaxなどを使って取得する処理を記述
    return tasks;
  }
}

const tasks = [
  new Task(1, '1つめのタスク'),
  new Task(2, '2つめのタスク'),
  new Task(3, '3つめのタスク'),
  new Task(4, '4つめのタスク'),
  new Task(5, '5つめのタスク'),
];




import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks: string[] = []; // Array to store tasks

    constructor() { }

    ngOnInit(): void {
        // Initialize tasks here if needed
    }

    addTask(task: string): void {
        this.tasks.push(task); // Add task to the array
    }

    removeTask(index: number): void {
        this.tasks.splice(index, 1); // Remove task from the array
    }

}
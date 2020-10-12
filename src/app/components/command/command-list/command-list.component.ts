import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  commands: any;
  currentCommand = null;
  currentIndex = -1;
  
  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.retrievecommands();
  }
  
  retrievecommands(): void {
    this.commandService.getAll()
      .subscribe(
        data => {
          this.commands = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievecommands();
    this.currentCommand = null;
    this.currentIndex = -1;
  }

  setActiveCommand(command, index): void {
    this.currentCommand = command;
    this.currentIndex = index;
  }

}
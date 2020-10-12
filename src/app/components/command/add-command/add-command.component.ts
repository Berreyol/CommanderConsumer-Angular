import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {

  command = {
    howTo: '',
    line: '',
    plataform: ''
  };

  constructor(
    private commandService: CommandService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  saveCommand(): void {
    const data = {
      howTo: this.command.howTo,
      line: this.command.line,
      plataform: this.command.plataform
    };

    this.commandService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigateByUrl('/commands');
        },
        error => {
          console.log(error);
        });
  }

  newCommand(): void {
    this.command = {
      howTo: '',
      line: '',
      plataform: ''
    };
  }
}

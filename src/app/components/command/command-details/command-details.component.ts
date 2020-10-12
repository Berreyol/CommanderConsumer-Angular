import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.css']
})
export class CommandDetailsComponent implements OnInit {

  currentCommand = null;
  message = '';

  constructor(
    private commandService: CommandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getCommand(this.route.snapshot.paramMap.get('id'));
  }

  getCommand(id): void {
    this.commandService.get(id)
      .subscribe(
        data => {
          this.currentCommand = data;
        },
        error => {
          console.log(error);
        });
  }

  updateCommand(): void {
    this.commandService.update(this.currentCommand.id, this.currentCommand)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigateByUrl('/commands');
        },
        error => {
          console.log(error);
        }
      );
    

  }

  deleteCommand(): void {
    this.commandService.delete(this.currentCommand.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/commands']);
        },
        error => {
          console.log(error);
        });
  }
}
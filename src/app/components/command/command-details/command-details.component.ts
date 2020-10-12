import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Command } from '../models/command';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.css']
})
export class CommandDetailsComponent implements OnInit {
  commandForm = new FormGroup({
    howTo: new FormControl('', Validators.required),
    line: new FormControl('', Validators.required),
    plataform: new FormControl('', Validators.required)
  });

  currentCommandId: string;

  constructor(
    private commandService: CommandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.getCommand(id);
    this.currentCommandId = id;

  }

  getCommand(id): void {
    this.commandService.get(id)
      .subscribe(
        res => {
          const commandRes = <Command> res
          this.commandForm.patchValue({
            howTo: commandRes.howTo,
            line: commandRes.line,
            // is_active: this.requirement_type_obj.is_active,
            plataform: commandRes.plataform,
          });
        },
        error => {
          console.log(error);
        });
  }

  updateCommand(): void {
    var command = new Command();
    command.howTo = this.commandForm.get('howTo').value;
    command.line = this.commandForm.get('line').value;
    command.plataform = this.commandForm.get('plataform').value;

    this.commandService.update(this.currentCommandId, command)
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
    this.commandService.delete(this.currentCommandId)
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
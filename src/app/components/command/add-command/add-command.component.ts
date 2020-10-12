import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Command } from '../models/command';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {
  commandForm = new FormGroup({
    howTo: new FormControl('', Validators.required),
    line: new FormControl('', Validators.required),
    plataform: new FormControl('', Validators.required)
  });

  constructor(
    private commandService: CommandService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  saveCommand(): void {
    var data = new Command();
    data.howTo = this.commandForm.get('howTo').value;
    data.line = this.commandForm.get('line').value;
    data.plataform = this.commandForm.get('plataform').value;

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
}

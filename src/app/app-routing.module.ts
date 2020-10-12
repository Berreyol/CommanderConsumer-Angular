import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandListComponent } from './components/command/command-list/command-list.component';
import { CommandDetailsComponent } from './components/command/command-details/command-details.component';
import { AddCommandComponent } from './components/command/add-command/add-command.component';

const routes: Routes = [
  { path: '', redirectTo: 'commands', pathMatch: 'full' },
  { path: 'commands', component: CommandListComponent },
  { path: 'commands/:id', component: CommandDetailsComponent },
  { path: 'add', component: AddCommandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

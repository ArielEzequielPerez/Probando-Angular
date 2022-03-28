import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEdditCommentComponent } from './components/add-eddit-comment/add-eddit-comment.component';
import { ListCommentComponent } from './components/list-comment/list-comment.component';
import { ViewCommentComponent } from './components/view-comment/view-comment.component';


const routes: Routes = [
  {path: '', component: ListCommentComponent},
  {path: 'add', component: AddEdditCommentComponent},
  {path: 'edit/:id', component: AddEdditCommentComponent},
  {path: 'view/:id', component: ViewCommentComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

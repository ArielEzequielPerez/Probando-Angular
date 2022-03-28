import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componet
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEdditCommentComponent } from './components/add-eddit-comment/add-eddit-comment.component';
import { ListCommentComponent } from './components/list-comment/list-comment.component';
import { ViewCommentComponent } from './components/view-comment/view-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEdditCommentComponent,
    ListCommentComponent,
    ViewCommentComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroListComponent } from './components/superhero-list/superhero-list.component';


const routes: Routes = [
  { path:'', component:SuperheroListComponent},
  {path:'all-superheroes', component:SuperheroListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

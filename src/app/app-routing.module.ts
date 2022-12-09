import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';


const routes: Routes = [
  {
    path:'all-superheroes', component:SuperheroListComponent
  },

  // { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

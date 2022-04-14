import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component:NavigationComponent},
  {path:'About',component:NavigationComponent},
  {path:'Features',component:NavigationComponent},
  {path:'Screanshot',component:NavigationComponent},
  {path:'Pricing',component:NavigationComponent},
  {path:'Testimonials',component:NavigationComponent},
  {path:'Team',component:NavigationComponent},
  {path:'Contact',component:NavigationComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {path:'' ,redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'bio', component:BioComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/:slug', component:BlogDetailsComponent},
  {path:'contact', component:ContactComponent},
  // {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

// providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],


exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";


const routes: Routes = [
  {
    path: "",
    component: AboutPageComponent,
    children: [{
      path: "about",
      component: AboutPageComponent
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

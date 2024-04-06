import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', redirectTo:'page', pathMatch:'full' },
  { path: 'page', component: PageComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

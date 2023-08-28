import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';

const routes: Routes = [
  {path: '', component: PostFormComponent},
  {path: 'api/:id', component: PostDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

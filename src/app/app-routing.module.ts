import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'ad-console', component: ConsoleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

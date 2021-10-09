import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobComponent } from './pages/job/job.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'admin/job', component: JobComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

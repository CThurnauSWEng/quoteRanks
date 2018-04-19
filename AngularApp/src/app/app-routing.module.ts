import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { QuoteaddComponent } from './quoteadd/quoteadd.component';
import { QuoteranksComponent } from './quoteranks/quoteranks.component';

import { NgModule } from '@angular/core';
import { Routes, Params, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard',component: DashboardComponent},
  { path: 'add',component: AddComponent},
  { path: 'edit/:id',component: EditComponent},
  { path: 'quote/:author_id',component: QuoteranksComponent},
  { path: 'quoteadd/:author_id',component: QuoteaddComponent},
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

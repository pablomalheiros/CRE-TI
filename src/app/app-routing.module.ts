import { ResultApiComponent } from './result-api/result-api.component';
import { SearchComponent } from './views/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '', component: SearchComponent},
{path: 'search', component: SearchComponent},
{path: 'result', component: ResultApiComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



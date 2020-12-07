import { ResultApiComponent } from './result-api/result-api.component';
import { SearchComponent } from './views/search/search.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const APP_ROUTES: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'result-api', component: ResultApiComponent}
]


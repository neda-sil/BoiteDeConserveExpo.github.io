import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Archive } from './archive/archive'

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'archive/:id', component: Archive },
];
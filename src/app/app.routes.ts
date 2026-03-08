import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ServicesDetailComponent } from './features/services-detail/services-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Trang chủ mặc định
  { path: 'dich-vu/:id', component: ServicesDetailComponent },
];

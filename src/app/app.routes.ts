import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ServicesDetailComponent } from './features/services-detail/services-detail.component';
import { NewsComponent } from './features/news/news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Trang chủ mặc định
  { path: 'dich-vu/:id', component: ServicesDetailComponent },
  { path: 'tin-tuc', component: NewsComponent },
];

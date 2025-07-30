import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-component/login-component';
import { AdminDashboard } from './pages/admin/admin-dashboard-component/admin-dashboard-component';
import { AdminGuard } from './services/admin-guard';
import { WelcomeComponent } from './pages/admin/welcome-component/welcome-component';
import { ProfileComponent } from './pages/admin/profile-component/profile-component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminDashboard,
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                component: WelcomeComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
        ]
    },
];

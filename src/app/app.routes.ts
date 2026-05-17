import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Devs } from './pages/devs/devs';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'home',
        loadComponent:() => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'devs',
        loadComponent:() => import('./pages/devs/devs').then(m => m.Devs),
    },
    {
        path: 'about',
        loadComponent:() => import('./pages/about/about').then(m => m.About),
    },
    {
        path: 'contact',
        loadComponent:() => import('./pages/contact/contact').then(m => m.Contact),
    }
];
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceWebComponent } from './pages/services/service-web/services-web.component';
import { ServiceHostingComponent } from './pages/services/service-hosting/service-hosting.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'index',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'services/web',
        component: ServiceWebComponent
      },
      {
        path: 'services/hosting',
        component: ServiceHostingComponent
      },
      {
        path: 'contacto',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'error_404',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'error_404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

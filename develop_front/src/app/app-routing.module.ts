import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((res) => res.HomeModule),
  },
  {
    path: '**',
    component: MessageComponent, // Redirige a MessageComponent para rutas no encontradas
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

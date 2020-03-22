import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { TopPageComponent } from './top-page/top-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToTop = () => redirectLoggedInTo(['top']);

const routes: Routes = [
  { path: '', component: TopPageComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin} },
  { path: 'login', component: LoginPageComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToTop} },
  // { path: 'top', component: TopPageComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginPageComponent,
  TopPageComponent
];

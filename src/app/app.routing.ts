import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DeployComponent} from './application/deploy';
import {WebAppComponent} from './application/web_app';
import {ImageComponent} from './image/image';

const routes: Routes = [
  { path: 'deploy', component: DeployComponent},
  { path: 'webApp', component: WebAppComponent},
  { path: 'image', component: ImageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

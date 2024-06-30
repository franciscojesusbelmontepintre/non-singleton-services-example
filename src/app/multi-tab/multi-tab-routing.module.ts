import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { MultiTabComponent } from './multi-tab.component';
import { from, map } from 'rxjs';
import { FIRST_TAB_SERVICE_TOKEN } from '../tokens/first-tab-service.token';
import { SECOND_TAB_SERVICE_TOKEN } from '../tokens/second-tab-service.token';
import { FirstTabService } from './components/first-tab/services/first-tab.service';
import { SecondTabService } from './components/second-tab/services/second-tab.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MultiTabComponent,
        data: {
          component: 'MultiTabComponent'
        },
        resolve: {
          updateInjectionToken: (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
            if (!FirstTabService.version) {
              inject(FIRST_TAB_SERVICE_TOKEN);
            } else {
              const a = inject(FIRST_TAB_SERVICE_TOKEN);
              a.builder()
            }
            if (!SecondTabService.version) {
              inject(SECOND_TAB_SERVICE_TOKEN);
            } else {
              const b = inject(SECOND_TAB_SERVICE_TOKEN);
              b.builder()
            }
          },
          resolvedData: (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
            const a = inject(FIRST_TAB_SERVICE_TOKEN);
            const b = inject(SECOND_TAB_SERVICE_TOKEN);
            return from(Promise.resolve()).pipe(
              map(() => [
                a.getValue().title,
                b.getValue().title
              ])
            )
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiTabRoutingModule { }

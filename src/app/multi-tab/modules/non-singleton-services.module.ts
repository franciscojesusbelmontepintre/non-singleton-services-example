import { NgModule } from "@angular/core";
import { FirstTabService } from "../components/first-tab/services/first-tab.service";
import { SecondTabService } from "../components/second-tab/services/second-tab.service";
import { FIRST_TAB_SERVICE_TOKEN } from "src/app/tokens/first-tab-service.token";
import { BehaviorSubject } from "rxjs";
import { GenericExtenderType } from "src/app/types/generic-extender.type";
import { SECOND_TAB_SERVICE_TOKEN } from "src/app/tokens/second-tab-service.token";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: FirstTabService,
      useValue: undefined
    },
    {
      provide: SecondTabService,
      useValue: undefined
    },
    {
      provide: FIRST_TAB_SERVICE_TOKEN,
      useFactory: () => {
        return (() => {
          const builderFn = (s: BehaviorSubject<FirstTabService>) => Object.defineProperty(
            (s as GenericExtenderType<BehaviorSubject<FirstTabService>>),
            'builder',
            {
              value: () => {
                s.next(new FirstTabService())
              }
            }
          );
          let res: GenericExtenderType<BehaviorSubject<FirstTabService>> = builderFn(
            new BehaviorSubject<FirstTabService>(new FirstTabService())
          );
          return res;
        })()
      },
      deps: []
    },
    {
      provide: SECOND_TAB_SERVICE_TOKEN,
      useFactory: () => {
        return (() => {
          const builderFn = (s: BehaviorSubject<SecondTabService>) => Object.defineProperty(
            (s as GenericExtenderType<BehaviorSubject<SecondTabService>>),
            'builder',
            {
              value: () => {
                s.next(new SecondTabService())
              }
            }
          );
          let res: GenericExtenderType<BehaviorSubject<SecondTabService>> = builderFn(
            new BehaviorSubject<SecondTabService>(new SecondTabService())
          );
          return res;
        })()
      },
      deps: []
    }
  ],
})
export class NonSingletonServicesModule {}

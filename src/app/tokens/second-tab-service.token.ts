import { InjectionToken } from "@angular/core";
import { SecondTabService } from "../multi-tab/components/second-tab/services/second-tab.service";
import { BehaviorSubject } from "rxjs";
import { GenericExtenderType } from "../types/generic-extender.type";

export const SECOND_TAB_SERVICE_TOKEN = new InjectionToken<GenericExtenderType<BehaviorSubject<SecondTabService>>>('SECOND_TAB_SERVICE_TOKEN');

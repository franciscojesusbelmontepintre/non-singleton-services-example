import { InjectionToken } from "@angular/core";
import { FirstTabService } from "../multi-tab/components/first-tab/services/first-tab.service";
import { BehaviorSubject } from "rxjs";
import { GenericExtenderType } from "../types/generic-extender.type";

export const FIRST_TAB_SERVICE_TOKEN = new InjectionToken<GenericExtenderType<BehaviorSubject<FirstTabService>>>('FIRST_TAB_SERVICE_TOKEN');

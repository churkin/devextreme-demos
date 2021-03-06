import { NgModule, Component, enableProdMode } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {Appointment, Service, Owner, Priority} from './app.service';
import {DxSchedulerModule} from 'devextreme-angular';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    providers: [Service]
})
export class AppComponent {
    appointmentsData: Appointment[];
    owners: Owner[];
    priorities: Priority[];
    currentDate: Date = new Date(2021, 4, 11);

    constructor(service: Service) {
        this.appointmentsData = service.getAppointments();
        this.owners = service.getOwners();
        this.priorities = service.getPriorities();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxSchedulerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)

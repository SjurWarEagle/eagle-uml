import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IMqttServiceOptions, MqttModule} from 'ngx-mqtt';
import {environment} from '../environments/environment';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: environment.mqttServer,
  port: environment.mqttPort,
  protocol: 'ws',
  path: '/mqtt',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MqttModule.forRoot(MQTT_SERVICE_OPTIONS)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

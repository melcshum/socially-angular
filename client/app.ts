import 'reflect-metadata';
import 'zone.js/dist/zone';

import {Component,  provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';


import {PartiesList} from './imports/parties-list/parties-list.ts';
import {PartyDetails} from './imports/party-details/party-details.ts';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
 })

@RouteConfig([
  { path: '/', as: 'PartiesList', component: PartiesList },
  { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])

class Socially {
}

bootstrap(Socially, [
   ROUTER_PROVIDERS,
   provide(APP_BASE_HREF, { useValue: '/' })
]);



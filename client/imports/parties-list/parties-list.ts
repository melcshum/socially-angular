import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {Parties} from '../../../collections/parties.ts';
import {PartiesForm} from '../parties-form/parties-form.ts';

@Component({
  selector: 'parties-list',
  templateUrl: '/client/imports/parties-list/parties-list.html',
  directives: [PartiesForm,  RouterLink]
})

export class PartiesList {
  parties: Mongo.Cursor<Party>;

  constructor() {
    this.parties = Parties.find();
  }

  removeParty(party) {
    Parties.remove(party._id);
  }
}

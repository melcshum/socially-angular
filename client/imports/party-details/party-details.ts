
import {Component} from 'angular2/core';
import {RouteParams, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {Parties} from '../../../collections/parties.ts';


@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html',
  directives: [RouterLink]
})




export class PartyDetails {
   party: Party;

  constructor(params: RouteParams) {
    var partyId = params.get('partyId');
    this.party = Parties.findOne(partyId);
  }

  saveParty(party) {
    Parties.update(this.party._id, {
      $set: {
        name: party.name,
        description: party.description,
        location: party.location
      }


    });
  }


}

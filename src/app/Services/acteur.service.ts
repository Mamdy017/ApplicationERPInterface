import { Injectable } from '@angular/core';
import { status } from '../modeles/status/status';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {
  savestatus(sta: status) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

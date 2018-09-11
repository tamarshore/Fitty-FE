import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  public headerColor: Subject<string> = new Subject;

  constructor() {
  }
}

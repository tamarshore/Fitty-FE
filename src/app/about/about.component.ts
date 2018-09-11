import { Component, OnInit } from '@angular/core';
import {ToolsService} from '../services/tools.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolsService.headerColor.next('#769c6f');
  }

}

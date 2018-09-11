import { Component, OnInit } from '@angular/core';
import {ToolsService} from '../services/tools.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolsService.headerColor.next('#93b9ce');
  }

}

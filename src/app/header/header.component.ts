import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../services/tools.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerColor: string;

  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
    this.toolsService.headerColor.subscribe((color) => this.headerColor = color);
  }

}

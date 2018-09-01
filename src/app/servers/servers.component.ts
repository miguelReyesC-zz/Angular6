import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', /* -> Element/tag - This is the most used.*/
  /* selector: '[app-servers]', -> By attribute */
  /* selector: '.app-servers',  -> By class */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

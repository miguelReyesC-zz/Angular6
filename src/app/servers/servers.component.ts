import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', /* -> Element/tag - This is the most used.*/
  /* selector: '[app-servers]', -> By attribute */
  /* selector: '.app-servers',  -> By class */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Initial name";
  serverName2 = "Initial name";
  newExample = "...";
  youName = "";
  displayYourName = false;

  constructor() {
    setTimeout(() => {
       this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  displayServerName() {
    this.newExample = "Server was created! Name:" + this.serverName2;
  }

  updateName() {
    this.displayYourName = true;
  }

}

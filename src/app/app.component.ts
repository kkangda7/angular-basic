import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];

  onAddServer(event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent,
    });
  }

  onAddBlueprint(event: { printName: string; printContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.printName,
      content: event.printContent,
    });
  }
}

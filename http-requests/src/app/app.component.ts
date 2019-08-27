import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName = this.serverService.getAppName();
  servers;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.servers = this.serverService.getServers().subscribe(
      (servers: any[]) => {this.servers = servers},
      (error) => {console.log(error)}
    );
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe((response) => {
      console.log(response);
    }, (error) => {console.log(error)});
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {this.servers = servers},
      (error) => {console.log(error)}
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

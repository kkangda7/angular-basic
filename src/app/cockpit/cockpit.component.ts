import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // newServerName: string;
  // newServerContent: string;
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @Output()
  serverCreate = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpcreate') bulePrintCreate = new EventEmitter<{
    printName: string;
    printContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(name: HTMLInputElement, content: HTMLInputElement) {
    console.log(this.serverNameInput.nativeElement.value);

    this.serverCreate.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: content.value,
    });
  }

  onAddBlueprint(name: HTMLInputElement, content: HTMLInputElement) {
    this.bulePrintCreate.emit({
      printName: name.value,
      printContent: `${content.value}
        (name:
        ${this.serverNameInput.nativeElement.value}
        )`,
    });
  }
}

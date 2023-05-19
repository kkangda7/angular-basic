import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  DoCheck,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentChild') contentChild: ElementRef;

  constructor() {
    // console.log('constructor');
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    // console.log('test:', this.heading);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    // console.log(changes.element.currentValue.name);
    // changes.element.currentValue.name = `${changes.element.currentValue.name}(type:${changes.element.currentValue.type})`;
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    // console.log('test:', this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
    console.log(this.contentChild.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
    console.log(this.contentChild.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
}

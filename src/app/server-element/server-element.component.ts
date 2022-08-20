import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked,
    AfterViewInit,
    Component, ContentChild,
    DoCheck, ElementRef,
    Input,
    OnChanges, OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
// tslint:disable-next-line:max-line-length
export class ServerElementComponent implements OnDestroy, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked {

    serverElements = [];

    @Input() element: { type: string, name: string, content: string };
    @ContentChild('contentParagraph') paragraph: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
/*        console.log('onInit');
        console.log('Text Content of paragraph: ' + this.paragraph);*/
    }

    ngOnChanges(changes: SimpleChanges): void {
/*
        console.log('OnChanged');
*/
    }

    ngDoCheck(): void {
/*
        console.log('DoCheck');
*/
    }

    ngAfterContentChecked() {
/*
        console.log('AfterContentCheck');
*/
    }

    ngAfterContentInit() {
/*
        console.log('AfterContentInit');
*/
    }

    ngAfterViewChecked() {
/*
        console.log('AfterViewInit');
*/
    }

    ngOnDestroy() {
/*
        console.log('ngOnDestroy');
*/
    }
}

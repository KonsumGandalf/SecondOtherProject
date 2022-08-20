import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // public newServerName = '';
    // public newServerContent = '';
    @ViewChild('serverContent', {static: true}) serverContentInput;

    constructor() {
    }

    ngOnInit(): void {
    }

    onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
        console.log(this.serverContentInput);
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }


    onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
        this.bluePrintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }



}

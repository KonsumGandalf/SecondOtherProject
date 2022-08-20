import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    evenElements = [];
    oddElements = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    onEvenAdded(data: { interval: number }) {
        this.evenElements.push({
            interval: data.interval,
        });
    }

    onOddAdded(data: { interval: number }) {
        this.oddElements.push({
            interval: data.interval,
        });
    }


}

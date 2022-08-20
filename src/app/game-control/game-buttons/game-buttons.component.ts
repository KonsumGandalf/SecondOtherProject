import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-buttons',
    templateUrl: './game-buttons.component.html',
    styleUrls: ['./game-buttons.component.css']
})
export class GameButtonsComponent implements OnInit {
    @Output() evenState = new EventEmitter<{ interval: number }>();
    @Output() oddState = new EventEmitter<{ interval: number }>();
    interval = 0;
    gameInterval;

    constructor() {
    }

    ngOnInit(): void {
    }

    handleGame(): void {
        this.interval += 1;
        if (this.interval % 2 === 0) {
            this.evenState.emit({
                interval: this.interval,
            });
        } else {
            this.oddState.emit({
                interval: this.interval,
            });
        }
        console.log(this.interval);
    }

    onStartGame(): void {
        this.gameInterval = setInterval(() => this.handleGame(), 1000);
    }

    onStopGame(): void {
        clearInterval(this.gameInterval);
    }

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [{ type: 'server', name: 'Testserver', content: 'Test' }];

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
        console.log(serverData);
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent,
        });
    }

    onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
            type: 'blueprint',
            name: serverData.serverName,
            content: serverData.serverContent,
        });
    }

    onChangeElement() {
        this.serverElements[0].name = 'This Element changed';
    }

    onDestroyFirstElement() {
        this.serverElements.splice(0, 1);
    }

}

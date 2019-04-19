import { Component, HostListener } from '@angular/core';
import { merge, of, fromEvent, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  online: Observable<boolean>;
  isonline: boolean;
  display: string;

  constructor() {
    this.display = 'none';
    this.online = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );

    /**
     * subscribe to the online observable
     * if online return true, reinitialize socket
     * else set isonline to false
     */
    this.online.subscribe(online => {
      if (online) {
        this.isonline = true;
      } else {
        this.isonline = false;
      }
    });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll') scroll() {
    if (pageYOffset > 150) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }
}


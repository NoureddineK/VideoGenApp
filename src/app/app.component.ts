import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'VideoGenApp';
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) { }


}

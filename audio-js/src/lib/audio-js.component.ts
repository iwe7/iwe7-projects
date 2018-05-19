import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AudioJsService } from './audio-js.service';
declare const audiojs: any;
@Component({
  selector: 'audio',
  templateUrl: './audio-js.component.html',
  styleUrls: ['./audio-js.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AudioJsComponent implements OnInit {

  constructor(public audio: AudioJsService) { }

  ngOnInit() {
    this.audio.load().subscribe(res=>{
      audiojs.events.ready(function() {
        var as = audiojs.createAll();
      });
    });
  }

}

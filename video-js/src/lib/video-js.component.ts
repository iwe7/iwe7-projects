import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input
} from "@angular/core";
import { VideoJsService } from "./video-js.service";
declare const videojs: any;
@Component({
  selector: "video-js",
  templateUrl: "./video-js.component.html",
  styleUrls: ["./video-js.component.scss"]
})
export class VideoJsComponent implements OnInit, AfterViewInit {
  @Input() option: any = {};
  @Input() autoplay: boolean = false;
  @Input() controls: boolean = true;
  @Input() height: string | number;
  @Input() loop: boolean = false;
  @Input() muted: boolean = false;
  @Input() poster: string = "//vjs.zencdn.net/v/oceans.png";
  @Input() preload: string = "auto";
  @Input() auto: string = "true";
  @Input() src: string = "";
  @Input() width: string | number;

  @Input() aspectRatio: string = "16:9";
  @Input() autoSetup: boolean = false;
  @Input() children: any;
  @Input() fluid: boolean = false;
  @Input() inactivityTimeout: number;
  @Input() language: string = "en";

  @Input() isFull: boolean = false;

  @Input() fill: boolean = false;

  @Input()
  sources: any[] = [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    },
    {
      src: "//vjs.zencdn.net/v/oceans.webm",
      type: "video/webm"
    },
    {
      src: "//vjs.zencdn.net/v/oceans.ogv",
      type: "video/ogg"
    }
  ];
  instance: any;
  @ViewChild("video") videoRef: ElementRef;
  constructor(public video: VideoJsService, public ele: ElementRef) {}

  ngOnInit() {
    if (this.isFull) {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
      this.aspectRatio = `${this.width}:${this.height}`;
    } else {
      this.width = this.ele.nativeElement.clientWidth;
      this.height = this.ele.nativeElement.clientHeight;
      this.aspectRatio = `${this.width}:${this.height}`;
    }
  }

  ngAfterViewInit() {
    this.video.load().subscribe(res => {
      this.instance = videojs(
        this.videoRef.nativeElement,
        {
          width: this.width,
          height: this.height
        },
        () => {
          this.instance.play();
          console.dir(this.instance);
        }
      );
    });
  }
}

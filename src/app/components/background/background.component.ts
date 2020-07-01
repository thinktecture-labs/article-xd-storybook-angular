import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'labs-background',
  templateUrl: 'background.component.html',
  styleUrls: ['background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent implements AfterViewInit{
  @Input()
  source: string;
  @ViewChild('video', {static: false})
  video: ElementRef;

  ngAfterViewInit(): void {
    const video = this.video.nativeElement as HTMLVideoElement;
    video.playbackRate = 0.5;
  }
}

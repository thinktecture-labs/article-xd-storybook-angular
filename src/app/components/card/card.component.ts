import {ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DomSanitizer} from '@angular/platform-browser';

export enum State {
  Visible = 'Visible',
  Hidden = 'Hidden'
}

@Component({
  selector: 'labs-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state(State.Hidden, style({
        height: 0,
      })),
      state(State.Visible, style({
        height: '*',
      })),
      transition(`${State.Visible} => ${State.Hidden}`, [animate('.2s .2s ease-in-out')]),
      transition(`${State.Hidden} => ${State.Visible}`, [animate('.2s ease-in-out')]),
    ]),
    trigger('fadeInOut', [
      state(State.Hidden, style({
        opacity: 0,
      })),
      state(State.Visible, style({
        opacity: 1,
      })),
      transition(`${State.Visible} => ${State.Hidden}`, [animate('.2s ease-in-out')]),
      transition(`${State.Hidden} => ${State.Visible}`, [animate('.2s .2s ease-in-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  show: boolean;

  @Input()
  topRightCornerSize?: number;
  @Input()
  topLeftCornerSize?: number;

  get state() {
    return this.show ? State.Visible : State.Hidden;
  }

  constructor(private domSanitizer: DomSanitizer, public readonly elementRef: ElementRef) {
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  imports: [],
  templateUrl: './chatMessages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent {
  @Input({required: true}) text!: string;

}

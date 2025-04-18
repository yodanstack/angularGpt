import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessagesComponent } from '../../components/chat-bubbles/chatMessages/chatMessages.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ortography-page',
  imports: [CommonModule, ChatMessagesComponent],
  templateUrl: './ortographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtographyPageComponent { }

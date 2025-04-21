import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChatMessagesComponent } from '@components/chat-bubbles/chatMessages/chatMessages.component';
import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage.component';
import { TextMessageBoxSelectComponent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { TextMessagesBoxComponent } from '@components/text-boxes/textMessagesBox/textMessagesBox.component';
import { TextMessageBoxFileComponent, TextMessageEvent } from '@components/textMessageBoxFile/textMessageBoxFile.component';
import { TypingLoaderComponent } from '@components/typingLoader/typingLoader.component';


@Component({
  selector: 'app-ortography-page',
  imports: [
    CommonModule,
    ChatMessagesComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessagesBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent],
  templateUrl: './ortographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtographyPageComponent {
  hendleMessages(promt: string){

  }

  hendleMessagesFile({prompt, file}: TextMessageEvent){

  }

  hendleMessagesWhitSelect(event: TextMessageEvent){

  }
}

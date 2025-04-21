import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-typing-loader',
  imports: [CommonModule],
  template: `
  <div class="typing">
  <span class="circle scaling"></span>
  <span class="circle scaling"></span>
  <span class="circle scaling"></span>
</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './typingLoader.component.css'
})
export class TypingLoaderComponent { }

import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TextMessageEvent{
  file: File
  prompt?: string | null;
}

@Component({
  selector: 'app-text-message-box-file',
  imports: [ReactiveFormsModule],
  templateUrl: './textMessageBoxFile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onMessage = new EventEmitter<TextMessageEvent>();


  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required]
  });

  public file: File | undefined;

  hanldeSelectedFile(event: any){
    const file =  event.target.files.item(0);
    this.form.controls.file.setValue(file);
  }

  hendleSubmit(){
    if (this.form.invalid) return;

    const {prompt, file} = this.form.value;

    this.onMessage.emit({prompt, file: file!});
    this.form.reset();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbtn',
  template: `
    <div class="chtbtn fixed-bottom" routerLink="/chat" style="">
      <button type="button" class="btn btn-dark pmd-btn-fab pmd-ripple-effect pmd-btn-raised"><i class="bi bi-chat-right-text-fill"></i></button>
    </div>
  `,
  styles: [
  ]
})
export class ChatbtnComponent {

}

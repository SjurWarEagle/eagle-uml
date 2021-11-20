import {Injectable, OnDestroy} from '@angular/core';
import axios from "axios";
import {environment} from "../../environments/environment";
import {DataHolderService} from "./data-holder.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RendererService implements OnDestroy {
  private textSub: Subscription;

  public ngOnDestroy(): void {
    if (this.textSub) {
      this.textSub.unsubscribe();
    }
  }

  constructor(private dataHolderService: DataHolderService) {

    this.textSub = this.dataHolderService.plantUmlText.subscribe(text => {
      this.renderText(text);
    });
  }

  public async renderText(text: string): Promise<void> {
    const data = {
      "text": text
    };

    try {
      const rc = await axios.post(environment.plantUmlServer + 'plantuml/v1/render', data);
      this.dataHolderService.lastRenderedImageBase64.next(rc.data);
      this.dataHolderService.lastError.next("");
    } catch (exception) {
      console.log('exception', exception);
      this.dataHolderService.lastError.next("" + exception);
    }
  }
}

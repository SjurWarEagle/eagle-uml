import {Component, OnDestroy, OnInit} from '@angular/core';
import {RendererService} from "../../service/renderer.service";
import {DataHolderService} from "../../service/data-holder.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  public text: string = "";
  private textSubscription: Subscription | undefined;

  constructor(public dataHolderService: DataHolderService) {
  }

  public async ngOnInit(): Promise<void> {
    this.textSubscription = this.dataHolderService.plantUmlText.subscribe(text => {
      this.text = text;
    })
    await this.updateImage();
  }

  public async updateImage(): Promise<void> {
    this.dataHolderService.plantUmlText.next(this.text);
  }

  ngOnDestroy(): void {
    if (this.textSubscription) {
      this.textSubscription.unsubscribe();
    }
  }

}

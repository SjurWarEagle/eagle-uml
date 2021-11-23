import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataHolderService} from "../../service/data-holder.service";
import {Subscription} from "rxjs";
import {AceConfigInterface} from "ngx-ace-wrapper/lib/ace.interfaces";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  public text: string = "";
  private textSubscription: Subscription | undefined;
  public config: AceConfigInterface = {
    autoScrollEditorIntoView: true,
    showInvisibles: true,
    fontSize: 16,
    highlightActiveLine: true,

  };

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

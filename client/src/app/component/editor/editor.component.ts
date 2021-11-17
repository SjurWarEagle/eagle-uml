import {Component, OnInit} from '@angular/core';
import {RendererService} from "../../service/renderer.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public text: string = "@startuml\n\n@enduml";

  constructor(private rendererService: RendererService) {
  }

  public ngOnInit(): void {
  }

  public async updateImage(): Promise<void> {
    await this.rendererService.renderText(this.text);
  }

}

import {Component, OnInit} from '@angular/core';
import {DataHolderService} from "../../service/data-holder.service";
import {RendererService} from "../../service/renderer.service";

@Component({
  selector: 'app-plant-uml-renderer-display',
  templateUrl: './plant-uml-renderer-display.component.html',
  styleUrls: ['./plant-uml-renderer-display.component.scss']
})
export class PlantUmlRendererDisplayComponent implements OnInit {
  public imageBase64: string = "";

  constructor(public dataHolderService: DataHolderService,
              public rendererService: RendererService) {
    // public rendererService: RendererService is needed so that it is loaded and the subscription is triggered
  }

  ngOnInit(): void {
    this.dataHolderService.lastRenderedImageBase64.subscribe(image => {
      this.imageBase64 = image;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {RendererService} from "../../service/renderer.service";

@Component({
  selector: 'app-plant-uml-renderer-display',
  templateUrl: './plant-uml-renderer-display.component.html',
  styleUrls: ['./plant-uml-renderer-display.component.scss']
})
export class PlantUmlRendererDisplayComponent implements OnInit {
  public imageBase64: string="";

  constructor(public rendererService:RendererService) { }

  ngOnInit(): void {
    this.rendererService.lastRenderedImageBase64.subscribe(image => {
      this.imageBase64 = image;
    })
  }

}

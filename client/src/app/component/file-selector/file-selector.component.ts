import {Component, OnInit} from '@angular/core';
import {DataHolderService} from "../../service/data-holder.service";
import {FileService} from "../../service/file.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})
export class FileSelectorComponent implements OnInit {
  public selectedFile: string = 'demo.plantuml'
  public availableFiles: string [] = [];
  public files = new FormControl();

  constructor(private dataHolderService: DataHolderService,
              private fileService: FileService
  ) {
  }

  public async ngOnInit(): Promise<void> {
    this.availableFiles = await this.fileService.getAllFiles();
  }

  public async load(): Promise<void> {
    await this.fileService.loadFile(this.selectedFile);
  }

  public async selectFile(event:any): Promise<void> {
    this.selectedFile = event.value;
    await this.load();
  }

  public async save(): Promise<void> {
    await this.fileService.save(this.selectedFile, this.dataHolderService.plantUmlText.value);
  }

}

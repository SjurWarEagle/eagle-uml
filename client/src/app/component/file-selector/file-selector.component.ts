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
  public selectedFile: string = '';
  public availableFiles: string [] = [];
  public files = new FormControl();

  constructor(public dataHolderService: DataHolderService,
              private fileService: FileService
  ) {
  }

  public async updateFilename(file: string): Promise<void> {
    this.dataHolderService.selectedFile.next(file);
  }

  public ngOnInit(): void {
    this.fileService.getAllFiles().then(rc => {
      this.availableFiles = rc;
    })
    this.selectedFile = this.dataHolderService.selectedFile.value;
    this.dataHolderService.selectedFile.subscribe((file) => {
      this.selectedFile = file;
    })
  }

  public async load(): Promise<void> {
    await this.fileService.loadFile(this.dataHolderService.selectedFile.value);
  }

  public async selectFile(event: any): Promise<void> {
    this.dataHolderService.selectedFile.next(event.value);
    await this.load();
  }

  public async save(): Promise<void> {
    await this.fileService.save(this.dataHolderService.selectedFile.value, this.dataHolderService.plantUmlText.value);
    this.availableFiles = await this.fileService.getAllFiles();
  }

}

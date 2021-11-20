import {Injectable} from '@angular/core';
import axios from "axios";
import {environment} from "../../environments/environment";
import {DataHolderService} from "./data-holder.service";
import {WriteFileRequest} from "../types/write-file-request";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private dataHolderService: DataHolderService) {
  }

  public async getAllFiles(): Promise<string[]> {
    const rc = await axios.get(environment.fileServer + 'io/v1/directory/listAll?bucket=plantuml')
    return rc.data.files;
  }

  public async loadFile(fileName: string): Promise<void> {
    // console.log('loadFile', fileName);
    const rc = await axios.get(environment.fileServer + 'io/v1/files/read?bucket=plantuml&file=' + fileName)
    this.dataHolderService.plantUmlText.next(rc.data);
//    console.log('rc', rc);
  }

  public async save(fileName: string, content: string) {
    const data: WriteFileRequest = new WriteFileRequest();
    data.bucket = 'plantuml';
    data.fileName = fileName;
    data.content = content;
    const rc = await axios.post(environment.fileServer + 'io/v1/files/write', data)
//    console.log('rc', rc);
  }
}

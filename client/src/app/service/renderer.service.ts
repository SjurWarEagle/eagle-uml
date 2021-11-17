import {Injectable} from '@angular/core';
import axios from "axios";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RendererService {
  public lastRenderedImageBase64: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public lastError: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() {
  }

  public async renderText(text: string): Promise<void> {
    const data = {
      "text": text
    };
    try {
      const rc = await axios.post('http://localhost:3000/plantuml/v1/render', data);
      this.lastRenderedImageBase64.next(rc.data);
      this.lastError.next("");
    }catch (e){
      console.log('e',e);
      this.lastError.next(""+e);
    }
  }
}

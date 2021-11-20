import {Injectable} from '@angular/core';
import axios from "axios";
import {BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  public lastRenderedImageBase64: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public lastError: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public plantUmlText: BehaviorSubject<string> = new BehaviorSubject<string>("@startuml\n\n  A->B\n  B->C\n  A<--C\n\n@enduml");

  constructor() {
  }

}

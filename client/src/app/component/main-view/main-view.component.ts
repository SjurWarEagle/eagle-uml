import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FileService} from "../../service/file.service";
import {map} from "rxjs";
import {DataHolderService} from "../../service/data-holder.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fileService: FileService,
              private dataHolderService: DataHolderService
  ) {
    this.route.queryParamMap
      .subscribe((params) => {
          const file = params.get("file");
          dataHolderService.selectedFile.next(file!);
        }
      );
  }

  ngOnInit(): void {
  }

}

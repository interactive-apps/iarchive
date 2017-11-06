import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilitiesService} from "../../services/utilities.service";
import {HttpProviderService} from "../../services/http-provider.service";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() contentToViewGrid;
  @Output() viewFile = new EventEmitter();
  @Output() editFile = new EventEmitter();
  @Output() shareSettings = new EventEmitter();

  icon: string;

  constructor(private utilService: UtilitiesService, private httpProvider:HttpProviderService) { }

  ngOnInit() {
  }

  viewOfResource(content){
    this.viewFile.emit(content);

  }



  getFileIcon(extension){
    let link = this.utilService.getResourceIcon(extension);
    return link;
  }

  doShareSettings(content){
    this.shareSettings.emit(content)
  }
  editResource(file){
    //this.doEdit = true;
    this.editFile.emit(file);
  }

  removeResource(file){
    this.httpProvider.removeFileFromServer(file).subscribe(response=>{
      console.log("worekd "+response)
    })
  }


}

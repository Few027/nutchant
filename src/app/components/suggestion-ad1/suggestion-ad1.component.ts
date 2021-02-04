import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiFormService } from 'src/app/services/apis/api-form.service';
import { ReqSuggestionFrom, ResSuggestionFrom } from 'src/app/services/interfaces/api-form-interface';
declare var $: any;


@Component({
  selector: 'app-suggestion-ad1',
  templateUrl: './suggestion-ad1.component.html',
  styleUrls: ['./suggestion-ad1.component.scss']
})
export class SuggestionAd1Component implements OnInit {
  SuggestionFromCreate = {
    topic: '',
    project: '',
    particulars: '',
    image: '',
    idCustomer: '',
  };
  model: NgbDateStruct;
  page: 10;
  url1 = 'src/assets/imgtest';

  suggestionDataRes: ResSuggestionFrom;
  constructor(private api: ApiFormService, private http: HttpClient) { }

  openModel() {
    $('#exampleModal').modal('show');
  }

  openModel2() {
    $('#exampleModal2').modal('show');
  }
  ngOnInit(): void {
  }

  pullData() {
    this.SuggestionFromCreate.image = $('#img1').val();
  }
  createSuggestionFrom() {
    const body: ReqSuggestionFrom = {
      topic: this.SuggestionFromCreate.topic,
      project: this.SuggestionFromCreate.project,
      particulars: this.SuggestionFromCreate.particulars,
      image: this.SuggestionFromCreate.image,
      idCustomer: this.SuggestionFromCreate.idCustomer
    };
    this.api.suggestionFromCreate(body).subscribe(
      (res) => {
        this.SuggestionFromCreate = res;
      },
      (err) => {
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isSuccess: boolean = false;
  isSubmitted: boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.isSubmitted = true;

    if (form.valid) {
      form.value['type'] = 'contact';
      this.http
        .post(environment.API_URL + '/forms', form.value)
        .subscribe((res) => {
          this.isSuccess = true;
    this.isSubmitted = false;
          form.reset();
          setTimeout(() => {
            this.isSuccess = false;
          }, 5000);
        });
    }
  }
}


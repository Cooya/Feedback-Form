import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from './services/post.service'; 

@Component({
	selector: 'feedback-form',
	template:
	`<form [formGroup]="feedback" (ngSubmit)="submit($event)">
		<fieldset>
			<div class="form-group">
				<label for="nameInput">Name</label>
				<input formControlName="name" type="text" class="form-control" id="nameInput" placeholder="Your name">
			</div>
			<div class="form-group">
				<label for="lastNameInput">Last name</label>
				<input formControlName="lastName" type="text" class="form-control" id="lastNameInput" placeholder="Your last name">
			</div>
			<div class="form-group">
				<label for="emailInput">Email</label>
				<input formControlName="email" type="email" class="form-control" id="emailInput" placeholder="Your email address">
			</div>
			<div class="form-group">
				<label for="phoneInput">Phone number</label>
				<input formControlName="phone" type="tel" class="form-control" id="phoneInput" placeholder="Your phone number">
			</div>
			<div class="form-group">
				<label for="descriptionText">Description</label>
				<textarea formControlName="description" class="form-control" rows="5" id="descriptionText" placeholder="Description"></textarea>
			</div>
			<div class="form-group text-center">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
			<div class="alert alert-info" role="alert" *ngIf="submissionStatus == 0">
				Sending in progress...
			</div>
			<div class="alert alert-success" role="alert" *ngIf="submissionStatus == 1">
				<strong>Success !</strong> Your feedback has been sent successfully.
			</div>
			<div class="alert alert-danger" role="alert" *ngIf="submissionStatus == 2">
				<strong>Error !</strong> An error has occurred during the sending of your feedback.
			</div>
			<div class="alert alert-danger" role="alert" *ngIf="submissionStatus == 3">
				<strong>Error !</strong> Some informations are missing for sending the feedback.
			</div>
		</fieldset>
	</form>`,
	providers: [PostService]
})
export class FeedbackFormComponent {
	private feedback = this.fb.group({
		name: ["", Validators.required],
		lastName: ["", Validators.required],
		email: ["", Validators.required],
		phone: ["", Validators.required],
		description: ["", Validators.required]
	});
	private submissionStatus: number;

	constructor(private fb: FormBuilder, private ps: PostService) {
		this.submissionStatus = -1;
	}

	submit(event: any) {
		if(this.feedback.status == "VALID") {
			this.submissionStatus = 0;
			this.ps.postFeedback(this.feedback.value).subscribe(res => {
				if(res.success) {
					this.submissionStatus = 1;
					this.feedback.reset();
				}
				else
					this.submissionStatus = 2;
			});
		}
		else
			this.submissionStatus = 3;
	}
}
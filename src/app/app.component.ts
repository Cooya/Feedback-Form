import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template:
		`<div class="container">
			<div class="row justify-content-center">
				<h1>Feedback form</h1>
			</div>
			<div class="row justify-content-center">
				<feedback-form class="col-6"></feedback-form>
			</div>
		</div>`
})
export class AppComponent { }
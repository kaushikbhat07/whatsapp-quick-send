import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class FormComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			phone: '',
			message: ''
        }
	}

    onSubmit(e) {
		return <Redirect to='/home' />
    }	

	render()
	{
		return (
			<div className="form-wrapper">
				<form class="needs-validation" noValidate onSubmit={this.onSubmit}>
					<div class="form-row">
						<div class="col-md-6 mb-3">
							<label for="validationCustom01">Phone Number</label>

							<input type="text" class="form-control" id="validationCustom01" required />
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>
						<div class="col-md-6 mb-3">
							<label for="validationCustom02">Message</label>
							<input type="text" class="form-control" id="validationCustom02" required />
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>
					</div>
					<button class="btn btn-primary" type="submit">Submit form</button>
				</form>
			</div>
		);
	}
}

export default FormComponent;
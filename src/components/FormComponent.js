import React, { Component } from 'react';

class FormComponent extends Component {

	constructor(props) {
		super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.handleClick = this.handleClick.bind(this);

		this.state = {
			phone: '',
			message: ''
		}
	}

	onChangePhone(e) {
        this.setState({ phone: e.target.value })
	}
	
	onChangeName(e) {
        this.setState({ message: e.target.value })
	}
		
	handleClick(e) {
		e.preventDefault();
		if (window.screen.width > 768)
			window.location.href = "https://web.whatsapp.com/send?phone=91" + this.state.phone + "&app_absent=0";
		else
			window.location.href = "https://wa.me/91" + this.state.phone;
	}

	render() {
		
		return (
			<div className="form-wrapper">
				<form class="needs-validation" noValidate onSubmit={this.handleClick}>
					<div class="form-row">
						<div class="col-md-6 mb-3">
							<label for="validationCustom01">Phone Number</label>

							<input type="text" class="form-control" id="validationCustom01" required onChange={this.onChangePhone} />
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>
						<div class="col-md-6 mb-3">
							<label for="validationCustom02">Message</label>
							<input type="text" class="form-control" id="validationCustom02" required onChange={this.onChangeName} />
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>
					</div>
					<button type="submit" class="btn btn-primary">SEND</button>
				</form>
			</div>
			
		);
	}
}

export default FormComponent;
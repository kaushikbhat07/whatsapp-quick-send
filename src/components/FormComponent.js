import React, { Component } from 'react';
import './FormComponent.css';

class FormComponent extends Component {

	constructor(props) {
		super(props);

		this.onChangeCountryCode = this.onChangeCountryCode.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			phone: '',
			countryCode: 91
		}
	}

	onChangeCountryCode(e) {
		this.setState({ countryCode: e.target.value })
	}

	onChangePhone(e) {
		this.setState({ phone: e.target.value })
	}

	handleClick(e) {
		e.preventDefault();
		if (window.screen.width > 768)
			window.location.href = "https://web.whatsapp.com/send?phone=" + this.state.countryCode + "" + this.state.phone + "&app_absent=0";
		else
			window.location.href = "https://wa.me/" + this.state.countryCode + "" + this.state.phone;
	}

	render() {

		return (
			<div className="col-12">
				<div className="form-wrapper">
					<div className="text-center">
						<h3 className="sub-heading mb-5">WhatsApp Quick Chat</h3>
					</div>
				
					<form className="needs-validation" noValidate onSubmit={this.handleClick}>
						<div class="form-row">
							<div class="col-12 mb-3">
								<input type="number" class="form-control" id="countryCode" required onChange={this.onChangeCountryCode} placeholder="Country Code (without '+')" validate value={this.state.countryCode} />
								<div class="valid-feedback">
									Looks good!
							</div>
								<div class="invalid-feedback">
									Invalid input!
							</div>
							</div>
						</div>
						<div class="form-row">
							<div class="col-12 mb-3">
								{/* <label for="validationCustom02">Number</label> */}
								<input type="number" class="form-control" id="phoneNumber" placeholder="Number" required onChange={this.onChangePhone} validate />
								<div class="valid-feedback">
									Looks good!
							</div>
								<div class="invalid-feedback">
									Invalid input!
							</div>
							</div>
						</div>
						<div className="btn-wrapper">
							<button type="submit" class="btn-send">
								SEND&nbsp;
							<i class="fa fa-paper-plane"></i>
							</button>
						</div>
					</form>
				</div>
			</div>

		);
	}
}

export default FormComponent;
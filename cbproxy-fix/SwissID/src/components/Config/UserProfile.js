import React, { Component } from 'react';
import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';
import CHReceive from '../alerts/CHReceive';
import { FormattedMessage } from 'react-intl';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {

  }
  render() { 
    return ( 
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            <NavbarTop />
            <Navbar />
            <CHReceive
              description={
                <FormattedMessage
                  id="alert.profile.created"
                  defaultMessage="XYZ Account with IBAN CH99 2222 4415 5036 7150 5 created."
                />
              }
              mode={0}
            />
          </div>
        </div>
        <div className="row profile">
          <div className="col-md-6 account-details">
            <h3>
              <FormattedMessage
                id="profile.account.details"
                defaultMessage="Account Details"
              />
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.chf.account"
                    defaultMessage="CHF Account at XYZ"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="IBAN CH99 2222 4415 5036 7150 5"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.account.status"
                    defaultMessage="Account Status"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="waiting for verification | active | suspended | retired"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.xyz.product"
                    defaultMessage="XYZ Product:"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="XYZ basic account"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.whitelisted.bank"
                    defaultMessage="Whitelisted bank account for in/out transfers"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="my ABC bank account | CH33 0078 1015 5036 7150 3"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.name"
                    defaultMessage="Name"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Joe F. Doe"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>OpenID</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="<openID URL>"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>eID Level</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="LOT2 (VSB3)"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.address"
                    defaultMessage="Address"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Himmelstürli 7, 8002 Züich, Switzerland"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.language"
                    defaultMessage="Language given by SwissID"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="German"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.choose.lang"
                    defaultMessage="Choose a language for this user interface:"
                  />
                </label>
                <select className="form-control">
                  <option>German</option>
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.gender"
                    defaultMessage="Gender"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="male"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.age"
                    defaultMessage="Age"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="37"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.nation"
                    defaultMessage="Nationality"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Swiss"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.email"
                    defaultMessage="Email Address"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="joe.doe@gmail.com"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.mobile.number"
                    defaultMessage="Mobile Phone Number"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="+41 79 907 07 08"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.whitelisted.bank"
                    defaultMessage="Whitelisted bank account for in/out transfers"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="my ABC bank account | CH33 0078 1015 5036 7150 3"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.transfer.notification"
                    defaultMessage="Send transfer notification"
                  />
                </label>
                <div>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked
                    />
                    <FormattedMessage
                      id="profile.send.email"
                      defaultMessage="send E-Mail (no fees apply)"
                    />
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked
                    />
                    <FormattedMessage
                      id="profile.send.sms"
                      defaultMessage="send SMS (fee 0.20 CHF per SMS)"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="btn-default account-cancel"
                >
                  <FormattedMessage
                    id="profile.cancel"
                    defaultMessage="Canel"
                  />
                </button>
                  &nbsp;&nbsp;
                <button
                  type="submit"
                  className="btn-default account-save-changes"
                >
                  <FormattedMessage
                    id="profile.deactivate"
                    defaultMessage="De-activate Account"
                  />
                </button>
              </div>
            </form>
            <p className="close-account">
              <FormattedMessage
                id="profile.terminate"
                defaultMessage="Want to suspend or terminate this account?"
              />
            &nbsp;
              <a href="#"  className="link-color">
                <FormattedMessage
                  id="profile.click"
                  defaultMessage="Click here"
                />
              </a>
              &nbsp;
              <FormattedMessage
                id="profile.not.implement"
                defaultMessage="(not implemented yet)"
              />
            </p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default UserProfile;
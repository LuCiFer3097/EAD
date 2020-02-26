import React, { Fragment, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBInput,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { Redirect } from "react-router-dom";
import { loginFarmer } from "../../actions/auth";

const Login = ({ loginFarmer, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { password, email } = formData;

  //if we had class we had something like this
  // state = {
  //   formData:{

  //   }
  // }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log(formData);

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Success submit");
    console.log(email, password);
    loginFarmer(email, password);
  };

  //redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <Fragment>
      <SectionContainer header="" noBorder>
        <MDBRow className="d-flex flex-row justify-content-center row">
          <MDBCol md="7" lg="4">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <form onSubmit={e => onSubmit(e)}>
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>Sign in</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="Your email"
                    group
                    name="email"
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => onChange(e)}
                  />

                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    name="password"
                    validate
                    containerClass="mb-0"
                    onChange={e => onChange(e)}
                  />

                  <p className="font-small blue-text d-flex justify-content-end pb-3">
                    Forgot
                    <a href="#!" className="blue-text ml-1">
                      Password?
                    </a>
                  </p>
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="submit"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                    >
                      Sign in
                    </MDBBtn>
                    {/* <div className="text-center">
                      <MDBBtn type="submit">Login</MDBBtn>
                    </div> */}
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                    or Sign in with:
                  </p>
                  <div className="row my-3 d-flex justify-content-center">
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="blue-text text-center"
                      />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                    >
                      <MDBIcon fab icon="twitter" className="blue-text" />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="z-depth-1a"
                    >
                      <MDBIcon fab icon="google-plus-g" className="blue-text" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="#!" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </SectionContainer>
    </Fragment>
  );
};

loginFarmer.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loginFarmer: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginFarmer }, null, {
  pure: false
})(Login);

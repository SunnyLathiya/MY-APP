import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;
       
       setData((prevalue) => {
        return{
          ...prevalue,
          [name]: value,
        }
       })
  }

  const formSubmit = (e) => {
        e.preventDefault();
        alert(
          `My name is ${data.fullname}`
        )
  }
  return (
    <>
    <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-10 mx-auto">
      <div classNameName="my-5">
        <h1 classNameName="text-center">Contact Us</h1>
        </div>
        <div classNameName="container contact_div">
          <div classNameName="row">
          <div classNameName="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Fullname"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone no.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="enter your mobile number"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="email id"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary">Submit Form</button>
              </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Contact;

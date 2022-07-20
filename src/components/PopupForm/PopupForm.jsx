import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./popForm.css";
function PopupForm({ setIsOpen }) {
  const initialValues = {
    name: "",
    email: "",
    org:"",
    location:"",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit]= useState(false);

  const handleChange =(e)=>{
    // console.log(e.target.value);
    const{name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    // console.log(formValues);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values)=>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "name is required";
      } else if (values.name.length < 3) {
        errors.name = "Name must be longer than 2 letters";
      }
      if (!values.email) {
        errors.email = "email is required";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format";
      }
      return errors;
  };

  return (
    <>
  
      <div className="form-container">

        <span className="closeBtn" onClick={() => setIsOpen(false)}>
          <RiCloseLine
            style={{ marginBottom: "0", zIndex: "9999", color: "white" }}
            className="closeBtn"
          />
        </span>
        <p className="popup_header">Get a free quote</p>

        <div className="form_popup">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id=""
            className="name"
            placeholder="Name:"
            value={formValues.name}
            autoComplete="off"
            onChange={handleChange}
          />
            <p style={{color:"red", margin:"0",fontSize:".8rem"}}>{formErrors.name}</p>
          <input
            type="email"
            name="email"
            id=""
            className="email"
            placeholder="Email:"
            value={formValues.email}
            autoComplete="off"
            onChange={handleChange}
          />
            <p style={{color:"red" ,margin:"0",fontSize:".8rem"}}>{formErrors.email}</p>

          <div className="tel">
            <input
              type="text"
              name="org"
              id=""
              value={formValues.org}
              onChange={handleChange}
              className="org"
              placeholder="Your Organization Name"
              autoComplete="off"
            />
            <input
              type="text"
              name="location"
              id=""
              value={formValues.location}
              onChange={handleChange}
              className="location"
              placeholder="Your Location"
              autoComplete="off"
            />
          </div>
          {/* <input type="tel" name="country" id="" className='' placeholder="Country"/> */}
          <div className="tel"  >
            <select name="country" id="country"defaultValue={'DEFAULT'}>
            <option value="DEFAULT" selected disabled hidden>
              Your Country code
            </option>
              <option value="Nepal">Nepal +977</option>
              <option value="USA">USA +1</option>
              <option value="India">India +91</option>
              <option value="Germany">Germany +05</option>
            </select>
            <input
              type="number"
              name="phone"
              id=""
              className="phone"
              placeholder="Phone:"
              autoComplete="off"
            />
            <br />
          </div>

          <select name="country" id="selectService" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" selected disabled hidden>
              Select an Option
            </option>
            <option value="ios_dev">IOS App Development</option>
            <option value="andriod-dev">Andriod App development</option>
            <option value="web_dev">Web development</option>
            <option value="qa">Software Testing & Quality Assurance</option>
          </select>

          <textarea
            name=""
            id=""
            cols="20"
            rows="10"
            placeholder="Please tell us what you're looking for?"
            className="popup_textarea"
          >
            {" "}
          </textarea>
          <input
            type="file"
            name=""
            id="file"
            className="popup_file"
            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document "
          />
          <label htmlFor="file" className="popup_file_label">
            Choose a document
          </label>
          <button className="popup_submit">Submit</button>
      </form>

        </div>
      </div>
    </>
  );
}

export default PopupForm;

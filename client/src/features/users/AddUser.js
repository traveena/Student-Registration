import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { addUser } from "./APIcalls";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [values, setValues] = useState({});

  const handleAddUser = (e) => {
    setValues({ fname: "", lname:"", email: "",coursename:"", contactno:"", dob:""});
    console.log("====================================");
    console.log(values);
    console.log("====================================");


    const user = {...values}

    // axios.post(`http://localhost:5000/students`,values)
    // .then(res => {
    //   const persons = res.values;

    //   console.log(persons)
    // })
   
      addUser(
       user, dispatch
      )
   

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <WidgetTextfield
        label="First Name :"
        value={values.fname}
        onChange={(e) => setValues({ ...values, fname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student first name here" }}
      />
      <WidgetTextfield
        label="Last Name :"
        value={values.lname}
        onChange={(e) => setValues({ ...values, lname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student first name here" }}
      />
      <WidgetTextfield
        label="Email :"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter Student email here" }}
      />
       <WidgetTextfield
        label="Course Name"
        onChange={(e) => setValues({ ...values, coursename :e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Name here" }}
      />
       <WidgetTextfield
        label="Contact Number :"
        value={values.contactno}
        onChange={(e) => setValues({ ...values, contactno: e.target.value })}
        inputProps={{ type: "tel", placeholder: "Enter Student contact_no here" }}
      />
      <WidgetTextfield
        label="DOB :"
        value={values.dob}
        onChange={(e) => setValues({ ...values, dob: e.target.value })}
        inputProps={{ type: "date", placeholder: "Enter the Date Of Birth" }}
      />
      <WidgetButton onClick={handleAddUser}>Submit</WidgetButton>
    </div>
  );
};

export default AddUser;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [values, setValues] = useState({
    fname: "",
    lname:"",
    email: "",
    contact_no:"",
    age: ""

  });

  const handleAddUser = () => {
    setValues({ fname: "", lname:"", email: "", contact_no:"", age:""});

    console.log("====================================");
    console.log(values);
    console.log("====================================");

    dispatch(
      addUser({
        id: uuidv4(),
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        contact_no: values.contact_no,
        age:values.age
      })
    );

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
      <br />
      <WidgetTextfield
        label="Last Name :"
        value={values.lname}
        onChange={(e) => setValues({ ...values, lname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student first name here" }}
      />
       <br />
      <WidgetTextfield
        label="Email :"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter Student email here" }}
      />
       <br />
       <WidgetTextfield
        label="Contact Number :"
        value={values.contact_no}
        onChange={(e) => setValues({ ...values, contact_no: e.target.value })}
        inputProps={{ type: "tel", placeholder: "Enter Student contact_no here" }}
      />
       <br />
      <WidgetTextfield
        label="DOB :"
        value={values.age}
        onChange={(e) => setValues({ ...values, age: e.target.value })}
        inputProps={{ type: "date", placeholder: "Enter the age of student" }}
      />
      <WidgetButton onClick={handleAddUser}>Submit</WidgetButton>
    </div>
  );
};

export default AddUser;

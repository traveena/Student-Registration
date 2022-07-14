import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userSlice";

const UpdateUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const existingUser = users.filter((user) => user.id === params.id);
  const { fname, lname, email, contact_no, age } = existingUser[0];
  console.log("====================================");
  console.log(existingUser);
  console.log("====================================");
  const [values, setValues] = useState({
    fname,
    lname,
    email,
    contact_no,
    age,
  });

  const navigate = useNavigate();

  const handleUpdateUser = () => {
    setValues({fname: "", lname:"", email: "", contact_no:"", age:""});

    console.log("====================================");
    console.log(values);
    console.log("====================================");

    dispatch(
      updateUser({ id: params.id, fname: values.fname,lname: values.lname, email: values.email, contact_no:values.contact_no, age: values.age })
    );

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <WidgetTextfield
        label="First Name"
        value={values.fname}
        onChange={(e) => setValues({ ...values, fname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student fname here" }}
      />
       <WidgetTextfield
        label="Last Name"
        value={values.lname}
        onChange={(e) => setValues({ ...values, lname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student lname here" }}
      />     
      <WidgetTextfield
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter Student email here" }}
      />
      <WidgetTextfield
        label="Contact Number"
        value={values.contact_no}
        onChange={(e) => setValues({ ...values, contact_no: e.target.value })}
        inputProps={{ type: "tel", placeholder: "Enter Student contact_no here" }}
        />
      
      <WidgetTextfield
        label="age"
        value={values.age}
        onChange={(e) => setValues({ ...values, age: e.target.value })}
        inputProps={{ type: "date", placeholder: "How old are you" }}
      />
      <WidgetButton onClick={handleUpdateUser}>Update</WidgetButton>
    </div>
  );
};

export default UpdateUser;

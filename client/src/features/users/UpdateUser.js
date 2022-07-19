import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./APIcalls";


const UpdateUser = () => {
  
  const params = useParams();
  const dispatch = useDispatch();
  const {users} = useSelector((store) => store.users);
  console.log(users[0].sid);
   const existingUser = users.filter((users) => users.sid === Number(params.id));

   console.log(existingUser);
   
  const { fname, lname, email,coursename, contactno, dob } = existingUser[0];
  console.log("====================================");
  console.log(existingUser);
  console.log("====================================");
  const [values, setValues] = useState({
    fname,
    lname,
    email,
contactno,
coursename,
dob,

  });

  const navigate = useNavigate();

  const handleUpdateUser = () => {
    setValues({fname: "", lname:"", email: "",coursename:"", contactno:"", dob:""});
    console.log("====================================");
    console.log(values);
    console.log("====================================");

   // const response = publicRequest.put(`student/${params.id}`,values)
//console.log(response)
updateUser(params.id,values,dispatch)
  

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <WidgetTextfield
        label="First Name"
        name="fname"
        value={values.fname}
        onChange={(e) => setValues({ ...values, fname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student fname here" }}
      />
       <WidgetTextfield
        label="Last Name"
        name="lname"
        value={values.lname}
        onChange={(e) => setValues({ ...values, lname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Student lname here" }}
      />     
      <WidgetTextfield
        label="Email"
        name="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter Student email here" }}
      />
       <WidgetTextfield
        label="Course Name"
        name="coursename"
        value={values.coursename}
        onChange={(e) => setValues({ ...values, coursename:e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Name here" }}
      />
      <WidgetTextfield
        label="Contact Number"
        name="contactno"
        value={values.contactno}
        onChange={(e) => setValues({ ...values, contactno: e.target.value })}
        inputProps={{ type: "tel", placeholder: "Enter Student contact_no here" }}
        />
      
      <WidgetTextfield
        label="DOB"
        name="dob"
        value={values.dob}
        onChange={(e) => setValues({ ...values, dob: e.target.value })}
        inputProps={{ type: "date", placeholder: "Date of birth" }}
      />
      <WidgetButton onClick={handleUpdateUser} >Update</WidgetButton>
    </div>
  );
  
};

export default UpdateUser;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import WidgetButton from "../../components/WidgetButton";
import WidgetTextfield from "../../components/WidgetTextfield";
import { updateCourse } from "./APIcalls";

const UpdateCourse = () => {
   const params = useParams();
  const dispatch = useDispatch();
  const Courses = useSelector((store) => store.courses.courses);
  const existingUser = Courses.filter((Courses) => Courses.cid === Number(params.id));
  // console.log(existingUser)
  console.log(Courses)
  
  const navigate = useNavigate();



  const { coursename, description, duration} = existingUser[0];

  const [values, setValues] = useState({
    coursename,
    description,
    duration,
  });

  // console.log(values);
  const handleUpdateCourse = () => {
    // setValues({fname: "", lname:"", email: "",coursename:"", contactno:"", dob:""});
    console.log("====================================");
    console.log(values);
    console.log("====================================");
    // dispatch(
    //     updateCourse({ id: params.id, cname: values.cname,desc: values.desc})
    // );
    updateCourse(params.id,values,dispatch)
    navigate("/show-course");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
        <WidgetTextfield
        label="Course Name :"
        value={values.coursename}
        onChange={(e) => setValues({ ...values, coursename: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course name here" }}
      />
      <WidgetTextfield
       label="Description :"
       value={values.description}
       onChange={(e) => setValues({ ...values, description: e.target.value })}
       inputProps={{ type: "text", placeholder: "Enter Course Descripton" }}
     />     
      <WidgetTextfield
       label="Duration :"
       value={values.duration}
       onChange={(e) => setValues({ ...values, duration: e.target.value })}
       inputProps={{ type: "text", placeholder: "Enter Course Duration" }}
     />  
        <WidgetButton onClick={handleUpdateCourse} >Update</WidgetButton>
    </div>
  )
}

export default UpdateCourse

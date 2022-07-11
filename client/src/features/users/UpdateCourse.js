import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import WidgetButton from "../../components/WidgetButton";
import WidgetTextfield from "../../components/WidgetTextfield";
import { updateCourse } from "./courseSlice";

const UpdateCourse = () => {
   const params = useParams();
  const dispatch = useDispatch();
  const Courses = useSelector((store) => store.courses);
  const existingCourse = Courses.filter((course) => course.id === params.id);
  const { cname, desc } = existingCourse[0];
  console.log("====================================1");
  console.log(existingCourse);
  console.log("====================================");
  const [values, setValues] = useState({
    cname,
    desc,
  });

  
  const navigate = useNavigate();

  const handleUpdateCourse = () => {
    setValues({cname: "", desc:""});

    console.log("====================================");
    console.log(values);
    console.log("====================================");

    dispatch(
        updateCourse({ id: params.id, cname: values.cname,desc: values.desc})
    );

    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
        <WidgetTextfield
        label="Course Name :"
        value={values.cname}
        onChange={(e) => setValues({ ...values, cname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course name here" }}
      />
      <WidgetTextfield
       label="Description :"
       value={values.desc}
       onChange={(e) => setValues({ ...values, desc: e.target.value })}
       inputProps={{ type: "text", placeholder: "Enter Course Descripton" }}
     />     
        <WidgetButton onClick={handleUpdateCourse} >Update</WidgetButton>
    </div>
  )
}

export default UpdateCourse

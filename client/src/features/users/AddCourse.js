import React, { useState } from 'react'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { addCourses} from "./APIcalls";
import { v4 as uuidv4 } from "uuid";

const AddCourse = () => {
     const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({
      coursename: "",
      descripton:"",
      duration:"",

    });

    // console.log(values);

    const handleAddCourse = () =>{
      setValues({ coursename:"", descripton:"",duration:""});

      console.log("====================================");
      console.log(values);
      console.log("====================================");

      const course = {...values}
  
      // dispatch(
      //   add_Course({
      //     id: uuidv4(),
      //     cname: values.cname,
      //     desc: values.desc,
      //   })
      // );
      addCourses(course,dispatch);

        navigate("/show-course");


    }


  return (
    <div className="mt-10 max-w-xl mx-auto">
      <WidgetTextfield
        label="Course Name :"
        value={values.coursename}
        onChange={(e) => setValues({ ...values, coursename: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Name" }}
      />
       <br />
      <WidgetTextfield
        label="Course Description :"
         value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Description" }}
      />
         <br />
      <WidgetTextfield
        label="Course Duration :"
         value={values.duration}
        onChange={(e) => setValues({ ...values, duration: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Duration" }}
      />
    
      <WidgetButton onClick={handleAddCourse} >Submit</WidgetButton>
      </div>
  )
}

export default AddCourse

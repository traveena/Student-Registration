import React, { useState } from 'react'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import WidgetTextfield from "../../components/WidgetTextfield";
import WidgetButton from "../../components/WidgetButton";
import { add_Course} from "./courseSlice";
import { v4 as uuidv4 } from "uuid";

const AddCourse = () => {
     const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({
      cname: "",
      desc:"",
    });

    // console.log(values);

    const handleAddCourse = () =>{
      setValues({ cname:"", desc:""});

      console.log("====================================");
      console.log(values);
      console.log("====================================");
  
      dispatch(
        add_Course({
          id: uuidv4(),
          cname: values.cname,
          desc: values.desc,
        })
      );

        navigate("/");


    }


  return (
    <div className="mt-10 max-w-xl mx-auto">
      <WidgetTextfield
        label="Course Name :"
        value={values.cname}
        onChange={(e) => setValues({ ...values, cname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Name" }}
      />
       <br />
      <WidgetTextfield
        label="Course Description :"
         value={values.desc}
        onChange={(e) => setValues({ ...values, desc: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter Course Description" }}
      />
    
      <WidgetButton onClick={handleAddCourse} >Submit</WidgetButton>
      </div>
  )
}

export default AddCourse

import React, { useEffect } from "react";
import WidgetButton from "../../components/WidgetButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "./APIcalls";
import { getCourse } from "./APIcalls";
const UserList = () => {
  const dispatch = useDispatch();
const Courses = useSelector((store) => store.courses.courses);
// const history = useHistory();

  console.log("====================================");
  console.log(Courses);
  console.log("====================================");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get(`/courses`);
  //       console.log(res.data.data)
  //       // setusers(res.data.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, []);


  useEffect(() => {
    getCourse(dispatch);
  }, [dispatch]);

  // history.push("/show-course")

  const handleRemoveUser = (id) => {
   deleteCourse(id,dispatch)

   navigate("/");
  };

  const renderCard = () =>
  Courses.map((course) => (
      <div
        className="bg-green-200 p-5 flex items-center justify-between h-[12rem]"
        key={course.cid}
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">Course Name : {course.coursename}</h3>
          <span className="font-normal text-gray-600"><b>Course Description </b>: {course.description}</span>
          <br/>
          <span className="font-normal text-gray-600"><b>Course Duration </b>: {course.duration}</span>
        </div>
        <div className="flex gap-2">
          <Link to={`/edit-course/${course.cid}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Link>
          <button onClick={() => handleRemoveUser(course.cid)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/">
        <WidgetButton>Show Students</WidgetButton>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {Courses.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No Courses
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;

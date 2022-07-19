import React, { useEffect } from "react";
import WidgetButton from "../../components/WidgetButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./APIcalls";
import { getUser } from "./APIcalls";


const UserList = () => {
  const dispatch = useDispatch();
  const {users,isFetching} = useSelector((store) => store.users);
  //const {isFetching,error,users} = userState;
  console.log(users)
  // const [users, setusers ] = useState({})
  // const {user} = useSelector((state) => state.user);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get(`/students`);
  //       console.log(res.data.data)
  //       setusers(res.data.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, []);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);


  // console.log("====================================");
  // console.log(users);
  // console.log("====================================");


  const handleRemoveUser = (sid) => {
    deleteUser(sid,dispatch);
  };

  if (isFetching) {
    return <>LOADING</>
  }
  const renderCard = () =>
    users.map((user) => (
      <div
        className="bg-green-200 p-5 flex items-center justify-between h-[10rem]"
        key={user.sid}
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.fname} {user.lname}</h3>
          <span className="font-normal text-gray-600 text-base"><b>Gmail: </b>{user.email}</span>
          <p className="font-normal text-gray-600 text-base"><b>Course Name: </b>{user.coursename}</p>
          <p className="font-normal text-gray-600 text-base"><b>Contact No: </b>{user.contactno}</p>
          <p className="font-normal text-gray-600 text-base"><b>DOB: </b>{user.dob}</p>
        </div>
        <div className="flex gap-2">
          <Link to={`/edit-user/${user.sid}`}>
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
          <button onClick={() => handleRemoveUser(user.sid)}>
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
      <Link to="/add-user">
        <WidgetButton>Add Student</WidgetButton>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/add-course">
      <WidgetButton>Add Courses</WidgetButton>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/show-course">
      <WidgetButton>Show Courses</WidgetButton>
      </Link>
      
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No Students
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;

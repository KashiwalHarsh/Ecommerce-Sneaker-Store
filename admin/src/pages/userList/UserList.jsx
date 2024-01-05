import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import EditIcon from '@mui/icons-material/Edit';
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function UserList() {
  const [allUsers, setAllUsers] = useState([]);

  const handleDelete = (id) => {
    console.log(id)
  };
  useEffect(()=>{
    const getAllUsers= async()=>{
      try{
        const res = await userRequest.get("/users")
        setAllUsers(res.data)
      }catch(err){console.log(err)}
    }
    getAllUsers()
  },[])
  
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            <EditIcon className="productListEditDemo"/>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={allUsers}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

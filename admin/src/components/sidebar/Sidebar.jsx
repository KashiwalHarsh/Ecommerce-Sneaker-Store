import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/apiCalls";

export default function Sidebar() {
  const dispatch = useDispatch()
  const handleClick=()=>{
    Logout(dispatch)
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
                <AddBusinessIcon className="sidebarIcon" />
                Add New Product
              </li>
            </Link>
            <Link to="/login" className="link">
              <li className="sidebarListItem" onClick={handleClick}>
                <LogoutIcon className="sidebarIcon" />
                Logout
              </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
//*Logut not working, Logout API is wroking but some issue with frontend - we have to login using jugad once logout
//* also work on user section and delete faltu elements from the website as its done by my side
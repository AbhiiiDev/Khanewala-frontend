import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetUserRequest } from "@/api/MyUserApi";

const MobileMenu = () => {
  const { user, logout } = useAuth0();
    const{currentUser} =useGetUserRequest();

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <div className="flex gap-1 hover:text-orange-700">
        <CircleUserRound className=" text-orange-400" />
        <p className=" text-orange-600">{user?.name}</p>
      </div>
        <div>
          <Link
            to="/userProfile"
            className="font-bold text-orange-500 hover:bg-orange-200"
          >
            User Profile
          </Link>
        </div>
     {  currentUser?.role==='restaurant' ?  (  <div>  <Link to="/manageRestaurant" className="font-bold text-orange-500 hover:bg-orange-200">
           Manange Restaurant
          </Link>   </div>) :
          currentUser?.role==='customer' ?
(  <div><Link to="/partner-with-us" className="font-bold text-orange-500 hover:bg-orange-200">
           Partner with Us
          </Link> </div>): null
          }
          {  
          currentUser?.role==='admin' &&  (     
                <div>
             <Link to="/dashboard" className="font-bold text-orange-500 hover:bg-orange-200">
                     Dashboard
                    </Link> 
                  </div>
          )
          }
       { currentUser?.role==='customer' &&
        (<div>
          <Link
            to="/orders"
            className="font-bold text-orange-500 hover:bg-orange-200"
          >
            Orders
          </Link>
        </div>)}

        <div>
          <Button
          size="sm"
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-500"
          >
            Log Out
          </Button>
        </div>
      </div>
  );
};

export default MobileMenu;

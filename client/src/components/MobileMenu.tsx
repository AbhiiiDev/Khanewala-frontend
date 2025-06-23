import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileMenu = () => {
  const { user, logout } = useAuth0();

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
        <div>
          <Link
            to="/manageRestaurant"
            className="font-bold text-orange-500 hover:bg-orange-200"
          >
            Manange Restaurant
          </Link>
        </div>
        <div>
          <Link
            to="/orders"
            className="font-bold text-orange-500 hover:bg-orange-200"
          >
            Orders
          </Link>
        </div>

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

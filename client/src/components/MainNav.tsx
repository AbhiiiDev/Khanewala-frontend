
import { ShoppingCart } from 'lucide-react';
import UserMenu from './UserMenu';
import { Button } from './ui/button'
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from '@/app/hooks';
import { Link } from 'react-router-dom';


const MainNav = () => {


  const {loginWithRedirect,isAuthenticated}=useAuth0();
   const itemsCount=useAppSelector((state) =>
    state.cart.items.reduce((total, item) =>total+ item.quantity, 0)
  );
  return (
    <div>
{
isAuthenticated ? 
(
  <div className='flex gap-4'>
    <div className='relative'>
    <Link to='/checkout' className='cursor-pointer'>
  <ShoppingCart className='text-orange-500 '/>
    </Link>
  {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
          {itemsCount}
        </span>
      )}
      </div>
<UserMenu/>
  </div>
)
 :
  <Button onClick={async()=> await loginWithRedirect()} className='text-black bg-white hover:bg-black hover:text-white text-lg font-bold'>
    LogIn
  </Button> 

}

    </div>
  )
}

export default MainNav

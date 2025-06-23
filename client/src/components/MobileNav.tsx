
import {Sheet,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,SheetContent} from '@/components/ui/sheet'
import { Button } from './ui/button'
import {useAuth0} from '@auth0/auth0-react'
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';

const MobileNav = () => {

const {loginWithRedirect,isAuthenticated}=useAuth0();


  return (
<Sheet>
  <SheetTrigger>
  <svg
            className="w-6 h-6 text-black hover:text-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-lg font-bold'>Welcome! to KhaneWala</SheetTitle>

      <SheetDescription className='flex flex-col gap-4'>

        {
          isAuthenticated ?
          ( <MobileMenu/>)
          :
          (  <Button className='flex-1' onClick={()=>loginWithRedirect()}>
          LogIn
         </Button>)
        }
     
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav

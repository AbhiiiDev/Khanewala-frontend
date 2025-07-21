import  { useEffect } from 'react'
import { useCreateUser } from '@/api/MyUserApi'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export default function AuthCallBackPage() {
const {createUser}=useCreateUser();
const navigate=useNavigate();
const {user,isLoading}=useAuth0();
useEffect(() => {

if (isLoading) {
      console.log('⏳ Waiting for authentication to complete...');
      return;
    }
  if (user?.sub && user?.email) {
    createUser({ auth0Id: user.sub, email: user.email });
  } else {
    console.log("🚫 User not created");
  }

  navigate('/');
}, [createUser,isLoading,navigate,user]);

  return (
    <div>
      Loading....
    </div>
  )
}

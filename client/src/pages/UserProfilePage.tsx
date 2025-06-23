import { UpdateUserRequeset, useGetUserRequest } from '@/api/MyUserApi'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm';


export default function UserProfilePage() {

const {updatedUser,isLoading:isUpdateLoading}=UpdateUserRequeset();
const {currentUser,isLoading:isGetUserLoading}=useGetUserRequest();

if(isGetUserLoading)
    {
        return <span>Loading....</span>
    }


    if(!currentUser)
        {
            return <span>Couldn't able to get Current User details</span>
        }

  return (
      <UserProfileForm currentUser={currentUser} isLoading={isUpdateLoading} onSave={updatedUser}/>
  )
}

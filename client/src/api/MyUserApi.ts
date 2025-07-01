import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";

import {toast} from 'sonner';
import {User} from '../types';

const BASE_URL=import.meta.env.VITE_BASE_URL;


export const useGetUserRequest=()=>{

    const {getAccessTokenSilently}=useAuth0();

const getUser = async (): Promise<User>=>{
const authToken=await getAccessTokenSilently();

    const response=await fetch(`${BASE_URL}/user`,{
        method:'GET',
        headers:{
            Authorization: `Bearer ${authToken}`,
            'Content-Type':'application/json'
        }
    });

    if(!response.ok)
        {
            throw new Error('Failed to fetch user');
        }

        return response.json();
}

const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getUser);

if(error)
    {
        toast.error(error.toString());
    }

return {
    currentUser,isLoading
}

}

type CreateUser={
    auth0Id:string,
    email:string
}

 export const useCreateUser =()=>
    {
        const {getAccessTokenSilently}=useAuth0();
        const createUserRequest= async (user:CreateUser)=>{
            
            const authToken=await getAccessTokenSilently();

            const response=await fetch(`${BASE_URL}/user`,
                {
                    method:"POST",
                    headers:{
                         Authorization:`Bearer ${authToken}`,
                        "Content-Type":"application/json"
                    },
               
                body: JSON.stringify(user),
            }, 
            ) 

            if(!response.ok)
                {
                        throw new Error('Failed to create user');
                }
        };

        const {
            mutateAsync:createUser,
            isLoading,
            isError,
            isSuccess,
        }=useMutation(createUserRequest);

        return {
    createUser,
    isLoading,
    isError,
    isSuccess
};};

type UpdatedUser={
    name:string,
    addressLine1:string,
    city:string,
    country:string
}

export const UpdateUserRequeset=()=>{
const {getAccessTokenSilently}=useAuth0();

    const updateUserRequest=async(formData:UpdatedUser)=>{
        const authToken=await getAccessTokenSilently();

        const response=await fetch(`${BASE_URL}/user`,
  { 
             method:'PUT',
             headers:{
                Authorization:`Bearer ${authToken}`,
                'Content-Type':'application/json'
             },
             body:JSON.stringify(formData)
  });

  if(!response.ok)
    {
        throw new Error('Failed to update User');
    }
    return response.json();
}
const {mutateAsync:updatedUser,
    isLoading,
    isSuccess,
    error,
    reset,
}=useMutation(updateUserRequest);

if(error)
    {
        toast.error(error.toString());
        reset();
    }



if(isSuccess)
    {
        toast.success('profile updated');
    }

return {updatedUser,isLoading}
}
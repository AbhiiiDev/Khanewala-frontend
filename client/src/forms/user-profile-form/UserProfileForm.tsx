import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import LoadingButton from '../../components/LoadingButton';
import { Button } from '@/components/ui/button';
import { User } from '@/types';

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1,"name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Code is required"),
  country: z.string().min(1, "Country is required"),
});

export type UserFormData=z.infer<typeof formSchema>;

 type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
   title?: string;
//   buttonText?: string;
 };

export default function UserProfileForm({currentUser,title='User Profile',onSave,isLoading}:Props) {

  const form=useForm<UserFormData>({
    resolver:zodResolver(formSchema),
    defaultValues:currentUser
  })

  useEffect(()=>{
form.reset(currentUser);
  },[currentUser,form])

  return (

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSave)}  className="space-y-4 bg-gray-50 rounded-lg md:p-10 mt-[35px]">
  <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>

  <FormField
    control={form.control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
     <Input {...field} disabled className='bg-slate-200 border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
     <Input {...field} className='bg-white border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />

  <div className='flex flex-col md:flex-row gap-4'>

  
  <FormField
    control={form.control}
    name="addressLine1"
    render={({field}) => (
      <FormItem className='flex-1'>
        <FormLabel>AddressLine1</FormLabel>
        <FormControl>
     <Input {...field}  className='bg-white border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="city"
    render={({field}) => (
      <FormItem className='flex-1'>
        <FormLabel>City</FormLabel>
        <FormControl>
     <Input {...field} className='bg-white border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="state"
    render={({field}) => (
      <FormItem className='flex-1'>
        <FormLabel>State</FormLabel>
        <FormControl>
     <Input {...field} className='bg-white border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="postalCode"
    render={({field}) => (
      <FormItem className='flex-1'>
        <FormLabel>Postal Code</FormLabel>
        <FormControl>
     <Input {...field} className='bg-white border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="country"
    render={({field}) => (
      <FormItem className='flex-1'>
        <FormLabel>Country</FormLabel>
        <FormControl>
     <Input {...field} className='bg-white border-2 border-gray-400' />
        </FormControl>
      </FormItem>
    )}
  />
  </div>
  {
    isLoading ? (<LoadingButton/>):
    (
    <Button>
      Update
    </Button>
    )
  }
  </form>
</Form>
  )
}

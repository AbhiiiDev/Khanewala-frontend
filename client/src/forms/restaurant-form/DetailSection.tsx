
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {useFormContext} from 'react-hook-form'
import { Input } from '@/components/ui/input';

export default function DetailSection() {

const {control}=useFormContext();

  return (
    <div className='space-y-4'>
      <div>
    <h2 className='text-2xl font-bold'>
     Restaurant Information
    </h2>
    <FormDescription>
        Manage Restaurant Details
    </FormDescription>
</div>


<FormField
control={control}
name='restaurantName'
render={({field})=> (
    <FormItem>
        <FormLabel>Restaurant Name</FormLabel>
        <FormControl>
            <Input {...field} className='bg-white border-2 border-gray-400'/>
        </FormControl>
        <FormMessage/>
    </FormItem>
)}
/>
<div className='flex flex-col md:flex-row gap-4'>
<FormField
control={control}
name='city'
render={({field})=> (
    <FormItem className='flex-1'>
        <FormLabel>City</FormLabel>
        <FormControl>
            <Input {...field} className='bg-white border-2 border-gray-400'/>
        </FormControl>
        <FormMessage/>  
    </FormItem>
)}
/>
<FormField
control={control}
name='country'
render={({field})=> (
    <FormItem className='flex-1'>
        <FormLabel>Country</FormLabel>
        <FormControl>
            <Input {...field} className='bg-white border-2 border-gray-400'/>
        </FormControl>
        <FormMessage/>
    </FormItem>
)}
/>
</div>

<div className='flex flex-col md:flex-row gap-4'>
<FormField
control={control}
name='deliveryPrice'
render={({field})=> (
    <FormItem className='flex-1'>
        <FormLabel>Delivery Price</FormLabel>
        <FormControl>
            <Input {...field} className='bg-white border-2 border-gray-400'/>
        </FormControl>
        <FormMessage/>
    </FormItem>
)}
/>

<FormField
control={control}
name='estimatedDeliveryTime'
render={({field})=> (
    <FormItem className='flex-1'>
        <FormLabel>Delivery Time</FormLabel>
        <FormControl>
            <Input {...field} className='bg-white border-2 border-gray-400'/>
        </FormControl>
        <FormMessage/>
    </FormItem>
)}
/>
</div>
    </div>
  )
}

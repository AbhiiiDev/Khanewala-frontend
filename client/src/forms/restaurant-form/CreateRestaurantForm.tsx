import { Form } from '@/components/ui/form';
import {useForm} from 'react-hook-form'
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '../../components/LoadingButton';
import { Button } from '@/components/ui/button';
import DetailSection from './DetailSection';
import MenuSection from './MenuSection';
import ImageUpload from './ImageUpload';
import { Restaurant } from '@/types';
import { useEffect } from 'react';
import Cuisine from './Cuisine';

 
const RestaurantSchema=z.object({
    restaurantName:z.string().min(1,"name is required"),
    city:z.string().min(2,"City is required"),
    country:z.string().min(2,"Country is required"),
    deliveryPrice:z.coerce.number({
        required_error: "delivery price is required",
        invalid_type_error: "must be a valid number",
      }),
      estimatedDeliveryTime: z.coerce.number({
        required_error: "estimated delivery time is required",
        invalid_type_error: "must be a valid number",
      }),
      cuisines: z.array(z.string()).nonempty({
        message: "please select at least one item",
      }),
      menuItems: z.array(
        z.object({
          name: z.string().min(1, "name is required"),
          price: z.coerce.number().min(1, "price is required"),
          // imageUrl: z.string().optional(),
          // imageFile: z.instanceof(File, { message: "image is required" }).optional(),
        })
      ),
      imageUrl: z.string().optional(),
      imageFile: z.instanceof(File, { message: "image is required" }).optional(),
})

export type RestaurantFormData=z.infer<typeof RestaurantSchema>;


type Props={
  restaurant?:Restaurant;
    onSave:(restaurantFormData:FormData)=> void;
    isLoading:boolean;
    title?:string;
}


export default function CreateRestaurantForm({restaurant,onSave,title='Manage Restaurant',isLoading}:Props) {

const form=useForm<RestaurantFormData>({
    resolver:zodResolver(RestaurantSchema),
    defaultValues:{
      cuisines:[],
      menuItems:[{ name:"",price:0,imageFile:undefined
      }]
    }
})

useEffect(()=>{
form.reset(restaurant);
},[restaurant])

const onSubmit=(formDataJson:RestaurantFormData)=>{
  console.log('button clicked')
  const formData=new FormData();

  formData.append('restaurantName',formDataJson.restaurantName);
  formData.append('city',formDataJson.city);
  formData.append('country',formDataJson.country);

formData.append('estimatedDeliveryTime',formDataJson.estimatedDeliveryTime.toString());

formData.append('deliveryPrice',formDataJson.deliveryPrice.toString());


console.log(formDataJson.cuisines);

  formDataJson.cuisines.forEach((cuisine,index)=>{
    formData.append(`cuisines[${index}]`,cuisine);
  })
 
formDataJson.menuItems.forEach((menuItem,index)=>{
  formData.append(`menuItems[${index}][name]`,menuItem.name)
  formData.append(`menuItems[${index}][price]`,menuItem.price.toString())
//   if(menuItem.imageFile)
//    { 
//     const file = menuItem.imageFile;
//   console.log('File type:', typeof formDataJson.imageFile);
//   // Check if the file is indeed a valid File
//   if (file instanceof File) {
//     formData.append('menuItemsImages', menuItem.imageFile);}
//     else {
//       console.error('imageFile is not a valid File object');
//   }
// }
 
})
if(formDataJson.imageFile)
{
  const file = formDataJson.imageFile;
  console.log('File type:', typeof formDataJson.imageFile);
  // Check if the file is indeed a valid File
  if (file instanceof File) {
      formData.append('imageFile', file);
  } else {
      console.error('imageFile is not a valid File object');
  }
}
console.log(formData.getAll('cuisines[0]'));
onSave(formData)
}

  return (
 <Form {...form}>
    <form className='space-y-4 bg-gray-50 rounded-lg md:p-10 mt-[35px]' onSubmit={form.handleSubmit(onSubmit)}>
<DetailSection/>
<Cuisine/>
<MenuSection/>
<ImageUpload/>

{
  isLoading ? <LoadingButton/>
  : <Button type='submit'>
    Create
  </Button>
}
    </form>
 </Form>
  )
}

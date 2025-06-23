
import { FormDescription, FormField, FormItem } from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { cuisineList } from '@/config/Resturant-config'
import CuisineCheckbox from './CuisineCheckbox'

export default function Cuisine() {
  const {control}=useFormContext()
  return (
    <div className='space-y-4'>  
    <div>
    <FormDescription>
      Select the cuisines that your restaurant serves
    </FormDescription>
    </div>
    <FormField
      control={control}
      name='cuisines'
      render={({field})=>(
        <FormItem >
            <div className='grid md:grid-cols-5 gap-1'>
        {    cuisineList.map((item,index)=> (
              <CuisineCheckbox key={index} cuisine={item} field={field}/>
            ))}
            </div>
          
        </FormItem>
      )}
    >

    </FormField>
    
    
  </div>
  )
}

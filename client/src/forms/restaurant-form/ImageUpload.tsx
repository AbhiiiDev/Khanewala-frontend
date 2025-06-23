import { FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form'

export default function ImageUpload() {


const {control,watch}=useFormContext();


  return (
    <div>
        <div className='space-y-3'>
        <h1 className='font-bold text-2xl'>Image</h1>
    <FormDescription>
 Add an image to be displayed  on your restaurant listing in search result
    </FormDescription>
    </div>
    <FormField
    control={control}
    name='imageFile'
    render={({field})=>(
        <FormItem>
        <FormControl>
            <Input
            className='cursor-pointer'
            type='file'
            accept='.jpg .jpeg .png'
            onChange={(event)=>field.onChange(event.target.files ? event.target.files[0]: null)}
            />
        </FormControl>
    </FormItem>
  )}
   /> 
  </div>
  )
}

import { FormDescription, FormField, FormItem } from '@/components/ui/form';
import { useFieldArray, useFormContext } from 'react-hook-form'
import MenuItem from './MenuItem';
import { Button } from '@/components/ui/button';

export default function MenuSection() {

const {control}=useFormContext();

const {fields,append,remove}=useFieldArray({
    control,
    name:"menuItems"
});


  return (
    <div className='space-y-4'>
    <div>
    <h2 className="text-2xl font-bold">Menu</h2>
      <FormDescription>
        Create your menu and give each item a name and price
      </FormDescription>
    </div>
    <FormField
    control={control}
    name='menuItems'
    render={()=>(
        <FormItem>
            {
                fields.map((_,index)=>(
                    <MenuItem index={index} removeMenuItem={()=> remove(index)}/>                    
                ))
            }
        </FormItem>
    )}
    >
    </FormField>
    <Button type="button" onClick={() => append({ name: "", price: "",imageFile:null })}>
        Add Menu Item
      </Button>

    </div>
  )
}

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';


const formSchema=z.object({
    searchQuery:z.string({
        required_error:"Restaurant name is required"
    })
})


export type searchForm= z.infer<typeof formSchema>;

type Props={
    searchQuery?: string;
    onSubmit:(formData:searchForm)=>void;
    onReset?: ()=>void;
    placeHolder:string;
}


export default function SearchBar({onSubmit,onReset,placeHolder,searchQuery}:Props) {

    const form=useForm<searchForm>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            searchQuery
        }
    })

        const handleReset=()=>{
            form.reset({
                searchQuery:"",
            })

            if(onReset)
            {
                onReset();


            }
        }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
      className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-1 sm:p-3 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
        >
       <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
        control={form.control}
        name='searchQuery'
        render={({field})=>(
            <FormItem className='flex-1'>
                <FormControl>
                    <Input
                    {...field}
                    className='border-none shadow-none text-xl focus-visible:ring-0'
                    placeholder={placeHolder}
                    />
                </FormControl>
            </FormItem>
        )}
        />
        <Button
        size="sm"
        onClick={handleReset}
        type='button'
        variant='outline'
        className='rounded-full'
        >
            Reset
      </Button>

      <Button size="sm"
 type='submit' className='rounded-full bg-orange-500'>Search</Button>
        </form>
    </Form>
  )
}

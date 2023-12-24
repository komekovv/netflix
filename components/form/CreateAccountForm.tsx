'use client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { createAccountSchema } from '@/lib/validation'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import PinInput from 'react-pin-input'

const CreateAccountForm = () => {
    const form = useForm<z.infer<typeof createAccountSchema>>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {
            name: "",
            pin: ""
        }
    })

    const {isSubmittin} = form.formState;

    async function onSubmit(values:z.infer<typeof createAccountSchema>) {
        console.log(values);
        
    }
  return (
    <>
        <h1 className='text-white text-center font-bold text-3xl'>
            Create your account
        </h1>

        <div className='w-full h-[2px] bg-slate-500/20 mb-4'></div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3"}>
                <FormField
                    control={form.control}
                    name={'name'}
                    render={({field}:any) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} autoComplete='off' className='h-[56px]' disabled={isSubmittin }/>
                            </FormControl>
                            <FormDescription>
                                Your name is used to identify your account.
                            </FormDescription>
                            <FormMessage className='text-red-600'/>
                        </FormItem>
                    )}
                />

                <FormField 
                control={form.control}
                name={'pin'}
                render={({field}:any) => (
                    <FormItem>
                            <FormLabel>PIN Code</FormLabel>
                            <FormControl>
                                <PinInput 
                                length={4}
                                initialValue={field.value}
                                secret
                                disabled={isSubmittin}
                                secretDelay={100}
                                onChange={(value) => field.onChange(value)}
                                type='numeric'
                                inputMode='number'
                                style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}
                                inputStyle={{
                                    borderColor: 'rgba(255,255,255, 0.16)',
                                    height: '56px',
                                    width: '100%',
                                    fontSize: '40px',
                                }}
                                inputFocusStyle={{borderColor: 'rgba(255,255,255, 0.8)'}}
                                autoSelect={true}
                                />
                            </FormControl>
                            <FormDescription>
                                Your pin is used to identify your account.
                            </FormDescription>
                            <FormMessage className='text-red-600'/>
                    </FormItem>
                )}
                />

                <Button
                    className='w-full bg-red-600 hover:bg-red-700 flex justify-center items-center h-[56px] text-white mt-4 transition-all'
                    disabled={isSubmittin}
                    type='submit'
                >
                    Create account
                </Button>
            </form>
        </Form>
    </>
  )
}

export default CreateAccountForm
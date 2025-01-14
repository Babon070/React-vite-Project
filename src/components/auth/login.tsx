import { useAuthState } from "@/store/auth.store";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const Login = () => {

    const { setAuth } = useAuthState()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (value: z.infer<typeof loginSchema>) => {

    }

    return (
        <div className='flex flex-col'>
            <h2 className='text-xl font-bold'>
                Login
            </h2>
            <p className='text-muted-foreground'>
                Dont have an account? <span
                    onClick={() => setAuth('register')}
                    className='text-blue-500 cursor-pointer hover:underline'>Sign up</span>
            </p>
            <Separator className="my-3" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="h-12 w-full">Submit</Button>
                </form>
            </Form>
        </div>
    );
}

export default Login;

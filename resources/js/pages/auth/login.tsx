import AuthLayout from '@/layouts/auth-layout';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';
import { TypographySmall } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export default function Register() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            passwordConfirmation: "",
            acceptTerms: true
        }
    });

    return (
        <AuthLayout
            title="Sign In"
            description="Welcome back!"
            footer={
                <div className="flex flex-col items-start gap-2">
                    <Link href={route("register")} className="hover:underline text-primary">
                        Create an account
                    </Link>
                    <Link href={route("register")} className="hover:underline text-primary">
                        Forgot password
                    </Link>
                </div>
            }
        >
            <Form {...form}>
                <form action="" className="space-y-4">
                    <FormField
                        name="email"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="johndoe@example.com" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} placeholder="********" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button size="lg" className="w-full">Sign in</Button>
                </form>
            </Form>
        </AuthLayout>
    );
}

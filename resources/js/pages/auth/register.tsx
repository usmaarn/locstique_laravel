import AuthLayout from '@/layouts/auth-layout';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';
import { TypographyP, TypographySmall } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export default function Register() {
    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            acceptTerms: true
        }
    });

    return (
        <AuthLayout
            title="Register"
            description="Become a member"
            footer={
                <TypographySmall>
                    Already have an account?{" "}
                    <Link href={route('login')} className="underline text-primary">Sign in</Link>
                </TypographySmall>
            }
        >
            <Form {...form}>
                <form action="" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            name="firstName"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="John" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="lastName"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Doe" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
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
                    <FormField
                        name="passwordConfirmation"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} placeholder="********" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button size="lg" className="w-full">Register</Button>
                </form>
            </Form>
        </AuthLayout>
    );
}

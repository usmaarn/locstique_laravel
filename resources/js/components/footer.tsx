import { Link, useForm as useInertiaForm } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { TypographyH3, TypographyH4, TypographyMuted, TypographyP } from './ui/typography';

export default function Footer() {
    return (
        <footer className="mt-20 space-y-8 bg-foreground py-10 text-background">
            <SubscribeForm />
            <ul className="">
                <li>
                    <TypographyH4>Who we are?</TypographyH4>
                    <TypographyP className="text-zinc-300">
                        Welcome to LocsTique, where timeless elegance meets modern empowerment. We curate a collection of women's products that
                        inspire confidence and celebrate individuality.
                    </TypographyP>
                </li>
                <li>
                    <TypographyH4>Our mission</TypographyH4>
                    <TypographyP className="text-zinc-300">
                        Empowering women through curated beauty. Our mission is simple - celebrate confidence, individuality, and style. Join us on a
                        journey where beauty meets empowerment.
                    </TypographyP>
                </li>
                <li>
                    <TypographyH4>Policies</TypographyH4>
                    <ul>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

function SubscribeForm() {
    const inertia = useInertiaForm();

    const form = useForm({
        defaultValues: {
            email: '',
        },
    });

    function submit(values: any) {}

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="mx-auto max-w-md space-y-3 px-5">
                <TypographyH3 className="text-center">Subscribe to our Email</TypographyH3>
                <TypographyMuted className="text-center">Join our email list for exclusive offers and the latest news.</TypographyMuted>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="email" {...field} placeholder="Enter email address" className="h-11" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button size="lg" className="w-full bg-zinc-700" type="submit">
                    Subscribe
                </Button>
            </form>
        </Form>
    );
}

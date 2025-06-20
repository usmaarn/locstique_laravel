import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TypographyMuted } from '@/components/ui/typography';

export default function AuthLayout({children, title, description, footer}: {
    children: ReactNode;
    title?: string;
    description?: string;
    footer?: ReactNode;
}) {
    const bgImage = "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <main className="grid md:grid-cols-2 min-h-screen">
            <div className="" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${bgImage})`
            }}>

            </div>
            <div className="place-items-center place-content-center py-10">
                <div className="w-full max-w-[400px]">
                    <Card className="shadow-none">
                        <CardHeader>
                            <CardTitle className="text-3xl">{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {children}
                        </CardContent>
                        <CardFooter className="block space-y-12">
                            <div className="">
                                {footer}
                            </div>
                            <TypographyMuted className="text-center">
                                &copy; {new Date().getFullYear()} Locstique | All rights reserved.
                            </TypographyMuted>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    );
}

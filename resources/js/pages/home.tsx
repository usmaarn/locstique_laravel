import HeroSection from '@/components/home-page/hero-section';
import ProductCard from '@/components/product-card';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from '@/components/ui/image';
import { LinkButton } from '@/components/ui/link';
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography';
import AppLayout from '@/layouts/main/app-layout';
import { Product, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { FaRegStar } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { TiHeartOutline } from 'react-icons/ti';

export default function HomePage() {
    const { auth } = usePage<SharedData>().props;
    console.log(auth);
    return (
        <AppLayout>
            <Head title="Homepage" />
            <HeroSection />
            <div className="mx-auto max-w-7xl space-y-16">
                <FeaturedProducts />
                <Card className="dark grid grid-cols-3 gap-0 overflow-hidden p-0">
                    <CardHeader className="p-0">
                        <Image className="h-full" src="https://glotique.co/cdn/shop/files/image22.png?v=1706809837&width=1500" />
                    </CardHeader>
                    <CardContent className="col-span-2 space-y-3 bg-foreground p-16 text-background">
                        <TypographyH2>The Essence of Modern Beauty</TypographyH2>
                        <TypographyP className="text-zinc-300">Dedicated to empowering beauty through modern fashion</TypographyP>
                        <TypographyP className="text-zinc-300">
                            Our quality-driven, trend-conscious collections amplified each woman's unique elegance.
                        </TypographyP>
                        <LinkButton href="/shop" className="mt-5 text-foreground" variant="outline">
                            Shop Now <ArrowRight />
                        </LinkButton>
                    </CardContent>
                </Card>
            </div>
            <LocstiquePromise />
            <div className="mx-auto max-w-3xl space-y-5 px-5 text-center">
                <TypographyH1>You Deserve the Best!</TypographyH1>
                <TypographyP>
                    We believe every woman <b>deserves to adorn herself</b> most finely, reflecting her individuality and confidence.
                </TypographyP>
                <TypographyP>
                    Our curated collection of women's wear is metculously crafted to offer you <b>the best in style, quality, and expression</b>.
                    Embrace the luxury you deserve and redefine your wardrobe with Locstiqu
                </TypographyP>
                <LinkButton size="lg" href={route('shop')}>
                    Explore our collection
                </LinkButton>
            </div>
        </AppLayout>
    );
}

function FeaturedProducts() {
    const products: Product[] = [
        {
            id: 1,
            name: 'Mens Casual Premium Slim Fit T-Shirts',
            discount: 10,
            price: 9.99,
            images: ['https://test.locstique.com/uploads/products/0196e466-e69c-71a8-abb3-608262280ac771li-ujtlUL._AC_UX679_.jpg'],
        },
        {
            id: 2,
            name: 'Mens Cotton Jacket',
            discount: 20,
            price: 55.99,
            images: ['https://test.locstique.com/uploads/products/0196e466-e69c-71a8-abb3-608262280ac771li-ujtlUL._AC_UX679_.jpg'],
        },
        {
            id: 3,
            name: 'Mens Casual Slim Fit',
            discount: 28,
            price: 15.99,
            images: ['https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'],
        },
        {
            id: 4,
            name: 'Mens Casual Premium Slim Fit T-Shirts',
            discount: 5,
            price: 22.99,
            images: ['https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'],
        },
    ];

    return (
        <div className="mt-5 space-y-5">
            <TypographyH2 className="text-center">Fall/Winter Essentials</TypographyH2>
            <div className="grid grid-cols-4 gap-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

function LocstiquePromise() {
    const items = [
        {
            id: 1,
            title: 'Fast & Secured Shipping',
            description: 'Your Style, Delivered with Speed and Confidence',
            icon: LiaShippingFastSolid,
        },
        {
            id: 2,
            title: '100% Satisfaction Guarantee',
            description: 'Shop confidently knowing that you are getting the best in style & fit.',
            icon: TiHeartOutline,
        },
        {
            id: 3,
            title: 'Easy Returns',
            description: 'Effortless Refunds for a Seamless Shopping Experience',
            icon: RiArrowGoBackLine,
        },
        {
            id: 4,
            title: 'Over 10,000 Glow Ups',
            description: "We've helpred over 10,000 girls feel & look their best with our products",
            icon: FaRegStar,
        },
    ];

    return (
        <div className="my-16 bg-zinc-100 px-5 py-10">
            <ul className="mx-auto grid max-w-6xl grid-cols-4">
                {items.map((item) => (
                    <li key={item.id} className="flex flex-col items-center gap-3 text-center">
                        <item.icon className="mb-4 size-16 text-primary" />
                        <TypographyH3>{item.title}</TypographyH3>
                        <TypographyP className="mt-0!">{item.description}</TypographyP>
                    </li>
                ))}
            </ul>
        </div>
    );
}

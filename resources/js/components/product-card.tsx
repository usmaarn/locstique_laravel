import { Product } from '@/types';
import { TagIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from './ui/image';
import { TypographyH3 } from './ui/typography';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card>
            <CardHeader className="relative">
                <Image height={400} className="h-[300px] object-contain" src={product.images[0]} alt={product.name} />
                <Badge className="absolute bottom-5 bg-black">
                    <TagIcon className="rotate-90" /> <span className="font-black uppercase">save {product.discount}%</span>
                </Badge>
            </CardHeader>
            <CardContent>
                <CardTitle className="mb-2 h-6">{product.name}</CardTitle>
                <CardDescription>
                    <TypographyH3>${product.price}</TypographyH3>
                </CardDescription>
            </CardContent>
        </Card>
    );
}

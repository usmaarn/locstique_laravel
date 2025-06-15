import { ArrowRightIcon } from 'lucide-react';
import { LinkButton } from '../ui/link';
import { TypographyH1, TypographyP } from '../ui/typography';

export default function HeroSection() {
    return (
        <div className="flex min-h-[500px] flex-col items-center justify-center bg-gradient-to-br from-primary to-white">
            <TypographyH1 className="">Find Your Glow.</TypographyH1>
            <TypographyP>Buy from us and get free and cheap offers.</TypographyP>
            <LinkButton size="lg" href={route('shop')} variant="outline" className="mt-10">
                Shop Now <ArrowRightIcon />
            </LinkButton>
        </div>
    );
}

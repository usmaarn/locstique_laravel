import { ShoppingCartIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export default function CartMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" className="size-12 place-self-end self-center rounded-full" variant="ghost">
                    <ShoppingCartIcon className="size-7" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>access items you added to cart here.</SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

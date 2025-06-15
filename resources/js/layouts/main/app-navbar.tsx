import { Link } from '@inertiajs/react';
import CartMenu from '../../components/cart-menu';
import NavMenu from './app-nav-menu';

export default function Navbar() {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-5 py-5">
            <NavMenu />
            <Link href="/" className="text-7xl uppercase">
                Locs<b>tique</b>
            </Link>
            <CartMenu />
        </div>
    );
}

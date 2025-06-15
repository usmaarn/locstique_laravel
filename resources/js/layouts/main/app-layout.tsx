import Footer from '@/components/footer';
import { PropsWithChildren } from 'react';
import Navbar from './app-navbar';
import Banner from './banner';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Banner />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

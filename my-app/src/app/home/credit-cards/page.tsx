'use client'
import React from "react"
import CreditCard from "@/components/CreditCard";
import { Focused } from "react-credit-cards-2";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    const CreditCards = useAppSelector((state) => state.creditCardReducer.cards);
    const handleAddCard = () => {

    }
    return (
        <>
            <h2 className="text-2xl font-bold">My Credit Cards:</h2>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs ml-auto mr-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="pt-5 pb-5">
                    {CreditCards.map((card, index) => (
                        <CarouselItem key={index} >
                            <CreditCard
                                number={card.number}
                                name={card.name}
                                cvc={card.cvc}
                                focused={card.focused}
                                expiry={card.expiry}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <h2 className="text-2xl font-bold">Credit Cards</h2>
            <h3 className="text-base">here you can check your credit cards. Activate deactivate one</h3>

            <Table className="table-fixed border-">
                <TableCaption>Credit Cards in your account</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Card Number</TableHead>
                        <TableHead>Card Name</TableHead>
                        <TableHead>Card Expiry</TableHead>
                        <TableHead>Card Status</TableHead>
                        <TableHead>$$$ Amount</TableHead>
                        <TableHead>Card Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {CreditCards.map((card, index) => (
                        <TableRow key={index}>
                            <TableCell>{card.number}</TableCell>
                            <TableCell>{card.name}</TableCell>
                            <TableCell>{card.expiry}</TableCell>
                            <TableCell>active</TableCell>
                            <TableCell>$500.00</TableCell>
                            <TableCell>
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5" onClick={() => handleAddCard()}>Edit Card</Button>
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddCard()}>Remove Card</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell >{"$" + CreditCards.length * 500 + ".00"}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>


    );
};

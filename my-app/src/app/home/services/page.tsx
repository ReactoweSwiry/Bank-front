'use client'
import { increment, decrement } from '../../../lib/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"


const exampleArray = [
    {
        title: "Account Balance",
        content: "$1000",
        description: "Check your current account balance",
        footer: "Last updated: 2022-01-01",
    },
    {
        title: "Transaction History",
        content: "10 transactions",
        description: "View your recent transaction history",
        footer: null,
    },
    {
        title: "Transfer Funds",
        content: "Transfer money between accounts",
        description: "Easily transfer funds to another account",
        footer: null,
    },
];

const renderCards = () => {
    return exampleArray.map((item, index) => (
        <Card key={index} className=" flex-1 md:w-1/3 lg:w-1/4 m-5">
            <CardHeader>
                <CardTitle>
                    <p className="tracking-tight text-md font-medium">{item.title}</p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="tracking-tight text-xl font-bold">{item.content}</p>
                <CardDescription>{item.description}</CardDescription>
            </CardContent>
            {item.footer ?
                <CardFooter className="tracking-tight text-xl font-bold text-right">
                    {item.footer}
                </CardFooter>
                : null
            }
        </Card>
    ));
};
export default function Home() {
    const dispatch = useAppDispatch()

    const count = useAppSelector((state) => state.counterReducer.value);
    toast("Event has been created.")

    return (
        <header>
            <h1 className="text-4xl font-bold">Account services</h1>
            {count}

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-2" onClick={() => dispatch(increment())}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
            <div className="flex flex-wrap justify-evenly">{renderCards()}</div>
        </header>
    );
};


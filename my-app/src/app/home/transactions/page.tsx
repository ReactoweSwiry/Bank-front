'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const exampleArray = [
    { title: "Total Revenue", description: "Total revenue generated", content: "$100,000" },
    { title: "Subscriptions", description: "Number of subscriptions", content: "+500" },
    { title: "Money Values", description: "Various money values", content: "$10,000" },
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

        </Card>
    ));
};

export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-8">Transactions</h1>
            <div className="flex flex-wrap justify-evenly">{renderCards()}</div>
        </>
    );
};

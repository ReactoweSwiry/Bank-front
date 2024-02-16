'use client'
import React, { useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";



export interface PaymentFormProps {
    cvc: string;
    name: string;
    number: string;
    expiry: string;
    focused: Focused;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ cvc, name, number, expiry }) => {
    const [focused, setFocused] = useState<Focused>("");

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        focused === "cvc" ? setFocused("") : setFocused("cvc");
    }

    return (
        <div onClick={handleCardClick}>
            <Cards
                cvc={cvc}
                name={name}
                number={number}
                expiry={expiry}
                focused={focused}

            />
        </div>
    );
}

export default PaymentForm;


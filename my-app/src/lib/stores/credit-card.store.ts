import { create } from "zustand";
import { Focused } from "react-credit-cards-2";

import { CreditCard } from "../ts/interfaces";

type CreditCardState = {
	cards: CreditCard[];
};

type CreditCardActions = {
	fetchCreditCards: () => void;
};

const initialCards: CreditCard[] = [
	{
		number: "4242424242424242",
		name: "mathew",
		cvc: "123",
		focused: "number" as Focused,
		expiry: "12/2025",
	},
	{
		number: "5105105105105100",
		name: "mathew",
		cvc: "123",
		focused: "number" as Focused,
		expiry: "12/2025",
	},
	{
		number: "6011000990139424",
		name: "mathew",
		cvc: "123",
		focused: "" as Focused,
		expiry: "12/2025",
	},
	{
		number: "36227206271667",
		name: "mathew",
		cvc: "123",
		focused: "" as Focused,
		expiry: "12/2025",
	},
	{
		number: "2223003122003222",
		name: "mathew",
		cvc: "123",
		focused: "" as Focused,
		expiry: "12/2025",
	},
];

type CreditCardStore = CreditCardState & CreditCardActions;

export const useCreditCardStore = create<CreditCardStore>((set) => ({
	cards: initialCards,
	fetchCreditCards: () =>
		set((state) => ({
			cards: state.cards,
		})),
}));

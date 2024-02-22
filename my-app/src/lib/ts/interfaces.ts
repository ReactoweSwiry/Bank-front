import { Focused } from "react-credit-cards-2";

export interface CreditCard {
	cvc: string;
	name: string;
	number: string;
	expiry: string;
	focused: Focused;
}

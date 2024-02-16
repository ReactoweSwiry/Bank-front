import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Focused } from 'react-credit-cards-2';

export interface CreditCard {
    cvc: string;
    name: string;
    number: string;
    expiry: string;
    focused: Focused;
}

interface CreditCardsState {
    cards: CreditCard[];
    loading: boolean;
    error: string | null;
}

const initialState: CreditCardsState = {
    cards: [
    { number: "4242424242424242", name: "mathew", cvc: "123", focused: "number" as Focused, expiry: "12/2025" },
    { number: "5105105105105100", name: "mathew", cvc: "123", focused: "number" as Focused, expiry: "12/2025" },
    { number: "6011000990139424", name: "mathew", cvc: "123", focused: "" as Focused, expiry: "12/2025" },
    { number: "36227206271667", name: "mathew", cvc: "123", focused: "" as Focused, expiry: "12/2025" },
    { number: "2223003122003222", name: "mathew", cvc: "123", focused: "" as Focused, expiry: "12/2025" },
],
    loading: false,
    error: null,
};

const creditCardsSlice = createSlice({
    name: 'creditCards',
    initialState,
    reducers: {
        fetchCreditCardsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCreditCardsSuccess(state, action: PayloadAction<CreditCard[]>) {
            state.cards = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchCreditCardsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCreditCardsStart,
    fetchCreditCardsSuccess,
    fetchCreditCardsFailure,
} = creditCardsSlice.actions;

export default creditCardsSlice.reducer;

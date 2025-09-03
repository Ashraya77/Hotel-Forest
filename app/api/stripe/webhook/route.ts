import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Stripe } from "@stripe/stripe-js";
import { error } from "console";

export async function POST(request){

    try{
        const body = await request.text();
        const headerList = await headers();
        const signature = headersList.get('stripe-signature');

        if (!process.env.STRIPE_WEBHOOK_SECRET){
            throw new Error('NOT DEFINED')
        }

        c
    }
}
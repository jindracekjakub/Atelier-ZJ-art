import { NextResponse } from "next/server";

export async function GET() {
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

    if (!PLACE_ID || !API_KEY) {
        return NextResponse.json({ error: "Chybí API klíč nebo Place ID" }, { status: 500 });
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=cs&key=${API_KEY}`;

        const res = await fetch(url, { next: { revalidate: 43200 } });
        const data = await res.json();

        if (data.status !== "OK") {
            return NextResponse.json({ error: data.status, message: data.error_message }, { status: 500 });
        }

        const { reviews = [], rating, user_ratings_total } = data.result;

        const filtered = reviews
            .sort((a: { rating: number }, b: { rating: number }) => b.rating - a.rating)
            .slice(0, 5);

        return NextResponse.json({ reviews: filtered, rating, user_ratings_total });
    } catch (err) {
        return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
    }
}
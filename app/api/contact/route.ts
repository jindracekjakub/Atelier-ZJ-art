import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from: "Atelier ZJ-art <onboarding@resend.dev>",
            to: "atelierzj-art@seznam.cz",
            subject: "Nová zpráva z atelierzj-art",
            replyTo: email,

            html: `
                <h2>Nová zpráva z formuláře</h2>
                <p><strong>Jméno:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Zpráva:</strong><br/>${message}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ success: false }, { status: 500 });
    }
}

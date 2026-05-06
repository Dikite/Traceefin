import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { organization, phone, email, requirements } = await req.json();

    if (!organization || !phone || !email || !requirements) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Mahesh@traceefin.com,ahamedirfani987@gmail.com",
      subject: "New Contact Request",
      text: `
Organization: ${organization}
Phone: ${phone}
Email: ${email}
Requirements: ${requirements}
      `,
    });

    return NextResponse.json({ message: "Email sent successfully ✅" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}

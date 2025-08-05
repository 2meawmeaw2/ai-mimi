import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the expected shape of the request data
interface ContactFormData {
  email: string;
  name: string;
  message: string;
  phone: string;
}

export async function POST(request: Request) {
  try {
    // Log the raw request
    console.log("Raw request received");

    const body = await request.json();
    console.log("Parsed request body:", body);

    // Validate that body is an object
    if (Array.isArray(body)) {
      console.error("Received array instead of object:", body);
      return Response.json(
        { error: "Invalid data format. Expected an object." },
        { status: 400 }
      );
    }

    // Type check the body
    const formData = body as ContactFormData;

    // Validate required fields
    if (
      !formData.email ||
      !formData.name ||
      !formData.message ||
      !formData.phone
    ) {
      console.error("Missing required fields in:", formData);
      return Response.json(
        {
          error: "Missing required fields",
          received: formData,
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!formData.email.includes("@")) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    console.log("Processing email with data:", formData);

    const { data, error } = await resend.emails.send({
      from: "AI course MIMI <onboarding@resend.dev>",
      to: ["tahaslco@gmail.com"],
      replyTo: formData.email,
      subject: "New Contact Form Submission",
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong></p>
          <p>${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Request processing error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

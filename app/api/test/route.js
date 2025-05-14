import dbConnect from "@/lib/db";

export async function GET() {
  try {
    await dbConnect();
    return new Response(
      JSON.stringify({ success: true, message: "Connected to MongoDB" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

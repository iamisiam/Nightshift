import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const pdfPath = path.join(process.cwd(), "public", "night-shift-nurse-bundle.pdf");
    
    if (!fs.existsSync(pdfPath)) {
      return NextResponse.json(
        { error: "PDF not found" },
        { status: 404 }
      );
    }

    const pdfBuffer = fs.readFileSync(pdfPath);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="night-shift-nurse-bundle.pdf"',
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to download PDF" },
      { status: 500 }
    );
  }
}
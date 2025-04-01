import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	return new Response(null, {
		status: 307,
		headers: {
			Location: "https://google.com",
		},
	});
}

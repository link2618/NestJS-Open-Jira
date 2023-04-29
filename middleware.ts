import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    console.log("pasa");
    if (req.nextUrl.pathname.startsWith("/api/entries/")) {
        console.log("pasa entries");
        const id = req.nextUrl.pathname.replace("/api/entries/", "");
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        console.log(id);
        if (!checkMongoIDRegExp.test(id)) {
            // const url = req.nextUrl.clone();
            // url.pathname = "/api/bad-request";
            // url.search = `?message=${id} is not a valid MongoID`;
            // return NextResponse.rewrite(url);
            return new NextResponse(
                JSON.stringify({
                    success: false,
                    message: `${id} is not a valid MongoID`,
                }),
                { status: 400, headers: { "content-type": "application/json" } }
            );
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/api/entries/:path/"],
};

import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth/next";

// export function GET(req: NextRequest, { params: { authRoutes } }: {
//     params: {
//         authRoutes: string[]
//     }
// }) {
//     console.log(authRoutes)
//     return NextResponse.json({
//         message: "Hello from the API!"
//     })
// }

const handler = NextAuth(NEXT_AUTH)

export const GET = handler;
export const POST = handler;
//export { handler as GET, handler as POST };
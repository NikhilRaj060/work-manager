import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
connectDb();
export function GET(request, { params }) {
  console.log(params.userid);
  S;
  console.log(params.postid);
  return NextResponse.json(params);
}
export function POST(request, { params }) {
  console.log(request.body);
  console.log(request.headers);
  console.log(request.method);
  console.log(request.referrer);
  console.log(request.url);

  return NextResponse.json(params);
}

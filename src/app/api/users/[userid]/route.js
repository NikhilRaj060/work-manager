import { NextResponse } from "next/server";
connectDb();
export function DELETE(request, { params }) {
  console.log(params);
  const { userid } = params; //Destructuring
  const userId = params.userid;
  console.log(userid);
  console.log(userId);
  return NextResponse.json({
    message: "deleted",
  });
}

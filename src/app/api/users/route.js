import { NextResponse } from "next/server";

export function GET(request) {
  const user = [
    {
      id: 1,
      name: "Nikhil",
      email: "nikhil@123",
      role_id: 2,
    },
    {
      id: 2,
      name: "Raj",
      email: "raj@123",
      role_id: 3,
    },
    {
      id: 1,
      name: "Vaihnavi",
      email: "viash@123",
      role_id: 4,
    },
  ];
  return NextResponse.json(user);
}

export function POST() {}

export function DELETE(request) {
  console.log("delete API Called");
  return NextResponse.json(
    {
      message: "Deleted",
      status: "Deleted Sucessfully",
    },
    { status: 202, statusText: "Deleted" }
  );
}

export function PUT() {}

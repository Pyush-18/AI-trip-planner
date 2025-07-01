import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between bg-gray-100 shadow-md">
      <div className="w-12">
        <Link to='/'>
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <div>
        <SignedIn>
          <div className="flex items-center ">
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <Link to="/auth">
            <Button>Sign In</Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;

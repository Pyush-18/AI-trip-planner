import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

function Header() {
  return (
    <div className="sticky top-0 left-0 p-3 px-5 flex items-center justify-between shadow-md bg-white z-50  ">
      <div className="w-12">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <div>
        <SignedIn>
          <div className="flex items-center gap-4">
            <Link to="/create-trip">
              <Button variant="outline" className="rounded-full">
                <PlusIcon /> Create Trip
              </Button>
            </Link>
            <Link to='/my-trip'>
              <Button variant="outline" className="rounded-full">
                My Trip
              </Button>
            </Link>
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

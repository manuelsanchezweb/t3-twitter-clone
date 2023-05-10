import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { IconHoverEffect } from "./IconHoverEffect";
import { VscAccount, VscHome, VscSignIn, VscSignOut } from "react-icons/vsc";

const SideNav = () => {
  const session = useSession();
  const user = session?.data?.user;

  return (
    <nav className="sticky top-0 py-4 pr-2 md:pr-4">
      <ul className="flex flex-col gap-2 whitespace-nowrap md:items-start">
        <li className="flex w-full justify-center md:justify-start">
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscHome className="h-5 w-5" />
                <span className="text-md hidden md:inline">Home</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        {user != null && (
          <li className="flex w-full justify-center md:justify-start">
            <Link href={`/profiles/${user.id}`}>
              {" "}
              <IconHoverEffect>
                <span className="flex items-center gap-2">
                  <VscAccount className="h-4 w-4" />
                  <span className="text-md hidden md:inline">Profiles</span>
                </span>
              </IconHoverEffect>
            </Link>
          </li>
        )}
        {user == null ? (
          <li className="flex w-full justify-center md:justify-start">
            <button onClick={() => void signIn()}>
              <IconHoverEffect>
                <span className="flex items-center gap-2">
                  <VscSignIn className="h-5 w-5 fill-green-700" />
                  <span className="text-md hidden text-green-700 md:inline">
                    Log in
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        ) : (
          <li className="flex w-full justify-center md:justify-start">
            <button onClick={() => void signOut()}>
              {" "}
              <IconHoverEffect>
                <span className="flex items-center gap-2">
                  <VscSignOut className="h-5 w-5 fill-red-700" />
                  <span className="text-md hidden text-red-700 md:inline">
                    Log out
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;

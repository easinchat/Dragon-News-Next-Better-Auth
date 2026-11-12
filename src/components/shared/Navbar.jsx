"use client";
import Image from "next/image";

import Link from "next/link";

import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log("session ", isPending, user);

  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>

      {isPending ? (
        "Loading..."
      ) : user ? (
        <div className="flex items-center gap-2">
          <h2>Hello, {user.name}</h2>
          <Image
            src={user.image || userAvatar}
            alt="User avatar"
            width={40}
            height={40}
          />
          <button
            className="btn bg-purple-500 text-white"
            onClick={async () => await authClient.signOut()}
          >
            LogOut
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;

"use client";

import * as actions from "@/actions";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    return null;
  } else if (session?.data?.user) {
    authContent = (
      <NavbarItem>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session?.data?.user.image ?? ""} />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <form action={actions.signOut}>
                <button type="submit">Sign out</button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              sign in
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" color="primary" variant="flat">
              sign up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}

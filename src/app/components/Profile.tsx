"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return (
    <>
      {session.data?.user ? (
        <div>Client say: User is Signed in</div>
      ) : (
        <div>Client say: User is NOT Signed in</div>
      )}
    </>
  );
}

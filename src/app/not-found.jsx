import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;

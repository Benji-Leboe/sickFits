import React from "react";
import Link from "next/link";

const Home = () => (
  <div>
    <p>Wooo!</p>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
)

export default Home;
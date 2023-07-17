import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/main1">Main1 </Link>
      <Link to="/main2">Main2 </Link>
    </div>
  );
}

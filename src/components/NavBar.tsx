import React from "react";

interface Props {
  cartItemscount: number;
}

const NavBar = ({ cartItemscount }: Props) => {
  return <div> NavBar : {cartItemscount}</div>;
};

export default NavBar;

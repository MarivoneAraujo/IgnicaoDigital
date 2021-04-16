import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import oval from "../../../../assets/oval.png";
import { Central, NavBar, NavBarIcons, ClientName, VIP } from "./styled";

function Navbar() {
  return (
    <Central>
      <NavBar>
        <NavBarIcons>
          <IoMdCheckboxOutline />
        </NavBarIcons>

        <NavBarIcons>
          <MdChatBubbleOutline />
        </NavBarIcons>

        <NavBarIcons>
          <HiOutlineMail />
        </NavBarIcons>

        <NavBarIcons>
          <HiOutlineCalendar />
        </NavBarIcons>

        <NavBarIcons>
          <AiOutlineStar />
        </NavBarIcons>

        <div></div>

        <NavBarIcons>
          <FiBell />
        </NavBarIcons>

        <NavBarIcons>
          <FiSearch />
        </NavBarIcons>

        <div>
          <ClientName>Maria Elza</ClientName>
          <VIP>Cliente VIP</VIP>
        </div>

        <img
          src={oval}
          style={{
            width: "2rem",
            height: "2rem",
          }}
        />
      </NavBar>
    </Central>
  );
}

export default Navbar;

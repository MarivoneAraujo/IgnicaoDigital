import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { FiBellOff } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import oval from "../../../../assets/oval.png";
import { Central, NavBar, NavBarIcons, ClientName, VIP } from "./styled";

function Navbar() {
  const [bellOn, setBellOn] = useState(false);
  const [starOn, setStarOn] = useState(false);


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
          {starOn 
          ? (
            <div onClick={() => setStarOn(!starOn)}>
              <AiFillStar />
            </div>) 
          : (
            <div onClick={() => setStarOn(!starOn)}>
              <AiOutlineStar />
            </div>
          )}
        </NavBarIcons>

        <div></div>

        <NavBarIcons>
          {bellOn
          ? (
            <div onClick={() => setBellOn(!bellOn)}>
              <FiBellOff/>
            </div>) 
          : (
            <div onClick={() => setBellOn(!bellOn)}>
              <FiBell />
            </div>
          )}
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

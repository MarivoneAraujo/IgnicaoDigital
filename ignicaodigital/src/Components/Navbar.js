import React from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { FiBellOff } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import oval from "../assets/oval.png";

const Central = styled.div`
  display: flex;
  justify-content: center;
`;
const NavBar = styled.div`
  /* border: 1px solid black; */
  width: 940px;
  height: 40px;
  margin-top: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  display: grid;
  border-radius: 0.3rem 0.3rem;
  grid-template-columns: 0.05fr 0.05fr 0.05fr 0.05fr 0.05fr 1fr 0.05fr 0.05fr 0.1fr 0.05fr;
  align-items: center;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
`;

const NavBarIcons = styled.div`
  :hover {
    cursor: pointer;
    color: #ff7b1b;
    transition: 0.2s;
  }
`;

const ClientName = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: right;
`;

const VIP = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: 13px;
  letter-spacing: 0px;
  text-align: right;
  color: #2c2c2c;
`;

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
          <FiBellOff />
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

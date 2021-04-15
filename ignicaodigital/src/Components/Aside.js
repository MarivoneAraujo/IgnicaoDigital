import React from "react";
import styled from "styled-components";
import brand from "../assets/Brand.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";

const Rectangle = styled.div`
  background-color: white;
  width: 17rem;
  height: 122.5rem;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  z-index: 1;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 5fr;
`;

const Brand = styled.img`
  width: 9rem;
  height: 3rem;
  margin-top: 1.813rem;
  margin-left: 3rem;
`;

const AreaSelect = styled.select`
  border: none;
  background-color: #ececec;
  width: 13rem;
  height: 2rem;
  margin-top: 1.5rem;
  margin-left: 2rem;
  padding-left: 2.5rem;
  border-radius: 0.3rem 0.3rem;
  font-family: "Inter", sans-serif;
`;
const Apps = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.813rem;
  margin-left: 2.313rem;
  margin-top: 5rem;
`;

const AppsIcons = styled.div`
  padding-top: 0.625rem;

  :hover {
    cursor: pointer;
    color: #ff7b1b;
    transition: 0.2s;
  }
`;

const Aside = () => {
  return (

    <Rectangle>
      <MainGrid>
        <Brand src={brand} />
        <div>
          <AreaSelect name="Area">
            <option value="Area do aluno"> Área do cliente</option>
            <option value="Area do professor">Área dos cursos</option>
            <option value="Area do professor">Área administrativa</option>
          </AreaSelect>
        </div>
        <Apps>
          <div style={{ color: "gray" }}>APPS</div>
          <AppsIcons>
            <HiOutlineMail 
            style = {{
              width: "1.063rem",
              height: "1rem",
              paddingLft: "0.125rem",
              paddingRight: "0.625rem",
              paddingTop: "0.313rem",
              verticalAlign: "bottom"
            }}          
            />
            Email
          </AppsIcons>
          <AppsIcons>
            <MdChatBubbleOutline 
            style = {{
              width: "1.063rem",
              height: "1rem",
              paddingLft: "0.125rem",
              paddingRight: "0.625rem",
              paddingTop: "0.313rem",
              verticalAlign: "bottom"
            }}/>
            Conversar
          </AppsIcons>
          <AppsIcons>
            <IoMdCheckboxOutline 
            style = {{
              width: "1.063rem",
              height: "1rem",
              paddingLft: "0.125rem",
              paddingRight: "0.625rem",
              paddingTop: "0.313rem",
              verticalAlign: "bottom"
            }}/>
            ToDo
          </AppsIcons>
          <AppsIcons>
            <HiOutlineCalendar 
            style = {{
              width: "1.063rem",
              height: "1rem",
              paddingLft: "0.125rem",
              paddingRight: "0.625rem",
              paddingTop: "0.313rem",
              verticalAlign: "bottom"
            }}/>
            Calendário
          </AppsIcons>
        </Apps>
      </MainGrid>
    </Rectangle>

  );
}
export default Aside;

import React from "react";
import ID from "../../../assets/id.png";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import {
  Rectangle,
  MainGrid,
  LogoGrid,
  IMGBrand,
  Logo,
  AreaSelect,
  Apps,
  AppsIcons,
} from "./styled.js";

function Aside() {

  return (
    <Rectangle>
      <MainGrid>
        <LogoGrid>
          <IMGBrand src={ID} />
          <Logo
            style={{
              marginTop: "3.3rem",
              marginLeft: "-0.9rem",
            }}
          >
            Ignição Digital
          </Logo>
        </LogoGrid>

        <div>
          <AreaSelect name="Area">
            <option value="Area do aluno"> 
            
            
            Área do cliente</option>
            <option value="Area do professor">Área dos cursos</option>
            <option value="Area do professor">Área administrativa</option>
    
          </AreaSelect>
        </div>

        <Apps>
          <div style={{ color: "gray" }}>APPS</div>
          <AppsIcons>
            <HiOutlineMail
              style={{
                width: "1.063rem",
                height: "1rem",
                paddingLft: "0.125rem",
                paddingRight: "0.625rem",
                paddingTop: "0.313rem",
                verticalAlign: "bottom",
              }}
            />
            Email
          </AppsIcons>
          <AppsIcons>
            <MdChatBubbleOutline
              style={{
                width: "1.063rem",
                height: "1rem",
                paddingLft: "0.125rem",
                paddingRight: "0.625rem",
                paddingTop: "0.313rem",
                verticalAlign: "bottom",
              }}
            />
            Conversar
          </AppsIcons>
          <AppsIcons>
            <IoMdCheckboxOutline
              style={{
                width: "1.063rem",
                height: "1rem",
                paddingLft: "0.125rem",
                paddingRight: "0.625rem",
                paddingTop: "0.313rem",
                verticalAlign: "bottom",
              }}
            />
            ToDo
          </AppsIcons>
          <AppsIcons>
            <HiOutlineCalendar
              style={{
                width: "1.063rem",
                height: "1rem",
                paddingLft: "0.125rem",
                paddingRight: "0.625rem",
                paddingTop: "0.313rem",
                verticalAlign: "bottom",
              }}
            />
            Calendário
          </AppsIcons>
        </Apps>
      </MainGrid>
    </Rectangle>
  );
};
export default Aside;

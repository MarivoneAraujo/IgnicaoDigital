import styled from "styled-components";


export const StyledCard = styled.div`
  width: 640px;
  margin-top: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  border: none;
  border-radius: 0.3rem 0.3rem;
  padding-left: 0.7rem;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.5fr;
`;
export const NoImg = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const ContentStyle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  padding: 4px;
`;

export const PostDividerStyle = styled.div`
  font-family: "Inter", sans-serif;
  border-left: 1.5px solid #dedede;
  padding: 5px;
`;

export const Rating = styled.div`
  background-color: #696969;
  width: 45px;
  height: 25px;
  color: white;
  font-size: 12px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 80px;
  :hover {
    cursor: pointer;
    left: 1px;
    transform: scale(1.03);
  }
`;

export const LoveButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 30px;
  font-family: "Inter", sans-serif;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  text-align: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 6px;
  :hover {
    cursor: pointer;
    left: 1px;
    transform: scale(1.03);
  }
`;

export const BuyButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 30px;
  background-color: #696969;
  color: #ffff;
  font-family: "Inter", sans-serif;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  text-align: center;
  margin-right: 4px;
  margin-left: 4px;
  margin-bottom: 4px;
  :hover {
    cursor: pointer;
    left: 1px;
    transform: scale(1.03);
  }
`;

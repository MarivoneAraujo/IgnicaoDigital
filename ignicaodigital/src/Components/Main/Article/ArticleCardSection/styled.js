import styled from "styled-components";


export const StyledCard = styled.div`
  width: 40rem;
  margin-top: 1.74rem;
  background-color: #ffffff;
  box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
  border: none;
  border-radius: 0.3rem 0.3rem;
  padding-left: 0.7rem;
  margin-right: 1.25rem;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.5fr;
`;
export const NoImg = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  margin-right: 0.625rem;
`;

export const ContentStyle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  padding: 0.25rem;
`;

export const PostDividerStyle = styled.div`
  font-family: "Inter", sans-serif;
  border-left: 0.094rem solid #dedede;
  padding: 0.313rem;
`;

export const Rating = styled.div`
  background-color: #696969;
  width: 2.813rem;
  height: 1.563rem;
  color: white;
  font-size: 0.75rem;
  padding-left: 0.188rem;
  padding-right: 0.188rem;
  border-radius: 0.313rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.625rem;
  margin-left: 5rem;
  :hover {
    cursor: pointer;
    left: 0.063rem;
    transform: scale(1.03);
  }
`;

export const LoveButton = styled.button`
  border: none;
  border-radius: 0.313rem;
  width: 8.125rem;
  height: 1.875rem;
  font-family: "Inter", sans-serif;
  box-shadow: 0.031rem 0.031rem 0.031rem 0.031rem lightgray;
  text-align: center;
  margin-right: 0.313rem;
  margin-left: 0.313rem;
  margin-bottom: 0.375rem;
  :hover {
    cursor: pointer;
    left: 0.063rem;
    transform: scale(1.03);
  }
`;

export const BuyButton = styled.button`
  border: none;
  border-radius: 0.313rem;
  width: 8.125rem;
  height: 1.875rem;
  background-color: #696969;
  color: #ffff;
  font-family: "Inter", sans-serif;
  box-shadow: 0.031rem 0.031rem 0.031rem 0.031rem lightgray;
  text-align: center;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  margin-bottom: 0.25rem;
  :hover {
    cursor: pointer;
    left: 0.063rem;
    transform: scale(1.03);
  }
`;

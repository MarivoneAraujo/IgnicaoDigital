import styled from "styled-components";

export const Background = styled.div`
background-color: #f9f9f9;
`;

export const FilterResultsBar = styled.div`
font-family: "Inter", sans-serif;
display: grid;
margin-top: 1.875rem;
margin-left: 1.6rem;
grid-template-columns: 1fr 1.35fr 0.35fr 0.1fr 0.1fr;
align-items: end;
`;

export const ListingSelect = styled.select`
font-family: "Inter", sans-serif;
box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
border-radius: 0.3rem 0.3rem;
border: none;
padding-left: 0.5rem;
height: 1.875rem;
width: 6.5rem;
left: 102.813rem;
top: 11.438rem;
outline: none;
`;

export const MainInfoGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

export const GridIconWrapper = styled.div`
background-color: #ffff;
box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
width: 1.875rem;
height:  1.875rem;
border-radius: 10%;
margin-right: 0.625rem;
:hover {
  cursor: pointer;
  left: 0.563rem;
  transform: scale(1.1);
}
`;

export const ListIconWrapper = styled.div`
background-color: #ffff;
box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
width: 1.875rem;
height: 1.875rem;
border-radius: 10%;
margin-right: 1.25rem;
:hover {
  cursor: pointer;
  left: 0.563rem;
  transform: scale(1.1);
}
`;

export const StyledInput = styled.input`
width: 39.8rem;
height: 2.5rem;
margin-top: 1.6rem;
background-color: #ffffff;
box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
border: none;
outline: none;
border-radius: 0.3rem 0.3rem;
padding-left: 0.7rem;
margin-right: 1.25rem;
background-image: url("https://www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png");
background-position: 99%;
background-repeat: no-repeat;
background-size: 4%;
`;

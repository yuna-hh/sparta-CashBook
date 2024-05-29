import React from "react";
import styled from "styled-components";
import CashList from "../components/CashList";
import Monthly from "../components/Monthly";
import CashInput from "../components/CashInput";

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1200px;
  background-color: #fff08c;
  margin: 0 auto;
  padding: 30px 0;
  box-sizing: border-box;
`;
const HomePage = ({ cashArray, setCashArray, clickMonth, setClickMonth }) => {
  return (
    <>
      <StLayout>
        <CashInput setCashArray={setCashArray} setClickMonth={setClickMonth} />
        <Monthly setClickMonth={setClickMonth} clickMonth={clickMonth} />
        <CashList cashArray={cashArray} clickMonth={clickMonth} />
      </StLayout>
    </>
  );
};
export default HomePage;

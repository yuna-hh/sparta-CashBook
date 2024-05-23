import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CashList from "./CashList";
import Monthly from "./Monthly";
import CashInput from "./CashInput";

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
const HomePage = () => {
  const [cashArray, setCashArray] = useState([]);
  const [clickMonth, setClickMonth] = useState(1);
  console.log(clickMonth);
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

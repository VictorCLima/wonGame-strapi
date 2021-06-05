import React, { useState, useEffect, memo } from 'react';
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const HomePage = () => {
  const[rows, setRows] = useState([])

  useEffect(() => {
    axios
    .get("https://api.github.com/users/React-avancado/repos")
    .then((res) => setRows(res.data))
    .catch(e => strapi.notification.error(`Ops... github api limit exceeded, ${e}`))
  }, [])


  const headers = [
    {
      name: "Name",
      value: "name"
    },
    {
      name: "Description",
      value: "description"
    },{
      name: "Url",
      value: "url"
    },
  ];


  return (
    <>
    <Wrapper>
     <Header
      title= {{ label: "React avançado Repositories"}}
      content= "A list of our repositories in React Avançado course."
     />
    </Wrapper>
    <Table headers={headers} rows={rows}/>
    </>
  );
};

export default memo(HomePage);

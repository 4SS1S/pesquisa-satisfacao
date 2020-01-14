import React from "react";

import { Background, Button, Satisfacao } from "./styles";
import { cursos, satisfacoes } from "../../data";

export default function Home() {
  console.log(cursos);
  return (
    <>
      <Background>
        {cursos.map((i, j) => {
          return (
            <Button onClick={() => console.log(j)}>
              <img src={i.icon} />
              {i.nome}
            </Button>
          );
        })}
      </Background>
      <Satisfacao>
        {satisfacoes.map((i, j) => {
          return (
            <Button>
              <img src={i.icon} />
              <img src={i.stars} />
              {i.nome}
            </Button>
          );
        })}
      </Satisfacao>
    </>
  );
}

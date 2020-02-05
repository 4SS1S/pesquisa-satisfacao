import React, { useState, useEffect } from "react";

import { Background, Button, Satisfacao } from "./styles";
import { cursos, satisfacoes } from "../../data";

import axios from '../../services/axios';


import backgrounImage from '../../assets/images/background.png';

export default function Home() {
  
  const [satisfacaoVisible, setSatisfacaoVisible] = useState(false);
  const [voted, setVoted] = useState(false);
  const [curso, setCurso] = useState(0);

  useEffect(() => {
    if(voted){
      setTimeout(() => {
        returnState();
      }, 2000);
    }
  }, [voted]);

  function returnState(){
    setSatisfacaoVisible(false)
    setVoted(false);
  }

  function vote(nota){
    const unidade = localStorage.getItem('unidade');

    const formData = new FormData();
    formData.append('unidade', unidade);
    formData.append('curso', curso);
    formData.append('nota', nota);

    console.log(unidade)

    axios.post('/satisfacao_2020', formData).then(res => {
      console.log(res.data)
    })
  }

  return (
    <div style={{overflow: 'scroll'}}>
      <Background style={{backgroundImage: `url(${backgrounImage})`}}>
        <p>
          Escolha o seu curso
        </p>

        {cursos.map((i, j) => {
          return (
            <Button onClick={() => {setSatisfacaoVisible(true); setCurso(cursos[j].id_curso)}}>
              <img src={i.icon} />
              {i.nome}
            </Button>
          );
        })}
      </Background>
      {satisfacaoVisible && (
        <>
          <Satisfacao
            style={{transform: `translate(${voted ? -100 : -50}%, -50%)`}}
            id="background"
            onClick={e => {
              if(e.target.id === 'background'){
                returnState();
              }
            }}>
          {satisfacoes.map((i, j) => {
            return (
              <Button
                id={`btn-${j}`}
                onClick={(e) => {

                  setVoted(true);
                  setCurso(j);
                  vote(j+1);
                  
                  for(i = 0; i < Object.keys(satisfacoes).length; i++){
                    if(i !== j){
                      const btn = document.querySelector(`#btn-${i}`);
                      btn.classList.add('hide');
                    }
                  }
                }}>
                <img src={i.icon} />
                {i.nome}
              </Button>
            );
          })}
        </Satisfacao>
        <Satisfacao
          id="background"
          style={{
            transform: `translate(${voted ? -50 : 50}%, -50%)`,
            backgroundColor: '#505050'
          }}
          onClick={e => {
              if(e.target.id === 'background'){
                returnState();
              }
            }}>
          <p
            style={{width: '100%', color: '#fff'}}>
          A POP ESCOLAS AGRADECE PELA SUA AVALIAÇÃO
          </p>
          <Button
            onClick={e => {
              returnState();
            }}>
            Voltar
          </Button>
        </Satisfacao>
      </>
      )}
    </div>
  );
}

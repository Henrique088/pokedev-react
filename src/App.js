import './App.css';
import React, { useState } from 'react';
import charmadev from './img/charmandev.png';
import codevee from './img/codevee.png';
import devchu from './img/devchu.png';
import devlypuff from './img/devlypuff.png';
import psycoder from './img/psycoder.png';
import scriptle from './img/scriptle.png';
import './css/estilos.css';
import './css/reset.css';
import './css/responsivo.css';

function App() {
  const [poke_name, setpoke_name] = useState('devchu');

  const change = (event) => {
    const nome = event.currentTarget.id;

    setpoke_name(nome);
  };


  return (
    <main>
      <div class="pokedevs">
        <div class="cartoes-pokedev">

          {poke_name === "devchu" ? (
            <div class="cartao-pokedev tipo-eletrico" id="cartao-devchu">
              <div class="cartao-topo">
                <div class="detalhes">
                  <h2 class="nome">Devchu</h2>
                  <span>#001</span>
                </div>

                <span class="tipo">elétrico</span>

                <div class="cartao-imagem">
                  <img src={devchu} alt="Devchu" />
                </div>
              </div>

              <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>

                  <p>
                    Quando se depara com um erro no código, fica bastante
                    irritado. Sente a tensão acumulada em cada músculo, como se
                    estivesse prestes a soltar raios pelos dedos. Mas, em vez de
                    se deixar abater, canaliza toda essa energia em busca da
                    solução. Cada linha de código é examinada e ele não descansa
                    até que o erro seja encontrado e corrigido.
                  </p>
                </div>
              </div>
            </div>

          ) : poke_name === 'codevee' ? (
            <div class="cartao-pokedev tipo-fogo" id="cartao-codevee">
              <div class="cartao-topo">
                <div class="detalhes">
                  <h2 class="nome">Codevee</h2>
                  <span>#003</span>
                </div>

                <span class="tipo">fogo</span>

                <div class="cartao-imagem">
                  <img src={codevee} alt="Codevee" />
                </div>
              </div>

              <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>
                  <p>
                    Sua capacidade de evoluir continuamente permite que ele se
                    adapte de forma eficaz a qualquer ambiente de desenvolvimento.
                    Isso reflete a flexibilidade e a capacidade de aprendizado
                    contínuo que são essenciais para um desenvolvedor pleno.
                  </p>
                </div>
              </div>
            </div>
          ) : poke_name === 'psycoder' ? (
            <div class="cartao-pokedev tipo-agua" id="cartao-psycoder">
              <div class="cartao-topo">
                <div class="detalhes">
                  <h2 class="nome">Psycoder</h2>
                  <span>#022</span>
                </div>

                <span class="tipo">água</span>

                <div class="cartao-imagem">
                  <img src={psycoder} alt="Psycoder" />
                </div>
              </div>

              <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>
                  <p>
                    Um pokedev sênior constantemente atormentado por uma dor de
                    cabeça persistente. Quando a dor se torna intensa
                    demais,consegue acessar habilidades de programação
                    extraordinárias, resolvendo problemas complexos com uma
                    facilidade surpreendente.
                  </p>
                </div>
              </div>
            </div>
          ) : poke_name === 'devlypuff' ? (
            <div class="cartao-pokedev tipo-fada" id="cartao-devlypuff">
              <div class="cartao-topo">
                <div class="detalhes">
                  <h2 class="nome">Devlypuff</h2>
                  <span>#062</span>
                </div>

                <span class="tipo">Fada</span>

                <div class="cartao-imagem">
                  <img src={devlypuff} alt="Devlypuff" />
                </div>
              </div>

              <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>
                  <p>
                    A expressão “trabalhe enquanto eles dormem” poderia ter sido
                    facilmente criada por este pokedev. Afinal, ele tem o dom de
                    codar por horas e horas, madrugada adentro, regado a muito
                    café e energéticos. Sua dedicação é tão intensa que, enquanto
                    a maioria das pessoas está descansando, ele está imerso em
                    linhas de código, resolvendo problemas e criando soluções.
                  </p>
                </div>
              </div>
            </div>

          ) : poke_name === 'charmandev' ? (
            <div class="cartao-pokedev tipo-fogo" id="cartao-charmandev">
              <div class="cartao-topo">
                <div class="detalhes">
                  <h2 class="nome">Charmandev</h2>
                  <span>#015</span>
                </div>

                <span class="tipo">Fogo</span>

                <div class="cartao-imagem">
                  <img src={charmadev} alt="Charmandev" />
                </div>
              </div>

              <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>

                  <p>
                    Este pokedev nunca deixa a chama do aprendizado se apagar!
                    Está sempre se atualizando, pois sabe que um bom desenvolvedor
                    deve ser resiliente e adaptável às mudanças constantes no
                    mundo da tecnologia. Estar aberto a aprender novas ferramentas
                    e metodologias é crucial.
                  </p>
                </div>
              </div>
            </div>
          ) : poke_name === 'scriptle' ? (
            <div class="cartao-pokedev tipo-agua" id="cartao-scriptle">
              <div class="cartao-topo">
                <div class="detalhes">
                  <h2 class="nome">Scriptle</h2>
                  <span>#002</span>
                </div>

                <span class="tipo">Agua</span>

                <div class="cartao-imagem">
                  <img src={scriptle} alt="Scriptle" />
                </div>
              </div>

              <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>
                  <p>
                    Mesmo sendo um programador iniciante, este pokedev já domina
                    habilidades fundamentais em Javascript como: Depurar o código,
                    Manipulação do DOM, Trabalhar com APIs, Conhecimento de
                    frameworks e bibliotecas tornando o código mais eficiente.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

        </div>



        <nav class="listagem">
          <ul>
            <li className={`pokedev ${poke_name === 'devchu' ? 'ativo' : ''}`} id="devchu" onClick={change}>
              <img src={devchu} alt="Devchu" />
              <span>Devchu</span>
            </li>
            <li className={`pokedev ${poke_name === 'scriptle' ? 'ativo' : ''}`} id="scriptle" onClick={change}>
              <img src={scriptle} alt="Scriptle" />
              <span>Scriptle</span>
            </li>
            <li className={`pokedev ${poke_name === 'codevee' ? 'ativo' : ''}`} id="codevee" onClick={change}>
              <img src={codevee} alt="Codevee" />
              <span>Codevee</span>
            </li>
            <li className={`pokedev ${poke_name === 'psycoder' ? 'ativo' : ''}`} id="psycoder" onClick={change}>
              <img src={psycoder} alt="Psycoder" />
              <span>Psycoder</span>
            </li>
            <li className={`pokedev ${poke_name === 'charmandev' ? 'ativo' : ''}`} id="charmandev" onClick={change}>
              <img src={charmadev} alt="Charmandev" />
              <span>Charmandev</span>
            </li>
            <li className={`pokedev ${poke_name === 'devlypuff' ? 'ativo' : ''}`} id="devlypuff" onClick={change}>
              <img src={devlypuff} alt="Devlypuff" />
              <span>Devlypuff</span>
            </li>
          </ul>
        </nav>
      </div>
    </main >
  );
}

export default App;

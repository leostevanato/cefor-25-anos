import LinhaDoTempo from './LinhaDoTempo';
import Depoimentos from './Depoimentos';
import CeforEmNumeros from './CeforEmNumeros';
import Videos from './Videos';
import logo_camara_pb from './assets/logo_camara_pb.png';
import cefor25anos from './assets/cefor25anos.jpg';
import cefor25anos_mobile from './assets/cefor25anos_mobile.jpg';
import share_facebook_1 from './assets/share_facebook_1.png';
import share_whatsapp_1 from './assets/share_whatsapp_1.png';
import share_twitter_1 from './assets/share_twitter_1.png';
import mesa_cadeiras from './assets/mesa_cadeiras.png';
import predio_do_cefor_frente from './assets/predio_do_cefor_frente.png';
import visite_instagram from './assets/visite_instagram.png';
import visite_youtube from './assets/visite_youtube.png';
import visite_facebook from './assets/visite_facebook.png';
import cefor_camara_logo from './assets/cefor_camara_logo.png';

export default () => (
  <>
    <div id="carregando" className="d-flex align-items-center">
      <div className="spinner-border text-success mx-auto" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
    <div className="container-fluid p-0 overflow-hidden">
      <div id="topo" className="container-xl">
        <a href="https://camara.leg.br" target="_blank">
          <img
            width={ 234 }
            height={ 27 }
            src={logo_camara_pb}
            className="mx-auto d-block"
            loading="lazy"
          />
        </a>
      </div>
      <picture>
        <source media="(min-width:768px)" srcSet={ cefor25anos } />
        <img
          src={ cefor25anos_mobile }
          alt="Cefor 25 anos"
          className="d-block img-fluid mx-auto"
        />
      </picture>
      <div
        id="o-que-faz-o-cefor"
        className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <div className="icones-de-compartilhamento hstack gap-2 mb-4 mb-sm-5">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://educacaoadistancia.camara.leg.br/cefor25anos/"
              target="_blank"
            >
              <img
                src={ share_facebook_1 }
                className="img-fluid"
                alt=""
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?text=https://educacaoadistancia.camara.leg.br/cefor25anos/"
              target="_blank"
            >
              <img
                src={ share_whatsapp_1 }
                className="img-fluid"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=U&text=https://educacaoadistancia.camara.leg.br/cefor25anos/"
              target="_blank"
            >
              <img
                src={ share_twitter_1 }
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <h2 className="texto-titulo-secao display-3 mb-4 mb-sm-6">
            O QUE FAZ O CEFOR?
          </h2>
          <div className="container-xl mx-auto p-0">
            <div className="row row-cols-1 row-cols-xl-2 gy-5 gx-sm-9 gy-sm-6">
              <div className="col">
                <h3 className="titulo-coluna">
                  <span>CAPACITAÇÃO</span> <span>01</span>
                </h3>
                <p className="texto-coluna">
                  As ações de capacitação dos servidores acontecem por meio de
                  cursos presenciais ou a distância, palestras e seminários ou,
                  ainda, por meio da prospecção de oportunidades de formação e
                  treinamento oferecidas por outras instituições, desde que se
                  adequem às demandas da Câmara dos Deputados no que diz respeito
                  às competências técnicas que precisam ser desenvolvidas. Ao
                  longo desses 25 anos, o CEFOR já contabiliza mais de 3.500
                  cursos oferecidos, distribuídos em mais de 8.300 turmas,
                  superando os 180 mil alunos capacitados.
                </p>
              </div>
              <div className="col">
                <h3 className="titulo-coluna">
                  <span>PESQUISA</span> <span>02</span>
                </h3>
                <p className="texto-coluna">
                  O Programa de Pós-Graduação, que abriga um Mestrado Profissional
                  em Poder Legislativo, funciona como instrumento para disseminar
                  conhecimentos legislativos e institucionais por meio da produção
                  técnico-acadêmica, da edição e da manutenção de periódicos
                  especializados, e da realização de ações educacionais,
                  seminários, ciclos de estudo, conferências e iniciativas
                  congêneres. Fundado em 2005, o Programa já formou 118 Mestres em
                  Poder Legislativo. Sua revista digital de divulgação científica
                  E-Legis já contabiliza 43 edições, com 398 artigos publicados.
                </p>
              </div>
              <div className="col">
                <h3 className="titulo-coluna">
                  <span>
                    EDUCAÇÃO PARA
                    <br />A DEMOCRACIA
                  </span>
                  <span>03</span>
                </h3>
                <p className="texto-coluna">
                  As atividades de educação para democracia - desenvolvidas
                  diretamente ou em parceria - tem por objetivo fortalecer o Poder
                  Legislativo, bem como o exercício da cidadania democrática.
                  Nessa perspectiva são promovidos programas institucionais
                  voltados para estudantes, educadores e sociedade civil
                  organizada, a exemplo do Parlamento Jovem Brasileiro, do Estágio
                  Visita, do Missão Pedagógica no Parlamento, do Câmara Mirim e da
                  Oficina de Atuação no Parlamento, entre outros.
                </p>
              </div>
              <div className="col">
                <img
                  src={ mesa_cadeiras }
                  alt=""
                  className="d-block img-fluid mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="breve-historico"
        className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            BREVE HISTÓRICO
          </h2>
          <p>
            Foi em 1997 que se instituiu o Centro de Formação, Treinamento e
            Aperfeiçoamento dos Servidores da Câmara dos Deputados, com a
            finalidade de “planejar, promover, executar e avaliar programas e
            atividades de recrutamento, seleção, atualização, aperfeiçoamento,
            especialização e desenvolvimento de recursos humanos”. A nova área
            representava o crescimento da antiga Coordenação de Seleção e
            Treinamento (CST), subordinada à Diretoria-Geral, que desde 1971
            acompanhava a realização de concursos públicos para prover os quadros
            para a Câmara dos Deputados na nova Capital Federal e em 1985 recebeu
            a incumbência de realizar as atividades de treinamento.
          </p>
          <p>
            Inicialmente funcionando no Anexo I do Palácio do Congresso Nacional,
            em 2007 o Cefor ganhou novas instalações físicas no Complexo Avançado
            da Câmara dos Deputados, com espaço próprio para receber educandos,
            educadores, servidores e demais cidadãos.
          </p>
          <img
            src={ predio_do_cefor_frente }
            className="img-fluid my-5"
            alt="Prédio do Cefor"
          />
          <p>
            Nos anos seguintes, com o incremento no número de servidores, o
            surgimento de novos recursos tecnológicos e também pela evolução do
            serviço público orientada pela reforma administrativa do período de
            1994 a 2003, a capacitação de pessoas tornou-se premente, orientada
            também pelas novas exigências das funções legislativas, como a
            regulamentação dos dispositivos constitucionais e o incremento da
            atuação das comissões de inquérito.
          </p>
          <p>
            Ao longo desses 25 anos, a vocação do Cefor tem sido, desenvolver
            competências técnicas e gerenciais dos servidores, de forma alinhada
            às missões constitucionais da Câmara dos Deputados - representar,
            legislar e fiscalizar - e às diretrizes do seu planejamento
            estratégico, na qualidade de Escola de Governo, nos termos do art. 39,
            § 2°, da Constituição Federal.
          </p>
        </div>
      </div>
      <div
        id="linha-do-tempo"
        className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            LINHA DO TEMPO
          </h2>
          <div id="timeline-cefor">
            <LinhaDoTempo />
          </div>
        </div>
      </div>
      <div
        id="cefor-em-numeros"
        className="container-fluid p-4 pt-sm-7 pb-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            CEFOR EM NÚMEROS
          </h2>
          <div
            id="cefor-em-numeros-carousel"
            className="container-lg position-relative"
          >
            <CeforEmNumeros />
          </div>
        </div>
      </div>
      <div id="depoimentos" className="container-fluid p-4 pt-sm-7 pb-14 px-sm-8">
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            DEPOIMENTOS
          </h2>
          <div
            id="depoimentos-cefor"
            className="container-fluid position-relative px-0"
          >
            <Depoimentos />
          </div>
        </div>
      </div>
      <div id="videos" className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8">
        <div className="container-xl mx-auto p-0">
          <h2 className="visually-hidden">VÍDEOS</h2>
          <div id="videos-lista">
            <Videos />
          </div>
        </div>
      </div>
      <div
        id="calendario-de-atividades-comemorativas"
        className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            CALENDÁRIO
            <br />
            DE ATIVIDADES
            <br />
            COMEMORATIVAS
          </h2>
          <h3 className="display-6 mb-4">2022</h3>
          <div className="calendario-mes">
            <h4>OUTUBRO</h4>
            <hr className="mb-6" />
            <div className="calendario-dias d-flex">
              <div className="d-flex align-items-center mb-5">
                <div className="dias-semana me-4 me-md-5">
                  <span className="dia">05</span>
                  <span className="semana">qua</span>
                </div>
                <div className="atividade">
                  <p>Lançamento Painel Comemorativo CEFOR 25 ANOS</p>
                  <p>Área interna do Cefor</p>
                </div>
              </div>
            </div>
            <div className="calendario-dias d-flex">
              <div className="d-flex align-items-center mb-5">
                <div className="dias-semana me-4 me-md-5">
                  <span className="dia">20</span>
                  <span className="semana">qui</span>
                </div>
                <div className="atividade">
                  <p>
                    Palestra comemorativa CEFOR 25 anos - O projeto arquitetônico
                    do prédio do CEFOR, com Maurício Matta
                  </p>
                  <p>às 10h, no Auditório do CEFOR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="calendario-mes mt-5">
            <h4>NOVEMBRO</h4>
            <hr className="mb-6" />
            <div className="calendario-dias d-flex">
              <div className="d-flex align-items-center mb-5">
                <div className="dias-semana me-4 me-md-5">
                  <span className="dia">11</span>
                  <span className="semana">sex</span>
                </div>
                <div className="atividade">
                  <p>Apresentação do Coral da Câmara - CEFOR 25 anos</p>
                  <p>Foyer CEFOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="acesse-a-escola-da-camara"
        className="container-fluid d-flex align-items-center"
      >
        <a
          className="btn rounded-0 mx-auto"
          href="https://www.camara.leg.br/escola-da-camara"
          target="_blank"
        >
          Acesse a Escola da Câmara »
        </a>
      </div>
      <div
        id="conheca-nossas-redes-sociais"
        className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            CONHEÇA NOSSAS
            <br />
            REDES SOCIAIS
          </h2>
          <div className="redes-sociais d-flex flex-wrap gap-4 gap-sm-5">
            <div className="visite-rede-social">
              <a href="https://www.instagram.com/escoladacamara" target="_blank">
                <img
                  src={ visite_instagram }
                  alt="Instagram @escoladacamara"
                />
                @escoladacamara
              </a>
            </div>
            <div className="visite-rede-social">
              <a href="https://www.youtube.com/escoladacamara" target="_blank">
                <img
                  src={ visite_youtube }
                  alt="Youtube @escoladacamara"
                />
                @escoladacamara
              </a>
            </div>
            <div className="visite-rede-social">
              <a
                href="https://www.facebook.com/escoladacamaradeputados"
                target="_blank"
              >
                <img
                  src={ visite_facebook }
                  alt="Facebook @escoladacamaradeputados"
                />
                @escoladacamaradeputados
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="rodape" className="container-fluid p-4 pt-sm-7 pb-sm-6 px-sm-8">
        <div className="container-xl mx-auto p-0">
          <img
            className="mb-4"
            src={ cefor_camara_logo }
            alt="Logo Centro de Formação, Treinamento e Aperfeiçoamento (CEFOR) - Câmara dos Deputados"
          />
          <p className="mb-5">
            <strong>
              Centro de Formação, Treinamento e Aperfeiçoamento (CEFOR) - 2022
            </strong>
          </p>
          <p>
            <strong>Endereço</strong>
            <br />
            Via N3, Projeção L, Setor de Garagens Ministeriais Norte, Complexo
            Avançado da Câmara dos Deputados, Bloco B, Sala 19 Brasília-DF - CEP
            70160-900
          </p>
        </div>
      </div>
    </div>
  </>
)
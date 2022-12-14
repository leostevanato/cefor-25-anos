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
                  <span>CAPACITA????O</span> <span>01</span>
                </h3>
                <p className="texto-coluna">
                  As a????es de capacita????o dos servidores acontecem por meio de
                  cursos presenciais ou a dist??ncia, palestras e semin??rios ou,
                  ainda, por meio da prospec????o de oportunidades de forma????o e
                  treinamento oferecidas por outras institui????es, desde que se
                  adequem ??s demandas da C??mara dos Deputados no que diz respeito
                  ??s compet??ncias t??cnicas que precisam ser desenvolvidas. Ao
                  longo desses 25 anos, o CEFOR j?? contabiliza mais de 3.500
                  cursos oferecidos, distribu??dos em mais de 8.300 turmas,
                  superando os 180 mil alunos capacitados.
                </p>
              </div>
              <div className="col">
                <h3 className="titulo-coluna">
                  <span>PESQUISA</span> <span>02</span>
                </h3>
                <p className="texto-coluna">
                  O Programa de P??s-Gradua????o, que abriga um Mestrado Profissional
                  em Poder Legislativo, funciona como instrumento para disseminar
                  conhecimentos legislativos e institucionais por meio da produ????o
                  t??cnico-acad??mica, da edi????o e da manuten????o de peri??dicos
                  especializados, e da realiza????o de a????es educacionais,
                  semin??rios, ciclos de estudo, confer??ncias e iniciativas
                  cong??neres. Fundado em 2005, o Programa j?? formou 118 Mestres em
                  Poder Legislativo. Sua revista digital de divulga????o cient??fica
                  E-Legis j?? contabiliza 43 edi????es, com 398 artigos publicados.
                </p>
              </div>
              <div className="col">
                <h3 className="titulo-coluna">
                  <span>
                    EDUCA????O PARA
                    <br />A DEMOCRACIA
                  </span>
                  <span>03</span>
                </h3>
                <p className="texto-coluna">
                  As atividades de educa????o para democracia - desenvolvidas
                  diretamente ou em parceria - tem por objetivo fortalecer o Poder
                  Legislativo, bem como o exerc??cio da cidadania democr??tica.
                  Nessa perspectiva s??o promovidos programas institucionais
                  voltados para estudantes, educadores e sociedade civil
                  organizada, a exemplo do Parlamento Jovem Brasileiro, do Est??gio
                  Visita, do Miss??o Pedag??gica no Parlamento, do C??mara Mirim e da
                  Oficina de Atua????o no Parlamento, entre outros.
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
            BREVE HIST??RICO
          </h2>
          <p>
            Foi em 1997 que se instituiu o Centro de Forma????o, Treinamento e
            Aperfei??oamento dos Servidores da C??mara dos Deputados, com a
            finalidade de ???planejar, promover, executar e avaliar programas e
            atividades de recrutamento, sele????o, atualiza????o, aperfei??oamento,
            especializa????o e desenvolvimento de recursos humanos???. A nova ??rea
            representava o crescimento da antiga Coordena????o de Sele????o e
            Treinamento (CST), subordinada ?? Diretoria-Geral, que desde 1971
            acompanhava a realiza????o de concursos p??blicos para prover os quadros
            para a C??mara dos Deputados na nova Capital Federal e em 1985 recebeu
            a incumb??ncia de realizar as atividades de treinamento.
          </p>
          <p>
            Inicialmente funcionando no Anexo I do Pal??cio do Congresso Nacional,
            em 2007 o Cefor ganhou novas instala????es f??sicas no Complexo Avan??ado
            da C??mara dos Deputados, com espa??o pr??prio para receber educandos,
            educadores, servidores e demais cidad??os.
          </p>
          <img
            src={ predio_do_cefor_frente }
            className="img-fluid my-5"
            alt="Pr??dio do Cefor"
          />
          <p>
            Nos anos seguintes, com o incremento no n??mero de servidores, o
            surgimento de novos recursos tecnol??gicos e tamb??m pela evolu????o do
            servi??o p??blico orientada pela reforma administrativa do per??odo de
            1994 a 2003, a capacita????o de pessoas tornou-se premente, orientada
            tamb??m pelas novas exig??ncias das fun????es legislativas, como a
            regulamenta????o dos dispositivos constitucionais e o incremento da
            atua????o das comiss??es de inqu??rito.
          </p>
          <p>
            Ao longo desses 25 anos, a voca????o do Cefor tem sido, desenvolver
            compet??ncias t??cnicas e gerenciais dos servidores, de forma alinhada
            ??s miss??es constitucionais da C??mara dos Deputados - representar,
            legislar e fiscalizar - e ??s diretrizes do seu planejamento
            estrat??gico, na qualidade de Escola de Governo, nos termos do art. 39,
            ?? 2??, da Constitui????o Federal.
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
            CEFOR EM N??MEROS
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
          <h2 className="visually-hidden">V??DEOS</h2>
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
            CALEND??RIO
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
                  <p>Lan??amento Painel Comemorativo CEFOR 25 ANOS</p>
                  <p>??rea interna do Cefor</p>
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
                    Palestra comemorativa CEFOR 25 anos - O projeto arquitet??nico
                    do pr??dio do CEFOR, com Maur??cio Matta
                  </p>
                  <p>??s 10h, no Audit??rio do CEFOR</p>
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
                  <p>Apresenta????o do Coral da C??mara - CEFOR 25 anos</p>
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
          Acesse a Escola da C??mara ??
        </a>
      </div>
      <div
        id="conheca-nossas-redes-sociais"
        className="container-fluid p-4 pt-sm-7 pb-sm-14 px-sm-8"
      >
        <div className="container-xl mx-auto p-0">
          <h2 className="texto-titulo-secao display-3 mb-lg-8 mb-4 mb-sm-6">
            CONHE??A NOSSAS
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
            alt="Logo Centro de Forma????o, Treinamento e Aperfei??oamento (CEFOR) - C??mara dos Deputados"
          />
          <p className="mb-5">
            <strong>
              Centro de Forma????o, Treinamento e Aperfei??oamento (CEFOR) - 2022
            </strong>
          </p>
          <p>
            <strong>Endere??o</strong>
            <br />
            Via N3, Proje????o L, Setor de Garagens Ministeriais Norte, Complexo
            Avan??ado da C??mara dos Deputados, Bloco B, Sala 19 Bras??lia-DF - CEP
            70160-900
          </p>
        </div>
      </div>
    </div>
  </>
)
import { Chrono } from "react-chrono";
import { useEffect } from 'react';
// import { linhaTempoConteudo } from "./js/linhaDoTempo";

const linhaTempoJSON = [
  {
    "title": "1971"
  },
  {
    "title": "1997"
  },
  {
    "title": "2000"
  },
  {
    "title": "2000"
  },
  {
    "title": "2000"
  },
  {
    "title": "2001"
  },
  {
    "title": "2001"
  },
  {
    "title": "2002"
  },
  {
    "title": "2002"
  },
  {
    "title": "2003"
  },
  {
    "title": "2004"
  },
  {
    "title": "2005"
  },
  {
    "title": "2006"
  },
  {
    "title": "2006"
  },
  {
    "title": "2006"
  },
  {
    "title": "2006"
  },
  {
    "title": "2008"
  },
  {
    "title": "2008"
  },
  {
    "title": "2009"
  },
  {
    "title": "2009"
  },
  {
    "title": "2010"
  },
  {
    "title": "2010"
  },
  {
    "title": "2011"
  },
  {
    "title": "2011"
  },
  {
    "title": "2012"
  },
  {
    "title": "2012"
  },
  {
    "title": "2013"
  },
  {
    "title": "2013"
  },
  {
    "title": "2014"
  },
  {
    "title": "2015"
  },
  {
    "title": "2017"
  },
  {
    "title": "2017"
  },
  {
    "title": "2018"
  },
  {
    "title": "2019"
  },
  {
    "title": "2020"
  },
  {
    "title": "2020"
  },
  {
    "title": "2021"
  },
  {
    "title": "2021"
  },
  {
    "title": "2022"
  },
  {
    "title": "2022"
  }
];

export default () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);

      setTimeout(() => {
        document.getElementById('carregando').remove();
        document.body.style.overflow = 'auto';
      }, 1500);
    }, 500);
  }, []);

  return (
      <Chrono
        items={ linhaTempoJSON }
        mode="HORIZONTAL"
        fontSizes={ {
          title: '1.5rem'
        } }
        theme={ {
          primary: '#146646',
          secondary: '#E8E8E7',
          cardBgColor: '#EBF3EC',
          titleColor: '#146646',
          titleColorActive: '#146646',
        } }
        cardWidth='1140'
        cardHeight='30'
      >
        <div>
          <h3>CRIADA A COORDENAÇÃO DE SELEÇÃO E TREINAMENTO PARA ATENDER EXCLUSIVAMENTE OS SERVIDORES DA CÂMARA DOS
            DEPUTADOS</h3>
        </div>
        <div>
          <h3>INSTITUCIONALIZAÇÃO DO CENTRO DE FORMAÇÃO, TREINAMENTO E APERFEIÇOAMENTO – CEFOR</h3>
          <p>O Cefor tem com a missão qualificar os servidores da Câmara dos Deputados e promover a Educação Legislativa,
            com vistas ao fortalecimento da democracia com foco no poder legislativo.</p>
        </div>
        <div>
          <h3>ÚLTIMO CONCURSO PÚBLICO REALIZADO PELO CEFOR</h3>
          <p>A partir de então, o Cefor passa a atuar na contratação e fiscalização de concursos feitos com realização
            externa.</p>
        </div>
        <div>
          <h3>É OFERTADA A PRIMEIRA ESPECIALIZAÇÃO PARA GESTORES DA CÂMARA DOS DEPUTADOS, EM PARCERIA COM A UNIVERSIDADE
            DE BRASÍLIA</h3>
        </div>
        <div>
          <h3>OFERTA DAS PRIMEIRAS CAPACITAÇÕES EM “PROCESSO ORÇAMENTÁRIO”</h3>
        </div>
        <div>
          <h3>CRIADO O ENSINO A DISTÂNCIA DA CÂMARA DOS DEPUTADOS</h3>
        </div>
        <div>
          <h3>OFERTA DAS PRIMEIRAS CAPACITAÇÕES EM PROCESSO LEGISLATIVO</h3>
        </div>
        <div>
          <h3>LANÇADO O PROGRAMA DE DESENVOLVIMENTO DOS SECRETÁRIOS PARLAMENTARES</h3>
        </div>
        <div>
          <h3>LANÇADO O “PROGRAMA DE DESENVOLVIMENTO DA COORDENAÇÃO DE SEGURANÇA LEGISLATIVA” (ATUAL DEPOL)</h3>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO “ESTÁGIO-VISITA”</h3>
          <p>Programa educativo que busca aproximar os universitários do Parlamento, a partir de uma experiência
            interativa e dinâmica em que os jovens participam de aulas, debates, rodas de conversa, simulações e
            observação do trabalho parlamentar.</p>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO “PARLAMENTO JOVEM BRASILEIRO”</h3>
          <p>Programa educativo de simulação parlamentar em que jovens de todo o Brasil se reúnem na Câmara dos Deputados
            para analisar, debater e deliberar sobre projetos de lei de sua autoria.</p>
        </div>
        <div>
          <h3>INSTITUCIONALIZAÇÃO DO PROGRAMA DE PÓS-GRADUAÇÃO DA CÂMARA DOS DEPUTADOS</h3>
          <p>A partir do credenciamento do Cefor junto ao MEC para oferta de cursos <em>lato sensu</em>, o programa
            oferece suas duas primeiras especializações: “Processo Legislativo” e “Instituições e Processos Políticos do
            Legislativo</p>
        </div>
        <div>
          <h3>OFERTA DE CURSOS A DISTÂNCIA PARA A ASSOCIAÇÃO DE SECRETÁRIOS-GERAIS DOS PAÍSES DE LÍNGUA PORTUGUESA</h3>
        </div>
        <div>
          <h3>CRIAÇÃO DA “COORDENAÇÃO DE PÓS-GRADUAÇÃO”</h3>
        </div>
        <div>
          <h3>LANÇADO O “PROGRAMA DE DESENVOLVIMENTO GERENCIAL”</h3>
        </div>
        <div>
          <h3>LANÇAMENTO DOS PRIMEIROS GRUPOS DE PESQUISA E EXTENSÃO DO PROGRAMA DE PÓS-GRADUAÇÃO</h3>
        </div>
        <div>
          <h3>CRIAÇÃO DA COORDENAÇÃO DE EDUCAÇÃO PARA DEMOCRACIA</h3>
        </div>
        <div>
          <h3>LANÇAMENTO DA REVISTA ELETRÔNICA E-LEGIS DO PROGRAMA DE PÓS-GRADUAÇÃO</h3>
          <p>A E-Legis é a única revista brasileira com foco no Poder Legislativo</p>
        </div>
        <div>
          <h3>EAD DA CÂMARA GANHA O PRÊMIO E-LEARNING BRASIL NA CATEGORIA 'CONTRIBUIÇÃO MARCANTE'</h3>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO “ESCOLA NA CÂMARA”</h3>
        </div>
        <div>
          <h3>REALIZADA A I JORNADA DE PESQUISA E EXTENSÃO DO PROGRAMA DE PÓS-GRADUAÇÃO DA CÂMARA DOS DEPUTADOS</h3>
        </div>
        <div>
          <h3>EAD DA CÂMARA GANHA O PRÊMIO E-LEARNING BRASIL NA CATEGORIA 'REFERÊNCIA NACIONAL'</h3>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO “MISSÃO PEDAGÓGICA NO PARLAMENTO”</h3>
          <p>Programa de formação de educadores da rede pública de ensino focado no desenvolvimento de práticas
            pedagógicas de educação para democracia.</p>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO “ESTÁGIO-CIDADÃO”</h3>
          <p>Programa educativo volta aos estagiários da Câmara dos Deputados, em que universitários de diferentes áreas
            aprendem sobre o processo legislativo e as funções do Parlamento.</p>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DA “OFICINA DE ATUAÇÃO NO PARLAMENTO”</h3>
          <p>Programa educativo que apresenta formas para que a sociedade civil organizada possa acompanhar o processo
            legislativo na prática e participar do processo de elaboração de leis.</p>
        </div>
        <div>
          <h3>LANÇADO O CANAL CEFOR-VÍDEO NO YOUTUBE</h3>
        </div>
        <div>
          <h3>INÍCIO DO MESTRADO PROFISSIONAL EM PODER LEGISLATIVO</h3>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO CURSO “EDUCAÇÃO PARA DEMOCRACIA E O PARLAMENTO”</h3>
          <p>Curso introdutório voltado para educadores da rede pública de ensino.</p>
        </div>
        <div>
          <h3>LANÇADO O “PROGRAMA DE EDUCAÇÃO CONTINUADA EM GESTÃO”</h3>
        </div>
        <div>
          <h3>PRIMEIRA EDIÇÃO DO “ESTÁGIO PARTICIPAÇÃO”</h3>
          <p>Programa educativo que incentiva a participação política e cidadã por meio acompanhamento das atividades
            parlamentares e busca ativa de informações sobre o Legislativo.</p>
        </div>
        <div>
          <h3>LANÇADO O “PROGRAMA DE EDUCAÇÃO CONTINUADA EM AQUISIÇÕES”</h3>
        </div>
        <div>
          <h3>PÓS-GRADUAÇÃO É RECREDENCIADA A OFERTAR DE CURSOS <em>LATO SENSU</em> NAS MODALIDADES PRESENCIAL E A
            DISTÂNCIA</h3>
        </div>
        <div>
          <h3>LANÇAMENTO DO “CLIQUE REGIMENTO”</h3>
        </div>
        <div>
          <h3>LANÇAMENTO DA NOVA PLATAFORMA DE ENSINO A DISTÂNCIA DA CÂMARA DOS DEPUTADOS: ELEVE</h3>
        </div>
        <div>
          <h3>LANÇAMENTO DA NOVA VERSÃO DO PORTAL EVC</h3>
          <p>Portal educativo com conteúdo multimidia de Educação para Democracia</p>
        </div>
        <div>
          <h3>MUDANÇA DE PARADIGMA. CURSOS E ATIVIDADES PRESENCIAIS DO CEFOR PASSAM A SER REALIZADOS A DISTÂNCIA</h3>
          <p>A adaptação for necessária por conta do isolamento social durante a pandemia de COVID-19</p>
        </div>
        <div>
          <h3>O PLENARINHO - PORTAL INFANTO-JUVENIL DA CÂMARA DOS DEPUTADOS - PASSA A INTEGRAR OS PROJETOS DE EDUCAÇÃO
            PARA DEMOCRACIA DO CEFOR</h3>
        </div>
        <div>
          <h3>SÃO CRIADAS AS REDES SOCIAIS DA ESCOLA DA CÂMARA PARA DIVULGAR AS ATIVIDADES E OS CONTEÚDOS EDUCATIVOS
            PRODUZIDOS PELO CEFOR</h3>
        </div>
        <div>
          <h3>CURSOS DO CEFOR PASSAM A INTEGRAR A PLATAFORMA EVG/ENAP</h3>
        </div>
        <div>
          <h3>CANAL DA ESCOLA DA CÂMARA NO YOUTUBE SUPERA OS 20 MIL INSCRITOS</h3>
        </div>
      </Chrono >
  );
};
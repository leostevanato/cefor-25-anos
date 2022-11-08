import { useEffect, useState } from 'react';
import ButtonSeta from './ButtonSeta';
import carregarScript from './js/carregarScript';
import useFetch from './useFetch';


function converterHTMLEntities(string) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return string.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

export default () => {
  const [loadedUtil, setLoadedUtil] = useState(false);
  const [loadedSwipeContent, setLoadedSwipeContent] = useState(false);
  const [loadedMain, setLoadedMain] = useState(false);
  const caminhoScripts = '/cefor25anos/react_horizontal_timeline/js/';

  useEffect(() => {
    carregarScript('util', caminhoScripts, () => { setLoadedUtil(true); });
    carregarScript('swipe-content', caminhoScripts, () => { setLoadedSwipeContent(true); });

    // Forma encontrada para garantir que o script main da linha do tempo 
    // só carregue quando o HTML estiver todo pronto.
    const onPageLoad = () => {
      carregarScript('main', caminhoScripts, () => { setLoadedMain(true); });

      setTimeout(() => {
        window.scrollTo(0, 0);
  
        setTimeout(() => {
          if (!!document.getElementById('carregando')) {
            document.getElementById('carregando').remove();
          }
  
          document.body.style.overflow = 'auto';
        }, 500);
      }, 500);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const [error, isLoaded, items] = useFetch('cefor_linha_do_tempo.json');

  if (error) {
    return <div>Erro: { error.message }</div>;
  } else if (!isLoaded && !loadedUtil && !loadedSwipeContent) {
    return <div>Carregando...</div>;
  } else {
    const agruparAnos = false;
    const linhaItems = [];
    const conteudoItems = [];
    let conta = 0;
    let linhaDataDia = 1;
    let linhaTempoJSON = [];

    items.forEach((item, index) => {
      let tituloCard = item.cardTitle.replace(/<\/?b>/gi, '').toUpperCase().replace(/(<\/?)(em)(>)/gi, '$1em$3');

      tituloCard = tituloCard.replace(/EAD/g, 'EaD');

      let descricaoCard = '';

      if (item.cardDetailedText != "") {
        // descricaoCard = converterHTMLEntities(item.cardDetailedText);
        descricaoCard = item.cardDetailedText;
      }

      linhaTempoJSON.push({
        "id": index + 1,
        "linhaTitulo": item.title.toString(),
        "cardTiulo": tituloCard,
        // "cardDescricao": (item.cardDetailedText != "")? item.cardDetailedText : ''
        "cardDescricao": descricaoCard
      });
    });

    conta = linhaTempoJSON.length;

    linhaTempoJSON.map((item, index, array) => {
      if (!agruparAnos) {
        if (index > 0 && (item.linhaTitulo === array[index - 1].linhaTitulo)) {
          linhaDataDia++;
        } else {
          linhaDataDia = 1;
        }
      }

      let linhaData = linhaDataDia + "/1/" + item.linhaTitulo;

      linhaItems.push(<li key={ index }>
        <a href="#0" data-date={ linhaData } className={ "cd-h-timeline__date" + ((index === 0) ? " cd-h-timeline__date--selected" : "") }>{ item.linhaTitulo }</a>
      </li>);

      conteudoItems.push(<li key={ (conta + index) } className={ "cd-h-timeline__event text-component" + ((index === 0) ? " cd-h-timeline__event--selected" : "") }>
        <div className="cd-h-timeline__event-content container">
          <h3 className="cd-h-timeline__event-title" dangerouslySetInnerHTML={ { __html: item.cardTiulo } } />
          <p className="cd-h-timeline__event-description color-contrast-medium" dangerouslySetInnerHTML={ { __html: item.cardDescricao } } />
        </div>
      </li>);
    });

    return (
      <section className="cd-h-timeline js-cd-h-timeline">
        <div className="cd-h-timeline__container container">
          <div className="cd-h-timeline__dates">
            <div className="cd-h-timeline__line">
              <ol>
                { linhaItems }
              </ol>

              <span className="cd-h-timeline__filling-line" aria-hidden="true"></span>
            </div>
          </div>
        </div>

        <div className="timeline_controles">
          <ButtonSeta className="btn seta esquerda border-0 cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive" classDisable="cd-h-timeline__navigation--inactive" tipo="dupla" />
          <ButtonSeta className="btn seta esquerda border-0 cd-h-item__navigation cd-h-item__navigation--prev cd-h-item__navigation--inactive" classDisable="cd-h-item__navigation--inactive" />
          <ButtonSeta className="btn seta direita border-0 cd-h-item__navigation cd-h-item__navigation--next" classDisable="cd-h-item__navigation--inactive" />
          <ButtonSeta className="btn seta direita border-0 cd-h-timeline__navigation cd-h-timeline__navigation--next" classDisable="cd-h-timeline__navigation--inactive" tipo="dupla" />
        </div>

        <div className="cd-h-timeline__events container">
          <ol>
            { conteudoItems }
          </ol>
        </div>
      </section>
    );
  }
};
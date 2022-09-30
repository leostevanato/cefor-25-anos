import { useEffect } from 'react';
import ButtonSeta from './ButtonSeta';
import { linhaTempoJSON } from "./js/linhaDoTempo";

function montaScript(nome, path) {
  let script = document.createElement('script');
  script.src = path + nome + '.js';
  script.id = nome + '-js';
  document.body.appendChild(script);
}

export default () => {
  let caminho = '/cefor25anos/react_horizontal_timeline/js/';

  useEffect(() => {
    montaScript('util', caminho);
    montaScript('swipe-content', caminho);
    montaScript('main', caminho);

    setTimeout(() => {
      window.scrollTo(0, 0);

      setTimeout(() => {
        if (!!document.getElementById('carregando')) {
          document.getElementById('carregando').remove();
        }

        document.body.style.overflow = 'auto';
      }, 500);
    }, 500);
  }, []);

  const agruparAnos = true;
  const linhaItems = [];
  const conteudoItems = [];
  const conta = linhaTempoJSON.length;
  let linhaDataDia = 1;

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
        <h3 className="cd-h-timeline__event-title">{ item.cardTiulo }</h3>
        <p className="cd-h-timeline__event-description color-contrast-medium" dangerouslySetInnerHTML={ { __html: item.cardDescricao } }>
        </p>
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

        <ul>
          <li><ButtonSeta className="btn seta esquerda border-0 cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive" classDisable="cd-h-timeline__navigation--inactive" /></li>
          <li><ButtonSeta className="btn seta direita border-0 cd-h-timeline__navigation cd-h-timeline__navigation--next" classDisable="cd-h-timeline__navigation--inactive" /></li>
        </ul>
      </div>

      <div className="cd-h-timeline__events container">
        <ol>
          { conteudoItems }
        </ol>
      </div>
    </section>
  );
};
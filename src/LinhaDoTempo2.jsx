import { useEffect } from 'react';
import { linhaTempoJSON } from "./js/linhaDoTempo";

function montaScript(nome) {
  let script = document.createElement('script');
  script.src = '/src/react_horizontal_timeline/js/' + nome + '.js';
  script.id = nome + '-js';
  document.body.appendChild(script);
}

//console.log(linhaTempoJSON);

export default () => {
  useEffect(() => {
    montaScript('util');
    montaScript('swipe-content');
    montaScript('main');

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

  const linhaItems = [];
  const conteudoItems = [];
  const conta = linhaTempoJSON.length;

  linhaTempoJSON.map((item, index) => {
    linhaItems.push(<li key={ index }>
      <a href="#0" data-date={ "01/01/" + item.linhaTitulo } className={ "cd-h-timeline__date" + ((index === 0) ? " cd-h-timeline__date--selected" : "") }>{ item.linhaTitulo }</a>
    </li>);

    conteudoItems.push(<li key={ (conta + index) } className={ "cd-h-timeline__event text-component" + ((index === 0) ? " cd-h-timeline__event--selected" : "") }>
      <div className="cd-h-timeline__event-content container">
        <h3 className="cd-h-timeline__event-title">{ item.cardTiulo }</h3>
        <p className="cd-h-timeline__event-description color-contrast-medium">
          { item.cardDescricao }
        </p>
      </div>
    </li>);
  });

  return (
    <section className="cd-h-timeline js-cd-h-timeline margin-bottom-md">
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
          <li><a href="#0" className="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive">Anterior</a></li>
          <li><a href="#0" className="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--next">Próximo</a></li>
        </ul>
      </div>

      <div className="cd-h-timeline__events">
        <ol>
          { conteudoItems }
        </ol>
      </div>
    </section>
  );
};
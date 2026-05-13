import { useState } from 'react';

import data from '../data.json';

import CardTrilha from '../components/CardTrilha.tsx';
import CardPonto from '../components/CardPonto.tsx';
import Switch from '../components/ui/buttons/Switch.tsx';

export default function Explorar() {

    const trilhas = [...data.trilhas];

    const [trilhaSelecionada, setTrilhaSelecionada] = useState(trilhas[0]);

    const trilhasList = trilhas.map((trilha) => (
        <CardTrilha
            key={trilha.id}
            trilha={trilha}
        />
    ));

    const pontosList = trilhaSelecionada.pontos_interesse.map((ponto, index) => (
        <CardPonto
            key={index}
            ponto={ponto}
            trilha={trilhaSelecionada.nome}
        />
    ));

    return (
        <>
            <div className="paddingHeader" id='paddingImgFade'></div>

            <section className='img-fade' id='capivara'>

                <div className="conteudo vertical">

                    <div className="info vertical gap5">
                        <h1>Todas as Atividades</h1>

                        <p>
                            Descubrar caminhos, fauna e paisagens únicas
                            às margens do Rio Juqueriquerê
                        </p>
                    </div>

                    <h1>Trilhas</h1>

                    <div className='carrossel horizontal' id='filtros'>
                        <div className="horizontal gap5">
                            {trilhasList}
                        </div>
                    </div>

                    <div className="lista vertical">

                        <h1>Pontos de interesse</h1>

                        <div className="horizontal gap5">

                            {trilhas.map((trilha) => (

                                <button
                                    key={trilha.id}
                                    onClick={() => setTrilhaSelecionada(trilha)}
                                    className={
                                        trilhaSelecionada.id === trilha.id
                                            ? 'ativo'
                                            : ''
                                    }
                                >
                                    {trilha.nome}
                                </button>

                            ))}

                        </div>

                        <div className="vertical gap5">

                            {pontosList}

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}
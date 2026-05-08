export default function Sobre(){

    return(
        <>
            <div className="paddingHeader"></div>
            <section className='vertical conteudo' id='sobre'>
                <h1>Sobre o Juqueriquere</h1>
                <p>O Juqueriquere é um Parque Estadual, localizado em Caraguatatuba, SP. Nesse site você pode consultar informações sobre as trilhas, 
                    pontos de interesse e eventos do parque, além de oferecer recursos para facilitar a navegação e a experiência dos visitantes como mapas interativos, 
                    informações sobre as trilhas e pontos de interesse, dicas de segurança e sugestões de atividades para os visitantes. O aplicativo também conta com uma 
                    seção de notícias e eventos, mantendo os usuários informados sobre as novidades do parque. Com o Juqueriquere, os visitantes do Parque Estadual do Juqueri 
                    podem aproveitar ao máximo sua experiência, explorando a natureza, aprendendo sobre a fauna e flora local e participando das atividades oferecidas pelo parque. 
                    O aplicativo é uma ferramenta valiosa para quem deseja conhecer melhor o Juqueri e desfrutar de tudo o que ele tem a oferecer.</p>
                <div className="carrossel horizontal">
                    <h1>Sobre o Juqueriquere</h1>
                    <div className="carrosselCard vertical gap5" id="passaros">
                        <h1>i</h1>
                        <p>Caracteristica marcante da área</p>
                    </div>
                    <div className="carrosselCard vertical gap5" id="passaros">
                        <h1>i</h1>
                        <p>Caracteristica marcante da área</p>
                    </div>
                    <div className="carrosselCard vertical gap5" id="passaros">
                        <h1>i</h1>
                        <p>Caracteristica marcante da área</p>
                    </div>
                </div>
            </section>
            
            
        </>
    )
}
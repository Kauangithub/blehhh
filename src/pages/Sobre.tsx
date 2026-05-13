import img_sede_administrativa from '../assets/img/sobre/Sede administrativa_.jpg'
import img_bancos_lixeiras from '../assets/img/sobre/Bancos + lixeiras de recicláveis.jpg'
import img_entrada_banheiros from '../assets/img/sobre/entrada dos banheiros.jfif'
import img_estante_livros from '../assets/img/sobre/estante de livros.jfif'
import img_vista_sala_verde from '../assets/img/sobre/Vista interna da sala verde.jfif'
import img_bicicletario from '../assets/img/sobre/Bicicletário_.jpg'
import img_doca_caiaques from '../assets/img/sobre/Doca dos caiaques.jpg'
import img_entrada_sede_area_verde from '../assets/img/sobre/Entrada Sede Área Verde.jpg'
import img_lateral_esquerda_piquenique from '../assets/img/sobre/Lateral esquerda área de piquenique.jpg'
import img_placa_aves from '../assets/img/sobre/Placa aves.jpg'
import img_placa_caraguata from '../assets/img/sobre/Placa Caraguatá.jpg'
import img_placa_esquilos from '../assets/img/sobre/Placa esquilos.jpg'
import img_placa_orientacoes_entrada from '../assets/img/sobre/Placa orientações entrada.jpg'
import img_placa_programa_mar_lixo from '../assets/img/sobre/Placa Programa O Mar Não Está para Lixo.jpg'
import img_placa_roteiro_aguas from '../assets/img/sobre/Placa roteiro das águas.jpg'
import img_vagas_especiais_bicicletario from '../assets/img/sobre/Vagas especiais + bicicletário.jpg'

export default function Sobre(){

    return(
        <>
            <div className="paddingHeader"></div>
            <section className='vertical conteudo' id='sobre'>
                <h1>Sobre o Juqueriquere</h1>
                <p>
                    O Parque Natural Municipal do Juqueriquerê (PNMJ) é um refúgio de biodiversidade em Caraguatatuba, que combina a preservação da Mata Atlântica com a beleza da flora e fauna às margens do maior rio da região. O espaço oferece uma experiência tranquila e educativa, contando com trilhas ecológicas, torre de observação e um deck panorâmico, sendo o destino ideal para quem busca lazer contemplativo fora do ambiente urbano e do circuito tradicional de praias
                </p>
                <h3>Informações úteis:</h3>
                <ul>
                    <li><p><strong>Endereço:</strong> Avenida José Herculano, 5.030 – Porto Novo (em frente à Colônia de Férias Min. João Cleófas).</p></li>
                    <br></br>
                    <li><p><strong>Horários de funcionamento:</strong> O parque está aberto para visitações de <u>terça à sexta-feira</u> das <u>9h30 às 16h30</u>, e aos <u>sábados, domingos e feriados</u> das <u>9h às 16h</u>.</p></li>
                    <br></br>
                    <li><p>Para visita de grupos, é necessário agendamento prévio (mínimo 7 dias de antecedência) através do e-mail pnm.juqueriquere@caraguatatuba.sp.gov.br, informando o objetivo da visita, quantidade de pessoas, necessidade de uso das estruturas (auditório, mesas ao ar livre, etc), entre outras informações relevantes.</p></li>
                </ul>
                <br></br>
                <h1>Área de Convivência</h1>
                <p>
                    Principal espaço de recepção e descanso do parque, totalmente integrado à natureza. Conta com jardins de Mata Atlântica, áreas de piquenique, observatório de aves, Sala Verde, comedouros para fauna e infraestrutura acessível.
                </p>
                <h3>Observações</h3>
                <ul>
                    <li><p>Pavimentação acessível em bloquetes</p></li>
                    <li><p> Sem obstáculos relevantes</p></li>
                    <li><p>Possui banheiros acessíveis, bebedouro, bicicletário e estacionamento</p></li>
                    <li><p>Disponível cadeira Julietti para PCD (até 70 kg)</p></li>
                </ul>
                <h3>Pontos de Interesse</h3>
                <ul>
                    <li><p>Pavimentação acessível em bloquetes</p></li>
                    <li><p>Observatório de aves com cerca de 10 m de altura</p></li>
                    <li><p>Vista panorâmica da copa das árvores e do parque</p></li>
                    <li><p>Bromélias de grande porte</p></li>
                    <li><p>Exemplares de Ingá e árvores “Olho-de-boi”</p></li>
                    <li><p>Área de piquenique sombreada</p></li>
                    <li><p>Sala Verde para educação ambiental</p></li>
                    <li><p>Biblioteca e estante de livros educativos</p></li>
                    <li><p>Boxes de exposição temática</p></li>
                    <li><p>Comedouros para aves, esquilos e borboletas</p></li>
                    <li><p>Placas educativas sobre fauna e flora</p></li>
                </ul>
                <h3>Acessibilidade</h3>
                <p>O PNMJ oferece às pessoas com deficiência (PCD) a cadeira Julietti, que suporta até 70 kg para percorrer as trilhas com conforto.</p>
                <h1>Galeria de imagens</h1>
                <div className='carrossel horizontal'>
                    <img src={img_sede_administrativa}  className="carrosselCard" alt="Sede Administrativa"></img>
                    <img src={img_bancos_lixeiras} alt="Bancos e Lixeiras de Recicláveis" className="carrosselCard"></img>
                    <img src={img_entrada_banheiros} alt="Entrada dos Banheiros" className="carrosselCard"></img>
                    <img src={img_estante_livros} alt="Estante de Livros" className="carrosselCard"></img>
                    <img src={img_vista_sala_verde} alt="Vista da Sala Verde" className="carrosselCard"></img>
                    <img src={img_bicicletario} alt="Bicicletário" className="carrosselCard"></img>
                    <img src={img_doca_caiaques} alt="Doca dos Caiaques" className="carrosselCard"></img>
                    <img src={img_entrada_sede_area_verde} alt="Entrada da Sede da Área Verde" className="carrosselCard"></img>
                    <img src={img_lateral_esquerda_piquenique} alt="Lateral Esquerda da Área de Piquenique" className="carrosselCard"></img>
                    <img src={img_placa_aves} alt="Placa de Aves" className="carrosselCard"></img>
                    <img src={img_placa_caraguata} alt="Placa de Caraguatá" className="carrosselCard"></img>
                    <img src={img_placa_esquilos} alt="Placa de Esquilos" className="carrosselCard"></img>
                    <img src={img_placa_orientacoes_entrada} alt="Placa de Orientações da Entrada" className="carrosselCard"></img>
                    <img src={img_placa_programa_mar_lixo} alt="Placa do Programa O Mar Não Está para Lixo" className="carrosselCard"></img>
                    <img src={img_placa_roteiro_aguas} alt="Placa do Roteiro das Águas" className="carrosselCard"></img>
                    <img src={img_vagas_especiais_bicicletario} alt="Vagas Especiais e Bicicletário" className="carrosselCard"></img> 
                </div>
            </section>
        </>
    )
}
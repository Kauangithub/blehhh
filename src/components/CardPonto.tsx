import "./CardPonto.css"

type Props = {
    ponto: {
        planta: string;
        latitude: string;
        longitude: string;
    };

    trilha: string;
};

export default function CardPonto({ ponto }: Props) {

    return (
        <div className='cardTrilha'>
            <div className="info vertical">
            <h2>{ponto.planta}</h2>
            </div>
        </div>
        
    );
}
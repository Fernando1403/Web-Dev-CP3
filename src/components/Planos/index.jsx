import CardPlanos from '../CardPlanos';
import CorpCard from '../../assets/CorpCard-img.svg';
import './Planos.css'

function Planos() {

    const planos = [
        {
            nome: "Individual",
            usuarios: "1-10",
            opcoes: ["10 vídeos R$15"],
            textButton: "Cadastrar",
            corTopo: "#6975E8",
        },
        {
            nome: "Profissional - Times",
            usuarios: "1-10",
            opcoes: ["Vídeos Ilimitados R$40", "Vídeos Ilimitados R$20"],
            textButton: "Cadastrar",
            corTopo: "#fff",
        },
        {
            nome: "Corporativo",
            usuarios: "",
            opcoes: [],
            imagem:{CorpCard},
            textButton: "Entre Em Contato",
            corTopo: "#fff",
        },
    ]

    return (
        <>
            <div className='planos'>
                <h2>Planos</h2>
                <div className='container-card-planos'>
                    {planos.map(plano => <CardPlanos
                        key={plano.nome}
                        nome={plano.nome}
                        usuarios={plano.usuarios}
                        opcoes={plano.opcoes}
                        imagem={plano.imagem}
                        textButton={plano.textButton}
                        corTopo={plano.corTopo}
                    />)}
                </div>
            </div>
        </>
    );
}

export default Planos;
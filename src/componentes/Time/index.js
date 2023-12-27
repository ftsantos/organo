import Colaborador from '../Colaborador'
import './Time.css'
// tome cuidado em proteger o CSS, pois este CSS, apesar de importado aqui, vale pra toda a aplicação
// por isso, devo fazer o h3 do time, ficando assim no meu CSS: .time h3 {}

const Time = (props) => {

    const cssCorSecudaria = {backgroundColor: props.corSecundaria}
    const cssCorPrimaria = {borderColor: props.corPrimaria}

    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={cssCorSecudaria}>
            <h3 style={cssCorPrimaria}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador 
                    corDeFundo={props.corPrimaria} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time
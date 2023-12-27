import './Banner.css'

function Banner(){
    //JSX - seria algo como: documment.createElement('img');
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
    )
}

export default Banner
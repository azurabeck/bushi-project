import React, { PureComponent } from 'react';
import Logo from '../comp_ui/images/logo_white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown , faFire , faInfinity , faDragon } from '@fortawesome/free-solid-svg-icons'

import Carrossel from '../comp_ui/global/carrossel'

class home extends PureComponent {

    render() {
        
        const imageStyle = {
            background: 'linear-gradient(360deg , rgba(255, 0, 0, 0.69) 0%, rgba(41, 0, 0, 0.51) 100%) , url(https://revistafactual.com.br/wp-content/uploads/2016/01/samurai-x.jpg)',
            backgroundPositionX: '65%',
            backgroundSize: 'cover',
        }


        return (
            <div className='content home'>
                <div className='header' style={imageStyle}>
                    <img src={Logo} className='logo' alt=''></img>
                    <div className='header-text'>monitore os seus animes preferidos, e não perca mais nenhum episódio</div>
                    <FontAwesomeIcon icon={faLongArrowAltDown} color='#FED500' />
                </div>

                <Carrossel />

                <span className='divider'></span>

                <div className='content'>
                    <div className='title'>O que fazer por aqui?</div>

                    <div className='block'>

                        <div className='block-one'>
                            <div className='img-area'> <FontAwesomeIcon icon={faFire} color='#C64750' /> </div>
                            <div className='block-text'> <strong>Os Melhores</strong>  <br/> Veja o que esta pegando fogo, no mundo dos animes. Os animes mais  bem avaliados pela galera! </div>
                        </div>

                        <div className='block-two'>
                            <div className='block-text'> <strong>Informações</strong>  <br/> Procure informações dos seus animes  preferidos. </div>
                            <div className='img-area'> <FontAwesomeIcon icon={faInfinity} color='#FE9800' /> </div>
                        </div>
                        
                        <div className='block-tree'>
                            <div className='img-area'> <FontAwesomeIcon icon={faDragon} color='#000' /> </div>
                            <div className='block-text'> <strong>Sua Lista</strong>  <br/> Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um episódio novo for ao ar! </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default home;
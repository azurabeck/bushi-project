import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Carrossel from '../comp_ui/global/carrosselImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity , faSearch , faSort , faCaretRight} from '@fortawesome/free-solid-svg-icons'

class information extends PureComponent {
    render() {

        const { anime } = this.props

        return (
            <div className='content information'>
                <div className='container'>
                    <Carrossel />

                    <div className='table'>

                        <div className='table-header'>
                            <div className='title'> <FontAwesomeIcon icon={faInfinity} color='#FE9800'/> Veja Animes </div>
                            <div className='filters'>
                                <div className='search'> <input placeholder='animes'/> <FontAwesomeIcon icon={faSearch}/> </div>
                                <div className='sort'> <FontAwesomeIcon icon={faSort} color='#FE9800'/> </div>
                            </div>
                        </div>

                       { 
                            anime && anime.map((anime, index) => {

                                    console.log(anime)

                                    return (
                                        <div className='table-row' key={index}>
                                            <div className='img-area'><img src={anime.cover} alt=''/></div>
                                            <div className='title'>Nome: {anime.title}</div>
                                            <div className='desc'>
                                                <div className='desc-group'>
                                                        <div className='desc'>Episódios: 12 </div>
                                                        <div className='desc'>Estrelas: ** </div>
                                                </div>
                                                <div className='btn'>favoritar</div>
                                                <FontAwesomeIcon icon={faCaretRight} color='#000'/>
                                            </div>
                                        </div>
                                    )
                            })                        
                        }

                    </div>


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      anime: state.recentList.animes
    }
}
    
export default connect(  mapStateToProps, null )(information)
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faBell, faFire, faSearch , faInfinity , faDragon , faCaretDown , faCog} from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/logo_black.svg'
import Google from '../images/google-logo.svg'

class navbar extends PureComponent {

    state = { searchOpen: false , searchStyle: false , showMenu: false }

    openSearch = () => {
        this.setState({ searchOpen: true , searchStyle: true })
    }

    closeSearch = () => {
        this.setState({ searchOpen: false , searchStyle: false})
    }

    handleMenu = () => { 
        const menu = this.state.showMenu
        this.setState({ showMenu: !menu })
    }

    render() {
        const { searchOpen , searchStyle , showMenu } = this.state
        const style = { width: '290px', background: '#E7E1E1', borderRadius: '24px', height: '35px', padding: '0 25px' }

        return (
            <div className='navbar'>
                <FontAwesomeIcon icon={faBars} onClick={this.handleMenu} />
                <Link to='/'><img src={Logo} alt='' className='logo'/></Link> 

                
                <div className='nav-group'>
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faFire} />
                    <span className='nav-search' style={searchStyle ? style : null} onMouseOver={this.openSearch} onMouseLeave={this.closeSearch}>
                        {searchOpen && <input placeholder='procure seu anime'/>}
                        <FontAwesomeIcon icon={faSearch}  />
                    </span>                     
                </div>      

                { showMenu && <div className='menu' onClick={this.handleMenu}>

                        <div className='menu-area'> 
                        
                            <ul>
                                <Link to='/minha-lista'><li> <span>Minha lista </span><FontAwesomeIcon icon={faDragon}  /> </li></Link> 
                                <Link to='/informacoes'><li> <span>Informações</span> <FontAwesomeIcon icon={faInfinity}  /></li></Link> 
                                <Link to='/top10'><li> <span>Top 10</span>  <FontAwesomeIcon icon={faFire}  /></li></Link> 
                                <Link to='/configuracoes'><li> <span>Configurações</span> <FontAwesomeIcon icon={faCog}  /></li></Link> 
                                <Link to='/categorias'><li> <span>Categorias</span> <FontAwesomeIcon icon={faCaretDown}  /></li></Link> 
                            </ul>

                            <div className='btn-google'> <img src={Google} alt='' /> Entra com Google</div>
                        
                         </div>

                </div> }

            </div>
        );
    }
}

export default navbar;
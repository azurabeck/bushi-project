import React, { PureComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft , faCaretRight } from '@fortawesome/free-solid-svg-icons'

class carrossel extends PureComponent {

    state = { fn: 0,  sn: 1 ,
    
        notification: [
            { anime: 'Boruto' , notification: 'Disponível' , season: 'S01' , episode: 'EP: 198'  },
            { anime: 'My Herro Academia' , notification: 'Disponível' , season: 'S05', episode: 'EP: 95'  },
            { anime: 'Dr Stone' , notification: 'Disponível' , season: 'S02' , episode: 'EP: 25'  },
            { anime: 'My Herro Academia' , notification: 'Sábado' , season: 'S05' , episode: 'EP: 96'  },
            { anime: 'My Herro Academia' , notification: 'Domingo' , season: 'S01' , episode: 'EP: 199'  },
        ]
    }

    componentWillMount() {
        this.handleAnimation();
    }

    handleAnimation = () => {
        setInterval(() => { this.handleNext() }, 2000)
    }

    handleNext = (e) => {
        const {fn , sn} = this.state
        const nextFn = fn + 1;
        const nextSn = sn + 1
        
        if((nextFn === 3 || nextFn < 3) && (nextSn === 4 || nextSn < 4)) {            
            this.setState({fn: nextFn, sn: nextSn})
        } else {
            this.setState({fn: 0, sn: 1})
        }
    }

    handlePrev = (e) => {
        const {fn , sn} = this.state
        const prevFn = fn - 1;
        const prevSn = sn - 1
        if((prevFn === 0 || prevFn > 0) && (prevSn === 1 || prevSn > 1)) {            
            this.setState({fn: prevFn, sn: prevSn})
        } else {
            this.setState({fn: 3, sn: 4})
        }
    }

    render() {

        const { fn , sn , notification} = this.state

        return (
            <div className='carrossel'>

                {
                    notification && notification.slice(fn,sn).map((item , index) => {
                        return (
                            <div className='carrossel' key={index}>
                                <FontAwesomeIcon icon={faCaretLeft} color='#C9C9C9' onClick={this.handlePrev}/>
                                    <div className='car-text'> {item.notification}: {item.anime} - {item.season} - {item.episode}  </div>
                                <FontAwesomeIcon icon={faCaretRight} color='#C9C9C9'onClick={this.handleNext} />     
                            </div>
                        )
                    })
                }




            </div>
        );
    }
}

export default carrossel;
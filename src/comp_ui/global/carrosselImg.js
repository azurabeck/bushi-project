import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft , faCaretRight } from '@fortawesome/free-solid-svg-icons'

class carrosselImg extends PureComponent {
    state = { fn: 0,  sn: 3 ,
    
        list: [
            { anime: 'Yu Yu Hakusho' , note: 10 , img: 'https://www.gamerview.com.br/wp-content/uploads/2017/03/Yu-Yu-Hakusho.jpg'  },
            { anime: 'Demon Slayer' , note: 10 , img: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/04/Demon-Slayer-Kimetsu-no-Yaiba-netflix.jpg'  },
            { anime: 'One Piece' , note: 10 , img: 'https://manualdosgames.com/wp-content/uploads/2020/10/One-Piece-chegar%C3%A1-na-Netflix-1280x720-1.jpg'  },
            { anime: 'Saint Seya' , note: 10 , img: 'https://pyre-media-2.s3.sa-east-1.amazonaws.com/7654cc5d-89b7-44b1-8cbf-c6fb790ea913saint-seiya-awakening-cdz-pre-registro_1400x875_5e33f6156c070.jpg'  },
            { anime: 'My Hero Academia' , note: 10 , img: 'https://pbs.twimg.com/media/EjQr_ZOWAAQZVkv.jpg'  },
            { anime: 'Black Clover' , note: 10 , img:'https://i2.wp.com/www.otakupt.com/wp-content/uploads/2020/05/Volume-25-Black-Clover-adiado-para-3-de-Julho.jpg' },
            { anime: 'Shingeki no Kyogin' , note: 9 , img: 'https://www.planocritico.com/wp-content/uploads/2020/11/Ataque-dos-Titas-Shingeki-no-Kyojin-1-temporada.jpg'  },
            { anime: 'Dr. Stone' , note: 9 , img: 'https://sm.ign.com/t/ign_br/screenshot/b/bdr-stone-/bdr-stone-2019bbrbrdr-stone-is-an-explosive-chemical-reactio_mb57.1280.jpg'  }
        ]
    }

    handleNext = (e) => {
        const {fn , sn} = this.state
        const nextFn = fn + 1;
        const nextSn = sn + 1
        
        if(nextFn === 6  && nextSn === 9 ) {            
            this.setState({fn: 0, sn: 3})
        } else {
            this.setState({fn: nextFn, sn: nextSn})
        }
    }

    handlePrev = (e) => {
        const {fn , sn} = this.state
        const prevFn = fn - 1;
        const prevSn = sn - 1

        if(prevFn === -1 && prevSn === 2) {            
            this.setState({fn: 5, sn: 8})
        } else {
            this.setState({fn: prevFn, sn: prevSn})
        }
    }

    render() {

        const { fn , sn , list} = this.state

        console.log( fn , sn )

        return (
            <div className='carrossel-img'>
                <div className='tag'>Nota {list[fn].note}: {list[fn].anime}</div>
                <div className='img-carrossel'>                
                    {
                        list && list.slice(fn,sn).map((item , index) => {
                            
                            return (
                                
                                <img alt='' src={item.img} key={index}/>

                            )
                        })
                    }            
                </div>
                
                <div className='slider'>
                    <FontAwesomeIcon icon={faCaretLeft} color='#FE9800' onClick={this.handlePrev}/>
                    <FontAwesomeIcon icon={faCaretRight} color='#FE9800' onClick={this.handleNext}/>
                </div>

            </div>

        );
    }
}

export default carrosselImg;
import React from 'react';
import Round from 'pages/NonAuth/Round';
import Cart from './components/Cart';
// import FreelancerModal from './components/FreelancerModal';
import './Freelancer.scss';
import Fillter from './components/Fillter'
// import { useContext } from 'react';
// import Context from 'components/Context/Context';
import serach_icon from '../../assets/images/Freelancer/serach_inp.svg'


const Freelancer = () => {
    




    

    // const [blackHeight, setBlackHeight] = useState(0);

    // useEffect(() => {
    //     if(isActive){
    //     const freelancerWin = document.querySelector(".freelancermodal");
    //     const modal_height = freelancerWin.clientHeight;
    //     console.log(modal_height);
    //     setBlackHeight(modal_height);
    //     }
    // }, [isActive]);
    
    // const handleSubmit = (e) => {
    //     console.log("object click! ");
    //     e.preventDefault()
    // }


    return (
        <section className='freelancer' >
{/*             
            {
                isActive ? <div className='black-window' style={{"height":blackHeight}} ></div>  : null
            }
             */}
            <div className="freelancer_container">
                
                <div>
                    <form className='freelancer_container_outline' >
                        <input type="text" placeholder='Title, keywords...' className='freelancer_container_outline_inp' />
                        <button type='submit' className='freelancer_container_outline_btn' ><img src={serach_icon} alt="search icon" /></button>
                    </form>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
    
                <div className='freelancer_container_round'>
                    <Round />
                </div>
                </div>
                <Fillter />
                {/* {
                    isActive ? <FreelancerModal /> : null
                } */}

     
            </div>
        </section>
    );
};

export default Freelancer;
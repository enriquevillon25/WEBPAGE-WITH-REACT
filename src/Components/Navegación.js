import React from 'react';
import '../Components/styles/Navegacion.css';

class Navegacion extends React.Component{

        render(){
            return(
                <div className="header">
                    <div>
                        <img src="" alt="LOGO"/>
                    </div>
                    <nav>
                        <ul>
                            <li> Inicio </li>
                            <li> Servicios</li>
                            <li> Nosotros</li>
                            <li> Contactanos</li>
                        </ul>
                    </nav>
                </div>
            );
        }

}

export default Navegacion;
import './Navbar.css';
// import Company from './Company';
import ApenasOLogo from "./img/ApenasOLogo.png"
import { Component } from 'react';

class Navbar extends Component {

    state={clicked: false};
    handClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
   render(){ 
    return (
        <>
            <nav>
                <a href="/Home"><img src={ApenasOLogo} alt='logo' height={48.5} /></a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li>
                            <a className="active" href="/Home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="./Company">Sobre nós</a>
                        </li>
                        <li>
                            <a href="./Contact">Contato</a>
                        </li>
                        <li>
                            <a href="./Products">Produtos</a>
                        </li>
                    </ul>
                </div>
                <div id='mobile' onClick={this.handClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
            </nav>
        </>
    );
}
}
export default Navbar;

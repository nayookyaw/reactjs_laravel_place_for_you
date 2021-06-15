import React, {Component} from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
    Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import { FaUserCircle } from 'react-icons/fa';
import { FcBusinessman, FcPhone } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import './Header.css';

import logoOnly from '../../assets/img/logo.JPG';

class Header extends Component {
    constructor () {
        super();
        this.state = 
        {
            isDrawerOpen : false,
            isUserPopOver : false,
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleDrawer = this.handleDrawer.bind(this);
        this.handleUserPopOver = this.handleUserPopOver.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({ isDrawerOpen : false , isUserPopOver: false });
    }

    handleDrawer() {
        this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    }

    handleUserPopOver() {
        this.setState({ isUserPopOver: !this.state.isUserPopOver });
    }

    render() {
        const { isDrawerOpen } = this.state

        return (
            <div className="headerWrapper">
                <Navbar className='sticky-top' light expand="md">
                    <NavbarBrand>
                        <img src={logoOnly} className='logoImage'/>
                    </NavbarBrand>
                    <NavbarBrand className="logoText">Place For You</NavbarBrand>
                    
                    <NavbarToggler onClick={ this.handleDrawer } />

                    <Collapse isOpen={false} navbar>
                        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                            <NavItem>
                                <span style={{ paddingRight: '30px' }}>Setting</span>
                            </NavItem>
                            <NavItem>
                                <span style={{ paddingRight: '20px' }}>Username</span>
                            </NavItem>
                            <NavItem>
                                <span id= "userPopOver" style={{ cursor: 'pointer' }}><FaUserCircle size={28} color={"#bde2f4"}/></span>

                                <Popover placement="bottom" isOpen={ this.state.isUserPopOver } target="userPopOver" toggle={ this.handleUserPopOver }>
                                    <PopoverHeader> <FcBusinessman/> </PopoverHeader>
                                    <PopoverBody>
                                        User Name <br/>
                                        09970486117
                                        <hr/>
                                        <span className="logout">Logout <IoLogOut size={20}/> </span>
                                        
                                    </PopoverBody>
                                </Popover>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Drawer open={isDrawerOpen} onClose={ this.handleDrawer } direction='right' color='#000'>
                    <div className="sideBarWrapper">
                        <span> <img src={logoOnly} className='logoSideMenu'/> </span>
                        <hr style={{ borderTop: '2px #327f2a dashed'}}/>
                        <div>
                            <FcBusinessman size={20} /> <span style={{ verticalAlign: '-webkit-baseline-middle' }}> User Name </span>  <br/>
                            <FcPhone size={20}/> 09970486117 <br/><br/>

                            <div>Setting</div>

                            <br/><br/><br/>

                            <span className="logout">Logout <IoLogOut size={20}/> </span>
                        </div>
                    </div>
                </Drawer>                
                
            </div>
        );        
    }
}

export default Header;
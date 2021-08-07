import React, {Component} from 'react';
import * as Constants from '../../constants';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import { FcHome, FcTodoList } from "react-icons/fc";

import SideDrawer from 'react-modern-drawer';

import './css/Sidebar.css';

import Home from '../Home/Home';
import History from '../History/History';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            extraSmallView: false,
            smallView: false,
            showSideBar: true,
            isSideDrawerOpen: false
        }
        this.updateViewState = this.updateViewState.bind(this);
        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.handleSideDrawer = this.handleSideDrawer.bind(this);
    }

    componentWillMount() {
        this.updateViewState();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateViewState);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateViewState);
    }

    updateViewState() {
        let currentWith = document.documentElement.clientWidth;
        let currentHeight = document.documentElement.clientHeight;

        let headerWrapperHeight = document.getElementById('headerWrapper').clientHeight;

        let sideMenuHeight = currentHeight - headerWrapperHeight;

        console.log (sideMenuHeight);

        if (currentWith < Constants.SMALL_SIZE) {
            this.setState({ smallView: false, showSideBar: false, extraSmallView: true, isSideDrawerOpen: false });
        }
        else if (currentWith < Constants.MEDUIM_SIZE) {
            this.setState({ smallView: true, showSideBar: false, extraSmallView: false, isSideDrawerOpen: true });

        } else if (currentWith > Constants.MEDUIM_SIZE) {
            this.setState({ smallView: false, showSideBar: true, extraSmallView: false, isSideDrawerOpen: true });
        }

        console.log (this.state.showSideBar);
    }

    handleSideDrawer() {
        this.setState({ isSideDrawerOpen: !this.state.isSideDrawerOpen });
    }

    toggleSideBar() {
        this.setState({ showSideBar: !this.state.showSideBar });
        console.log ("Toggle")
    }

    render() {
        const { showSideBar, smallView, extraSmallView, isSideDrawerOpen } = this.state

        let containerClass = 'side_container';
        if (smallView) containerClass = containerClass + ' mobileview';
        return (
            <div className = { containerClass }>
                <div className="sidebar_small_wrap"> 
                    { extraSmallView &&
                        <div className="sidebar_expand"> 
                            <div onClick={this.handleSideDrawer} className="expand_menu">
                                {
                                    !isSideDrawerOpen ?
                                    <IoIosArrowForward size={30}/>
                                    :
                                    <IoIosArrowBack size={30}/>
                                }
                                 
                            </div>
                        </div>
                    }
                     
                </div>
                <Router>
                    <div>
                        {/* extra small size */}
                        {
                            isSideDrawerOpen && extraSmallView && 
                            <div className="small_sidebar"> 
                                <ul>
                                    <li><Link to={'/'} className=""> <FcHome size={25}/> </Link></li>
                                    <li><Link to={'/history'} className=""> <FcTodoList size={25}/> </Link></li>
                                </ul>
                            </div>
                        }
                        
                        {/* small view design */}
                        {
                            smallView &&
                            <div className="small_sidebar"> 
                                <ul>
                                    <li><Link to={'/'} className=""> <FcHome size={25}/> </Link></li>
                                    <li><Link to={'/history'} className=""> <FcTodoList size={25}/> </Link></li>
                                </ul>
                            </div>
                        }

                        {/* large view design */}
                        {
                            showSideBar &&
                        
                            <div className="sidebar"> 
                                <ul>
                                    <li><Link to={'/'} className=""> Home </Link></li>
                                    <li><Link to={'/history'} className=""> History </Link></li>
                                </ul>
                            </div>
                        }

                        <div className="main">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/history' component={History}/>
                            </Switch>
                        </div>
                    </div>
                </Router> 
                
            </div>
        );
    }

}

export default Sidebar;
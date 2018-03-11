import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    removeDomainFromUrl(arr) {
        return arr.map((item, index) => {

            if(item.children) {
                item.children.map((item, index) => {
                    item.url = item.url.replace(/^.*\/\/[^\/]+/, '');
                    return item;
                });
            }

            if(item.url) item.url = item.url.replace(/^.*\/\/[^\/]+/, '')

            return item;

        });

    }

    componentWillMount() {
        // Fetch header from API
        fetch('')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.props.addHeaderMenu(data.items);

                // let filteredHeader = this.removeDomainFromUrl(data.items);
                // this.props.addFilteredHeaderMenu(filteredHeader);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <header className="header_">
                <div className="header-area">

                    <strong className="logo"><Link to="/">Amma Foundacion</Link></strong>

                    <a href="#" className="btn-menu"><span> </span></a>

                    <nav className="main-menu">

                        <div className="lang-switcher">
                            <a href="#">En</a>
                            <ul>
                                <li><a href="#">En</a></li>
                                <li><a href="#">Es</a></li>
                            </ul>
                        </div>

                        <div className="inner">
                            <ul className="main-nav">
                                <li id="menu-item-427"
                                    className="red menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-427">
                                    <Link to="/about-us/about-amma/">About us</Link>
                                    <ul className="sub-menu">
                                        <li id="menu-item-431"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-431">
                                            <Link to="/about-us/about-amma/">About
                                                AMMA</Link></li>
                                        <li id="menu-item-430"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-430">
                                            <Link to="/about-us/president-message/">President’s
                                                Message</Link></li>
                                        <li id="menu-item-429"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-429">
                                            <Link to="/about-us/our-team/">Our Team</Link>
                                        </li>
                                        <li id="menu-item-428"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-428">
                                            <Link to="/about-us/sister-associations/">Sister
                                                Associations</Link></li>
                                    </ul>
                                </li>
                                <li id="menu-item-432"
                                    className="yellow menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-432">
                                    <Link to="/about-the-collection/">The Collection</Link>
                                    <ul className="sub-menu">
                                        <li id="menu-item-433"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-433">
                                            <Link to="/about-the-collection/">About the
                                                Collection</Link></li>
                                        <li id="menu-item-434"
                                            className="menu-item menu-item-type-post_type_archive menu-item-object-artworks menu-item-434">
                                            <Link to="/artworks/">Artworks</Link></li>
                                        <li id="menu-item-2657"
                                            className="menu-item menu-item-type-post_type_archive menu-item-object-arts-crafts menu-item-2657">
                                            <Link to="/arts-crafts/">Arts and Crafts</Link>
                                        </li>
                                        <li id="menu-item-435"
                                            className="menu-item menu-item-type-post_type_archive menu-item-object-artists menu-item-435">
                                            <Link to="/artists/">Artists</Link></li>
                                        <li id="menu-item-436"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-436">
                                            <Link to="/art-loans/">Art loans</Link></li>
                                    </ul>
                                </li>
                                <li id="menu-item-437"
                                    className="green menu-item menu-item-type-post_type_archive menu-item-object-exhibitions menu-item-has-children menu-item-437">
                                    <Link to="/exhibitions/">Exhibitions</Link>
                                    <ul className="sub-menu">
                                        <li id="menu-item-438"
                                            className="menu-item menu-item-type-post_type_archive menu-item-object-exhibitions menu-item-438">
                                            <Link to="/exhibitions/">Current
                                                Exhibitions</Link></li>
                                        <li id="menu-item-439"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-439">
                                            <Link to="/exhibitions/?duration=upcoming">Upcoming
                                                Exhibitions</Link></li>
                                        <li id="menu-item-440"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-440">
                                            <Link to="/exhibitions/?duration=past">Past
                                                Exhibitions</Link></li>
                                    </ul>
                                </li>
                                <li id="menu-item-441"
                                    className="blue menu-item menu-item-type-post_type_archive menu-item-object-publications menu-item-441">
                                    <Link to="/publications/">Publications</Link></li>
                                <li id="menu-item-442"
                                    className="dark-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-442">
                                    <Link to="/programs/">Programs</Link>
                                    <ul className="sub-menu">
                                        <li id="menu-item-444"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-444">
                                            <Link to="/programs/scholarships/">Scholarships</Link>
                                        </li>
                                        <li id="menu-item-443"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-443">
                                            <Link to="/programs/financial-support/">Financial
                                                Support</Link></li>
                                        <li id="menu-item-445"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-445">
                                            <Link to="/programs/student-loans/">Student
                                                Loans</Link></li>
                                    </ul>
                                </li>
                                <li id="menu-item-446"
                                    className="purple menu-item menu-item-type-post_type menu-item-object-page menu-item-446">
                                    <Link to="/news/">News</Link></li>
                                <li id="menu-item-447"
                                    className="pink menu-item menu-item-type-post_type menu-item-object-page menu-item-447">
                                    <Link to="/contact-us/">Contact us</Link></li>
                            </ul>
                        </div>

                    </nav>

                </div>
            </header>
        )
    }
}

export default connect(
    (state) => ({
        store: state
    }),
    (dispatch) => ({
        addHeaderMenu: (data) => {
            dispatch({
                type: 'ADD_HEADER_MENU',
                payload: data
            })
        },
        addFilteredHeaderMenu: (data) => {
            dispatch({
                type: 'ADD_FILTERED_MENU',
                payload: data
            })
        }
    })
)(Header);
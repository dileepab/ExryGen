import {NavLink} from "react-router-dom";
import React from "react";

export default function Navigations() {
    let nav = [
        {
            label: 'Home',
            path: '/Home'
        }, {
            label: 'About us',
            path: '/AboutUs'
        }, {
            label: 'Our Services',
            path: '/OurServices'
        }, {
            label: 'Case Studies & Projects',
            path: '/CaseStudiesAndProjects'
        }, {
            label: 'Client Portfolio',
            path: '/ClientPortfolio'
        }, {
            label: 'Contact',
            path: '/Contact'
        }
    ]
    return (
        <>
            {nav.map((navItem, index) => (
                <NavLink className={({isActive}) => isActive ? "active nav-link" : "nav-link"} to={navItem.path} key={index}>{navItem.label}</NavLink>
            ))}
        </>
    )
}
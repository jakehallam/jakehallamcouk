import styled from "styled-components";

export const HomeHero = styled.section`
    .home-hero-container {
        align-items: center;
        background-size: cover !important;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        width: 100%;
    }

    .scroll-down {
        animation: fade_move_down 4s ease-in-out infinite;
        bottom: 30%;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        cursor: pointer;
        display: block;
        font-size: 20px;
        height: 40px;
        left: calc(50% - 20px);
        outline: none;
        position: absolute;
        text-decoration: none;
        transform: translate(-50%, 0%) rotate(45deg);
        text-shadow: 0;
        text-align: center;
        width: 40px;
        z-index: 9;
    }

    @keyframes fade_move_down {
        0% { transform: translate(0,-20px) rotate(45deg) }
        50% { transform: translate(0,20px) rotate(45deg) }
        100% { transform: translate(0,-20px) rotate(45deg) }
    }
`

export const HeadroomWrapper = styled.div`
    .headroom {
        left: 0;
        right: 0;
        top: 0;
        z-index: 14;
    }
    
    .headroom--unfixed {
        position: relative;
        transform: translateY(0);
    }

    .headroom--scrolled {
        transition: transform 400ms ease-in-out;
    }

    .headroom--unpinned {
        position: fixed;
        transform: translateY(-58px);
        transition: transform 400ms ease-in-out;
    }

    .headroom--pinned {
        position: fixed;
        transition: transform 400ms ease-in-out;
        transform: translateY(0%);
    }
`

export const HeaderButton = styled.button`
    color: #cbd5e0;
    display: inline-block;
    position: relative;

    &:focus {
        outline: none;
    }
    
    &:after {
        background-color: #cbd5e0;
        bottom: 0;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        width: 100%;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const AnimatedBg = styled.div`
    animation: fadeIn 1 1s ease-out;
    background: #1a202c;
    font-weight: 100;
    margin: 0;
    overflow: scroll;

    .light {
        position: absolute;
        width: 0px;
        opacity: .75;
        background-color: white;
        box-shadow: #e9f1f1 0px 0px 20px 2px;
        opacity: 0;
        top: 100vh;
        bottom: 0px;
        left: 0px;
        right: 0px;
        margin: auto;
    }

    .x1 {
        animation: floatUp 4s infinite linear;
        transform: scale(1.0);
    }

    .x2 {
        animation: floatUp 7s infinite linear;
        transform: scale(1.6);
        left: 15%;
    }

    .x3 {
        animation: floatUp 2.5s infinite linear;
        transform: scale(.5);
        left: -15%;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .x4 {
        animation: floatUp 4.5s infinite linear;
        transform: scale(1.2);
        left: -34%;
    }

    .x5 {
        animation: floatUp 8s infinite linear;
        transform: scale(2.2);
        left: -57%;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .x6 {
        animation: floatUp 3s infinite linear;
        transform: scale(.8);
        left: -81%;
    }

    .x7 {
        animation: floatUp 5.3s infinite linear;
        transform: scale(3.2);
        left: 37%;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .x8 {
        animation: floatUp 4.7s infinite linear;
        transform: scale(1.7);
        left: 62%;
    }

    .x9 {
        animation: floatUp 4.1s infinite linear;
        transform: scale(0.9);
        left: 85%;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    @-webkit-keyframes floatUp {
        0% { top: 100vh; opacity: 0; }
        25% { opacity: 1; }
        50% { top: 0vh; opacity: .8; }
        75% { opacity: 1; }
        100% { top: -100vh; opacity: 0; }
    }

    @-moz-keyframes floatUp{
        0%{top: 100vh; opacity: 0;}
        25%{opacity: 1;}
        50%{top: 0vh; opacity: .8;}
        75%{opacity: 1;}
        100%{top: -100vh; opacity: 0;}
    }

    @-o-keyframes floatUp{
        0%{top: 100vh; opacity: 0;}
        25%{opacity: 1;}
        50%{top: 0vh; opacity: .8;}
        75%{opacity: 1;}
        100%{top: -100vh; opacity: 0;}
    }

    @keyframes floatUp{
        0%{top: 100vh; opacity: 0;}
        25%{opacity: 1;}
        50%{top: 0vh; opacity: .8;}
        75%{opacity: 1;}
        100%{top: -100vh; opacity: 0;}
    }
`
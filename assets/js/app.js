/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

import Lazyloader from "./class/_Lazyloader";
import Cart from "./class/_Cart";
import Popup from "./class/_Popup";
import Cookies from "./class/_Cookies";
import Navigation from "./class/_Navigation";
import BackInStock from "./class/_BackInStock";
import ScrollAnimation from "./class/_ScrollAnimation";

document.addEventListener('DOMContentLoaded', () => {
    //Chargement différé des images
    new Lazyloader();

    //Popup Cookies
    const cookies = new Cookies();
    const cookiesPopup = document.getElementById('cookies-popup');
    if (cookiesPopup) {
        const popup = new Popup(cookiesPopup, {
            closeOnOverlayClick: false,
            display: false,
            customEvents: {
                '#cookies-popup .accept': () => {
                    cookies.set('_cookies_accepted', 'true');
                    //GTM
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KG57PLK');

                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                    //FB Pixel
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '638025883243333');
                    fbq('track', 'PageView');
                },
                '#cookies-popup .refuse': () => {sessionStorage.setItem('_cookies_accepted', 'false')},
            }
        });
        let cookiesRefused = sessionStorage.getItem('_cookies_accepted') === 'false';
        if (!cookiesRefused && cookiesPopup && !cookies.has('_cookies_accepted')) {
            popup.show();
        }
    }
    if (cookies.has('_cookies_accepted')) {
        //GTM
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KG57PLK');

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        //FB Pixel
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '638025883243333');
        fbq('track', 'PageView');
    }

    //Popup panier
    const cartPopup = document.getElementById('add-to-cart-popup');
    if (cartPopup) {
        const popup = new Popup(cartPopup, {
            buttons: [
                {
                    element: document.getElementById('continue-shopping')
                }
            ],
            display: false
        });
        new Cart({ popup })
    } else {
        new Cart();
    }

    //Module de recherche
    // new Search();

    //Sticky navbar masquée au scroll descendant, visible au scroll montant
    new Navigation({
        toggleButton: document.getElementById('navbarToggle'),
        navContent: document.getElementById('navbarContent'),
        collapseOnOuterClick: false,
    });
    const womanToggle = document.getElementById('womanToggle');
    new Navigation({toggleButton: womanToggle, navContent: womanToggle});
    const manToggle = document.getElementById('manToggle');
    new Navigation({toggleButton: manToggle, navContent: manToggle});
    const nav = document.getElementById('bt-navbar');
    let YOffset = window.pageYOffset;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > YOffset) {
            nav.classList.add('hide');
        } else {
            nav.classList.remove('hide');
        }
        YOffset = window.pageYOffset;
    });

    //Gestion de la remise en stock
    const backinstockElts = [].slice.call(document.getElementsByClassName('backinstock'));
    backinstockElts.forEach(backinstockElt => new BackInStock(backinstockElt));

    //Gestion des animations au scroll
    const animatedElts = [].slice.call(document.getElementsByClassName('animated'));
    animatedElts.forEach(animatedElt => new ScrollAnimation(animatedElt));

    //Gestion des show-more
    const showMoreElts = [].slice.call(document.getElementsByClassName('show-more'));
    showMoreElts.forEach(showMoreElt => showMoreElt.addEventListener('click', () => {
        if (showMoreElt.classList.contains('show')) {
            showMoreElt.classList.remove('show');
        } else {
            showMoreElt.classList.add('show');
        }
    }));
});

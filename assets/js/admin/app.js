/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../../css/admin/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

document.addEventListener('DOMContentLoaded', () => {
    //Toggle navbar
    document.getElementById('admin-nav__toggle').addEventListener('click', () => {
        let container = document.getElementById('admin-container');
        if (container.classList.contains('expanded')) {
            container.classList.remove('expanded');
        } else {
            container.classList.add('expanded');
        }
    });
});
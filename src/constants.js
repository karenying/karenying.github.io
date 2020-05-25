import Expresso from './Assets/expresso.png';
import Dayz from './Assets/dayz.png';
import Gradient from './Assets/gradient.png';
import ColorCharts from './Assets/colorcharts.png';
import DriversEd from './Assets/driversed.gif';
import React from 'react';

export const DARK_GRAY = '#333333';

export const DARK_PINK = '#FF7C7C';

export const LIGHT_PINK = '#FFB6B9';

export const BLUE = '#8DEAFF';

export const YELLOW = '#FFE084';

export const LIGHT_GRAY = '#D9D9D9';

export const projectInfo = [
    {
        backgroundColor: DARK_PINK,
        color: DARK_PINK,
        image: Gradient,
        name: 'gradient.png',
        type: 'static web page',
        stack: 'React',
        description: (
            <span>
                gradient.png is a custom image generation web app. It is a UI/UX
                redesign of{' '}
                <a href='https://cssgradient.io/' style={{ color: DARK_PINK }}>
                    CSS Gradient
                </a>
                . On top of redesigning the interface, I added a feature that
                allows the user to download the gradient as an image.
            </span>
        ),
        site: 'https://gradient-png.netlify.app/',
        code: 'https://github.com/karenying/gradient',
        paper: null,
    },
    {
        backgroundColor: LIGHT_PINK,
        color: '#E9A5A8',
        image: Dayz,
        name: 'dayz',
        type: 'full stack web app',
        stack: 'MongoDB + Express + React',
        description:
            'Dayz is a bullet journal style mood tracker. It utilizes a RESTful api to write and read data. This was my first solo full stack project. I thoroughly enjoyed implementing and deploying all the components from scratch.',
        site: 'http://dayz-app.herokuapp.com/',
        code: 'https://github.com/karenying/dayz',
        paper: null,
    },
    {
        backgroundColor: BLUE,
        color: '#72BECF',
        image: Expresso,
        name: 'expresso',
        type: 'full stack web app',
        stack: 'MySQL + Flask + React',
        description: (
            <span>
                'Expresso is an online-ordering app for Princeton University’s
                Coffee Club. Much like any online-ordering interface, the
                baristas are able to see the orders the students place. The
                students either pay in store when picking up, or use Princeton’s
                Student Charge.
                <br />
                <br />
                It launches in Fall 2020.
            </span>
        ),

        site: 'http://coffeeclub.princeton.edu/',
        code: null,
        paper: null,
    },
    {
        backgroundColor: YELLOW,
        color: '#DCC272',
        image: ColorCharts,
        name: 'color charts',
        type: 'Chrome extension',
        stack: 'JS',
        description:
            'Color Charts aims to increase the readability of charts, graphs, and diagrams on the web. It improves upon existing extensions by using researched color blind friendly palettes to recolor images. The recoloring algorithm uses HTML Canvas and base64 encoding to recolor images in place.',
        site: null,
        code: 'https://github.com/karenying/color-charts',
        paper:
            'https://github.com/karenying/color-charts/blob/master/src/assets/paper.pdf',
    },
    {
        backgroundColor: LIGHT_GRAY,
        color: '#9A9A9A',
        image: DriversEd,
        name: "driver's ed",
        type: 'three.js game',
        stack: 'JS',
        description:
            "Driver’s Ed is an infinite runner game. A student driver must navigate Princeton University's Washington Road to collect coins while avoiding obstacles such as students and the campus fox.",
        site: 'https://karenying.github.io/drivers-ed/',
        code: 'https://github.com/karenying/drivers-ed/',
        paper: null,
    },
];

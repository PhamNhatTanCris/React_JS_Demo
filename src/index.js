import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import hello from './hello';
import Demo from './Demo';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Car from './components/car'
import Moto from './components/moto';
// import Student from './components/strudent';

import Room from './components/room';

import Hanoi from './components/Hanoi';

import Arrow1 from './components/Arrow1';
import Arrow2 from './components/Arrow2';
import Arrow3 from './components/Arrow3';

import Demo1 from './Buoi_17/Demo1';

import Accordion from './Buoi_17/Accordion';

import GroupAc from './Buoi_17/GroupAccordion';

import Tab from './tabs/tab';

import M3 from './M3/M3';

import M4 from './Buoi_17/M4/M4';

import Cities from './Buoi_17/Cities';

import Login from './Buoi_17/logins';

import Contructerrr from './class_components/constructer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Moto brand="Honda" model="Wave alpha" color="green" year="2021"/> */}
    {/* <Student name="Phạm Nhật Tân" age="21" address="Nam Định"/> */}
    {/* <Room name_room="Phòng chat 501" created="28-6-2023"/> */}
    {/* <Hanoi name_city="hà Nội"/>  */}

    {/* <Arrow1 name="Hà Nội"/>
    <Arrow2 name="Nam Định"/>
    <Arrow3 name="Thái Bình"/> */}
    {/* <Contructerrr name="Máy tính asus"/> */}
    {/* <Demo1/> */}
    {/* <Accordion/> */}

    {/* <GroupAc/> */}
    {/* <Tab/> */}
    {/* <M3/> */}
    {/* <M4/> */}
    {/* <Cities/> */}
    <Login/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Top from "./components/Top";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";
import Project from "./components/Project/Project";
import {projects, data} from './data/Data';
import Footer from "./components/Footer/Footer";

export default class App extends React.Component<any> {
    render() {
        return (
            <div className="App">
                <Header/>
                <Top/>
                <div className="experience">
                    <div className="title">Experience</div>
                    <Tabs>
                        {data.map((item, index) => {
                            return <Tab key={index}
                                        location={item.location}
                                        period={item.period}
                                        position={item.position}
                                        responsibilities={item.responsibilities}
                                        name={item.name}
                            />
                        })}
                    </Tabs>
                </div>
                <div className="container" id="Projects">
                    <div className="title">Featured projects</div>
                    <div className="projectsList">
                        {projects.map((item, index) => {
                            return <Project key={index}
                                            image={item.image}
                                            links={item.links}
                                            name={item.name}
                                            stack={item.stack}
                                            text={item.text}
                            />
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

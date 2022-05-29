import React, { useState } from 'react';
import './Header.scss';
import { useTranslation } from 'react-i18next';

const Header: React.FC<any> = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("ru");
    const changeLanguageHandler: any = (evt: any) => {
        const lang = evt.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
        console.log(lang);
    }
    const toggleTheme = () => {
        console.log('toggled');
    }

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">EB.</div>
                    <ul className="header__links">
                        <li><a href="#projects" className="header__link">Projects</a></li>
                        <li><a href="#resume" className="header__link">Resume</a></li>
                        <li><a href="#contact" className="header__link">Contact</a></li>
                        <li>
                            <button onClick={changeLanguageHandler} value="ru">RU</button>
                            <span> / </span>
                            <button onClick={changeLanguageHandler} value="en">EN</button>
                        </li>
                        <li>
                            <button onClick={toggleTheme} className="header__btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
export default Header
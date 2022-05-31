import React, {useState} from 'react';
import './Header.scss';
import {useTranslation} from 'react-i18next';
import useLocalStorage from 'use-local-storage';

const Header: React.FC<any> = () => {
    const {t, i18n} = useTranslation();
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;
    const [menuIsOpened, setMenu] = useState(false);
    const [, setLanguage] = useState("ru");
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const changeLanguageHandler = (evt: any) => {
        const lang = evt.target.value;
        setLanguage(lang);
        return i18n.changeLanguage(lang);
    }

    const setBodyAttribute = () => {
        theme === 'light' ? body.setAttribute('data-theme', 'light') : body.setAttribute('data-theme', 'dark');
    }

    setBodyAttribute();

    const toggleMenu = () => {
        body.classList.toggle('noScroll');
        setMenu(!menuIsOpened);
    };

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setBodyAttribute();
    }

    const scroll = (evt: any) => {
        const elemId = evt.target.textContent;
        const elem: any = document.getElementById(`${elemId}`);
        elem.scrollIntoView();
    };

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <a href="/" className="header__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" fill="currentColor">
                            <path
                                d="M12.7361611,0.063952038 C13.2551391,0.263360331 13.5227261,0.869148905 13.3338336,1.41701869 L8.54555162,15.3051026 C8.35665911,15.8529724 7.78281676,16.1354563 7.26383885,15.936048 C6.74486095,15.7366397 6.47727387,15.1308511 6.66616638,14.5829813 L11.4544484,0.694897379 C11.6433409,0.147027596 12.2171832,-0.135456255 12.7361611,0.063952038 Z M2.41421356,8.25614867 L5.94974747,11.9885083 C6.34027176,12.4007734 6.34027176,13.0691871 5.94974747,13.4814522 C5.55922318,13.8937173 4.9260582,13.8937173 4.53553391,13.4814522 L0.292893219,9.0026206 C-0.0976310729,8.59035554 -0.0976310729,7.9219418 0.292893219,7.50967674 L4.53553391,3.03084515 C4.9260582,2.61858008 5.55922318,2.61858008 5.94974747,3.03084515 C6.34027176,3.44311021 6.34027176,4.11152395 5.94974747,4.52378901 L2.41421356,8.25614867 Z M17.5857864,8.25614867 L14.0502525,4.52378901 C13.6597282,4.11152395 13.6597282,3.44311021 14.0502525,3.03084515 C14.4407768,2.61858008 15.0739418,2.61858008 15.4644661,3.03084515 L19.7071068,7.50967674 C20.0976311,7.9219418 20.0976311,8.59035554 19.7071068,9.0026206 L15.4644661,13.4814522 C15.0739418,13.8937173 14.4407768,13.8937173 14.0502525,13.4814522 C13.6597282,13.0691871 13.6597282,12.4007734 14.0502525,11.9885083 L17.5857864,8.25614867 Z">
                            </path>
                        </svg>
                    </a>
                    <div onClick={toggleMenu}
                         className={`header__menuBtn ${menuIsOpened ? 'header__menuBtn--active' : ''}`}>
                        <span>line</span>
                        <span>line</span>
                        <span>line</span>
                    </div>
                    <ul className={`header__menu header__links ${menuIsOpened ? 'header__menu--active' : ''}`}>
                        <li onClick={scroll} className="header__link">Projects</li>
                        <li onClick={scroll} className="header__link">Contacts</li>
                        <li>
                            <button onClick={changeLanguageHandler} value="ru">RU</button>
                            <span> / </span>
                            <button onClick={changeLanguageHandler} value="en">EN</button>
                        </li>
                        <li>
                            <button onClick={switchTheme} data-theme="light" className="header__btn">
                                {theme !== 'light' ?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                                            />
                                    </svg> :
                                    <svg width="24" height="24" viewBox="0 0 35 35" fill="black"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/>
                                    </svg>
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
export default Header
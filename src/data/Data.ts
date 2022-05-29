export interface Props {
    image: any
    name: string
    links: string[]
    text: string
    stack: string
}

export interface tabProps {
    position: string
    period: string
    location: string
    responsibilities: string[]
    name: string
}

export const projects: (Props)[] = [
    {
        name: 'Zollaser',
        image: require('../assets/zollaser.PNG'),
        links: ['', 'https://zollaser.ru/'],
        stack: 'HTML - CSS - JS(Scrollmagic)',
        text: 'Exclusive Zollaser Distributor'
    },
    {
        name: 'Remer',
        image: require('../assets/remer.PNG'),
        links: ['', ''],
        stack: 'HTML - CSS - JS',
        text: 'Internet shop of faucets'
    },
    {
        name: 'YOD',
        image: require('../assets/yod.PNG'),
        links: ['', ''],
        stack: 'NuxtJS - SCSS',
        text: 'Website'
    },
    {
        name: 'Petmode',
        image: require('../assets/petmode.PNG'),
        links: ['', ''],
        stack: 'NuxtJS - SCSS',
        text: 'Internet shop of pets'
    },
    {
        name: 'Agro smart assistant',
        image: require('../assets/agro-sa-crop-rotation.jpg'),
        links: ['', 'https://agro-sa.ru/lk/fields'],
        stack: 'HTML - CSS - JS(Leaflet, D3)',
        text: 'Morphometry'
    },
    {
        name: 'Website for teacher',
        image: require('../assets/train.PNG'),
        links: ['', ''],
        stack: 'HTML - CSS - JS',
        text: 'Technical and judicial examination of railway transport'
    },
    {
        name: 'This portfolio',
        image: require('../assets/remer.PNG'),
        links: ['', ''],
        stack: 'React - TS - i18n - SCSS',
        text: 'Just for fun'
    }
]
export const data: (tabProps)[] = [
    {
        position: 'Frontend Developer (Remote)',
        period: 'Oct 2019 - Nov 2019',
        location: 'Moscow / Russia',
        responsibilities: ['- Developing UI using Scrollmagic library'],
        name: 'Zollaser'
    },
    {
        position: 'Frontend Developer (Remote)',
        period: 'Feb 2022 - Apr 2022',
        location: 'Moscow / Russia',
        responsibilities: ['- Developing UI'],
        name: 'Remer'
    },
    {
        position: 'Frontend Developer (Remote)',
        period: 'May 2021',
        location: 'Moscow / Russia',
        responsibilities: ['- Developing UI'],
        name: 'YOD'
    },
    {
        position: 'Frontend Developer (Remote)',
        period: 'Jan 2021 - Jun 2021',
        location: 'Moscow / Russia',
        responsibilities: ['- Developing UI'],
        name: 'Petmode'
    },
    {
        position: 'Frontend Developer (Remote)',
        period: 'Nov 2021 - Apr 2022',
        location: 'Moscow / Russia',
        responsibilities: ['- Developing UI', '- Learned how to solve big tasks', '- Learned how to work in a team'],
        name: 'Agro smart assistant'
    },
    {
        position: 'Frontend Developer (Remote)',
        period: 'Aug 2019 - Mar 2022',
        location: 'Moscow / Russia',
        responsibilities: ['- Developing small games using JS and later VueJS(Router, Vuex, i18n)', '- Developing dating apps', '- Developing sport apps', '- While worked learning VueJS'],
        name: 'Many small apps'
    }
]

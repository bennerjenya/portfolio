import React, {ReactElement, useState} from "react"
import TabTitle from "./TabTitle"

interface Props {
    children: ReactElement[]
}

const Tabs: React.FC<Props> = ({children}) => {
    const [selectedTab, setSelectedTab] = useState<number>(0)

    return (
        <div className={'tabs'}>
            <ul className={'tabs__buttonsList'}>
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.name}
                        index={index}
                        setSelectedTab={setSelectedTab}
                        selectedTab={selectedTab}
                    />
                ))}
            </ul>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs
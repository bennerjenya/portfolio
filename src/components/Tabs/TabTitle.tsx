import { useCallback, FC } from 'react';

interface Props {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  selectedTab: number;
}

const TabTitle: FC<Props> = ({title, setSelectedTab, index, selectedTab}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li>
      <button className={`tab__button ${selectedTab === index ? 'active' : ''}`} onClick={onClick}>
        {title}
      </button>
    </li>
  );
};

export default TabTitle;

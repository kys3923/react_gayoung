import { useState } from 'react'
import TabList1 from '../../components/tabComponents/tabList1'
import TabList2 from '../../components/tabComponents/tabList2'
import TabList3 from '../../components/tabComponents/tabList3'

const TabContainer = (props) => {

  const [ currentTab, setCurrentTab ] = useState('list1')

  const boxStyle = 'w-[33%] flex justify-center text-center p-2 bg-gray-400 text-white hover:cursor-pointer hover:bg-gray-800'

  const clickHandler = (e, listNumber) => {
    setCurrentTab(listNumber) //immutable object
  }

  const displayComponent = (listNumber) => {
    if(listNumber === 'list1') {
      return <TabList1 />
    }
    if(listNumber === 'list2') {
      return <TabList2 />
    }
    if(listNumber === 'list3') {
      return <TabList3 />
    }
  }

  return (
    <div>
      <p>TabContainer</p>
      <ul className='flex flex-row w-full gap-4'>
        <li className={boxStyle} onClick={(e) => clickHandler(e, 'list1')}>list1</li>
        <li className={boxStyle} onClick={(e) => clickHandler(e, 'list2')}>list2</li>
        <li className={boxStyle} onClick={(e) => clickHandler(e, 'list3')}>list3</li>
      </ul>
      <div>
        {displayComponent(currentTab)}
      </div>
    </div>
  );
}
export default TabContainer;
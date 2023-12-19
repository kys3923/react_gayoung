import { MdHome, MdList, MdCalculate } from "react-icons/md";

const Header = () => {

  const listStyle = 'hover:font-bold'
  const listTextStyle = 'flex flex-row gap-1 items-center'

  return (
    <header className="bg-blue-100 p-3">
      <ul className="flex flex-row gap-2">
        <li className={listStyle}><a href='/' className={listTextStyle}><MdHome />Home</a></li>
        <li className={listStyle}><a href='/list' className={listTextStyle}><MdList />List</a></li>
        <li className={listStyle}><a href='/tab' className={listTextStyle}><MdList />Tab</a></li>
        <li className={listStyle}><a href='/calc' className={listTextStyle}><MdCalculate />Calculator</a></li>
      </ul>
    </header>
  )
}
export default Header
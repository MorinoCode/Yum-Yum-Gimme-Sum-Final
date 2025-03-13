import SauceButton from '../SauceButton/SauceButton'
import {  useSelector } from 'react-redux';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import './MenuItemSauce.scss'

const MenuItemSauce = () => {
  const menuList = useSelector((state) => state.menu.menuList);
  return (

    <section className="MenuItemSauceContainer">

      <article className="MenuItemSauceTitlePrice">

        <h2>DipSås</h2>
        <h2>19 SEK</h2>

      </article>

      <article className="MenuItemSauceButtons">

      {menuList?.length ? (
          menuList
            .filter((menuItem) => menuItem.type === "dip")
            .map((menuItem) => <SauceButton key={menuItem.id} {...menuItem} />)
        ) : (
          <LoadingSpinner />
        )}

      </article>
    </section>
  )
}

export default MenuItemSauce
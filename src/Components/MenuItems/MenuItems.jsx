import "./MenuItems.scss";
import MenuItemFood from "../MenuItemFood/MenuItemFood";
import MenuItemSauce from "../MenuItemSauce/MenuItemSauce";
import MenuItemDrink from "../MenuItemDrink/MenuItemDrink";
import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const MenuItems = () => {
  const menuList = useSelector((state) => state.menu.menuList);
  const {theme} = useSelector(state => state.theme)

  return (
    <section className={`menuItemsContainer ${theme}`}>
      <article className="menuItemsTitle">
        <h1>MENY</h1>
      </article>
      <article className="menuItemsList">
        {menuList?.length ? (
          menuList
            .filter((menuItem) => menuItem.type === "wonton")
            .map((menuItem) => <MenuItemFood key={menuItem.id} {...menuItem} />)
        ) : (
          <LoadingSpinner />
        )}
        <MenuItemDrink />
        <MenuItemSauce />
      </article>
    </section>
  );
};

export default MenuItems;

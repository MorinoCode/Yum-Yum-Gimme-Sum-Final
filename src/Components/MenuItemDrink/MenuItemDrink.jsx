import DrinkButton from "../DrinkButton/DrinkButton";
import { useSelector } from "react-redux";
import "./MenuItemDrink.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const MenuItemDrink = () => {
  const menuList = useSelector((state) => state.menu.menuList);
  return (
    <section className="MenuItemDrinkContainer">
      <article className="MenuItemDrinkTitlePrice">
        <h2>Drink</h2>
        <h2>19 SEK</h2>
      </article>

      <article className="MenuItemDrinkButtons">
        {menuList?.length ? (
          menuList
            .filter((menuItem) => menuItem.type === "drink")
            .map((menuItem) => <DrinkButton key={menuItem.id} {...menuItem} />)
        ) : (
          <LoadingSpinner />
        )}
      </article>
    </section>
  );
};

export default MenuItemDrink;

import { Component } from 'react'; //(крок 1) Імпортувати з react класс Components

import styles from './navbar-menu.module.scss';

import { NavLink } from 'react-router-dom';

//(крок 2) Створити дочірній клас від класу Components, прописавши в ньому метод render,
//який повертає HTML-розмітку компонента

//(крок 3) Вставити в розмітку пропси, якщо у компонента вони є (пропси) брати із this.props.

//(крок 4) Продумати структуру state (внутришний стан компоненту, який впливає на його зовн.вигляд)
// У state завжди є о'бєкт.

//(крок 5) Перепишіть render так щоб HTML залежала від this.state.

//(крок 6) Стоврить функцію - обробник подій, як метод класу. Вона має змінювати state через метод this.setState.

//(крок 7) Додайте її як обробник подій на елемент HTML розмітки в render.

class NavbarMenu extends Component {
  state = {
    activeIndex: 0,
  };

  hadleClick(index) {
    this.setState({
      activeIndex: index,
    }); //this.state = {activeIndex: index}
  }

  render() {
    const { items } = this.props;
    //const {activeIndex} = this.state;

    const elements = items.map(({ id, link, text }) => {
      //компонент link відповідає за те, щоб змінити адресу без перезавантаження
      return (
        <li key={id}>
          <NavLink to={link} className={styles.link}>
            {text}
          </NavLink>
        </li>
      );
    });

    return <ul className={styles.menu}>{elements}</ul>;
  }
}

export default NavbarMenu;

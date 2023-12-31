import { Component } from "react";
import { nanoid } from "nanoid";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";
import MyBooksPages from "./MyBooksPages/MyBooksPages";
import MyBooksForm from "../MyBooks/MyBooksForm/MyBooksForm";

import styles from "./my-books.module.scss";

class MyBook extends Component {
    state = {
        items: [
            // {
            //     id: "1",
            //     title: "Worm",
            //     author: "John C. McCrae"
            // },
            // {
            //     id: "2",
            //     title: "Ward",
            //     author: "John C. McCrae"
            // },
        ],
        filter: "",
    }

        onAddBook = ({title, author}) => {
            if(this.isDublicate({title, author})) {
                return alert(`${title} - ${author} is already exist`);
            }
            this.setState(prevState => {
                const {items} = prevState;
                const newBook = {
                    id: nanoid(),
                    title,
                    author,
                }

                return {items: [...items, newBook]}
            })
        }

        onDeleteBook = (id) => {
            this.setState(prevState => {
                const newItems = prevState.items.filter(item => item.id !== id);
                return {
                    items: newItems,
                }
            })

        }

        isDublicate({title, author}) {
            const {items} = this.state;
            const normalizedTitle = title.toLowerCase();
            const normalizedAuthor = author.toLowerCase();
            const dublicate = items.find(item => {
                return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
            });

            return Boolean(dublicate);
        }

        getFilteredBooks(){
            const {filter, items} = this.state;
            if(!filter) {
                return items;
            }
            const normalizedFilter = filter.toLowerCase();
            const result = items.filter(({title, author}) => {
                return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
            })

            return result;
        }
    

    render() {
        const items = this.getFilteredBooks();

        return (
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My Books</h3>
                <div className={styles.block}>
                    <MyBooksBlock title="Add new book">
                        <MyBooksForm onSubmit={this.onAddBook}/>
                    </MyBooksBlock>
                    <MyBooksBlock title="Book list">
                        <input name="filter" onChange={this.handleChange} className={styles.textField} placeholder="enter book or author" />
                        <MyBooksPages items={items} onDeleteBook={this.onDeleteBook}/>
                    </MyBooksBlock>
                </div>
            </div>
        )
    }

}

export default MyBook;
import { BookList } from "../cmps/BookList.jsx";
import { BookAdd } from "../cmps/BookAdd.jsx";
import { UserMsg } from "../cmps/UserMsg.jsx";


export class BookPage extends React.Component {
    render() {
        return (
            <main>
                <BookAdd/>
                <BookList/>
                <UserMsg/>
            </main>
        )
    }
}

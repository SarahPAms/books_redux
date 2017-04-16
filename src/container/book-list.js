import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={()=> this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStatetoProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books //can be deconstructed
  };
}
// ANything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called the result shouldbe  passed to all reducers
  return bindActionCreators ({selectBook: selectBook }, dispatch);
}
// promote BookList from a component to a container- it needs to know about the new dispatch method, selectBook. Make it available as a prop
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);

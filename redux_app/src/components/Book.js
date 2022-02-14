import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';
import Button from '@material-ui/core/Button';

const Book = ({ id, title, description, author, published, dispatch }) => (
    <div>
        <Link to={`/book/${id}`}>
            <h4>{title} ({published})</h4>
        </Link>
        <p>Author: {author}</p>
        {description && <p>{description}</p>}
        <Button variant="contained" color="secondary" onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</Button>
    </div>
);

export default connect()(Book);
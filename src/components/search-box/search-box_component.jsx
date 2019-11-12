import React from 'react';

import './search-box_styles.css';

/**functional component
 * don't have access to:
 *   state since they don't have access to constructor
 *   lifecycle methods like componentDidMount
 *
 * Used to simply render some html
 * It gets some props and returns html
 *
 * If you don't need internal state or lifecycle methods, use a functional component
 *
 */

//all props come in as one big object
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    //the function that was passed in as a prop
    onChange={handleChange}
  />
);

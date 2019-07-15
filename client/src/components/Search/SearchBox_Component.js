/*
 * Authors: Austin Vanburen
 * Description: HTML code injection for a custom SearchBox component.
 */

import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa0 w-70'>
			<input className='pa2 w-100 b--greeen bg-lightest-blue' 
				   type='search'
				   placeholder='Search'
				   onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;

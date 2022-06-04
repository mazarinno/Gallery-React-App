import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const DataContainer = props => {
	
	const results = props.data;
	let photos;
	if (results.length > 0) {
		photos = results.map(photo => <Photo url={"https://live.staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} key={photo.id}/>);
	} else {
		photos = <NotFound />
	}

	return (
		<div class="photo-container">
	    	<ul>
	      	  {photos}
	    	</ul>
    	</div>
	);
}

export default DataContainer;
walkNodes( document.body );

function doSubstitutions( textNode ) {
	var thisText = textNode.nodeValue;
	thisText = thisText.replace( /\bThe Cloud\b/g, "My Butt" );
	thisText = thisText.replace( /\bThe cloud\b/g, "My butt" );
	thisText = thisText.replace( /\bthe Cloud\b/g, "my Butt" );
	thisText = thisText.replace( /\bthe cloud\b/g, "my butt" );
	thisText = thisText.replace( /\bThe Clouds\b/g, "Everyone's Butt" );
	thisText = thisText.replace( /\bThe clouds\b/g, "Everyone's butt" );
	thisText = thisText.replace( /\bthe Clouds\b/g, "everyone's Butt" );
	thisText = thisText.replace( /\bthe clouds\b/g, "everyone's butt" );
	thisText = thisText.replace( /\bCloud Computing\b/g, "Butt Scratching" );
	thisText = thisText.replace( /\bCloud computing\b/g, "Butt scratching" );
	thisText = thisText.replace( /\bcloud Computing\b/g, "butt Scratching" );
	thisText = thisText.replace( /\bcloud computing\b/g, "butt scratching" );
	textNode.nodeValue = thisText;
}

function walkNodes( node ) {
	var thisChild, thisNext;
	switch( node.nodeType ) {
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			thisChild = node.firstChild;
			while( thisChild ) {
				thisNext = thisChild.nextSibling;
				walkNodes( thisChild );
				thisChild = thisNext;
			}
			break;

		case Node.TEXT_NODE:
			doSubstitutions( node );
			break;
	}
}


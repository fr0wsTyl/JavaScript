//Creating module with function expression + IIFE
var domModule = (function() {
    //Create function for append new element to given selector
    function append(el, selector) {
    	var identifier;
        identifier = document.querySelector(selector);
        identifier.appendChild(el);
    }

    //Create function for removing elements
    function remove(sel, el) {
        var selector,
            element
            selector = document.querySelector(sel);
        element = document.querySelector(el);
        selector.removeChild(element);
    }

    //Create function for attachEvent..
    function event (el, eventType, doStuff) {
    	var element;
    	element = document.querySelector(el);
    	element.addEventListener(eventType, doStuff);
    }

    //Append into buffer and then in selector
    function bufer (container, elements) {
    	var container,
    		buf;
    	buf = document.createElement('div');
    	container = document.querySelector(container);
    	while(elements < 100) {
    		elements.cloneNode(true);
    		buf+=elements;
    	}
    	container.appendChild(buf);
    }

    //Returning module
    return {
        addTo: append,
        removeEl: remove,
        add: event,
        appendToBuffer: bufer
    }
})();

//Creating new element
var div = document.createElement('div');
div.className += ' new-element';
div.innerHTML = 'This is added element ( DIV ) inside selector div#wrapper ';

//Using our Module append element to selector
domModule.addTo(div, '#wrapper');

//Timeout for remove element inside selector
setTimeout(function() {
	//Using Module remove element
    domModule.removeEl('ul', 'li:first-child')
}, 1300);

//Using Module we attach event to selector
domModule.add('ul', 'click', function () {
	alert('clicked');
})

var navItem = document.createElement('li');

// domModule.appendToBuffer("#wrapper", div.cloneNode(true));
domModule.appendToBuffer("#main-nav ul", navItem);
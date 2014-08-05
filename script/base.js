/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * Some basic functions to help generate elements in a webpage.
 */

// This function takes the name of a CSS class and creates a <div>
// element with that class. It will returns the <div> element.
// If no class name is provided, it will just create a <div> element
// with no attributes.
function createDiv(className) {
  var div = document.createElement('DIV');
  
  if (className !== undefined) {
    div.setAttribute('class', className);
  }
  
  return div;
};

// This function takes a link, a width in pixels, and a height in pixels,
// respectively, and creates an <img> element with the given src, width,
// and height. This function returns the <img> element.
// If no width and height are specified, the image will default to the size
// of the given image.
function createImg(src, width, height) {
  var img = document.createElement('IMG');
  img.setAttribute('src', src);
  
  if (width !== undefined) {
    img.setAttribute('width', width);
  }
  if (height !== undefined) {
    img.setAttribute('height', height);
  }
  
  return img;
};

// This function takes a link and creates an <a> element directing to the
// given link. This returns the <a> element.
// If no link is given, it will return an <a> element with no attributes.
function createA(href) {
  var a = document.createElement('A');
  
  if (href !== undefined) {
    a.setAttribute('href', href);
  }
  
  return a;
};

// This function takes a parent element and some text as arguments,
// respectively, and appends a text node with specified text to the
// parent element.
function addText(parent, text) {
  var textNode = document.createTextNode(text);
  parent.appendChild(textNode);
};

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)

  // Speed & Easing
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  offset: 55, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  easing: 'easeInOutCubic', // Easing pattern to use
  customEasing: function (time) {}, // Function. Custom easing pattern

  // Callback API
  before: function () {}, // Callback to run before scroll
  after: function () {} // Callback to run after scroll
});


// active menu links
gumshoe.init({
  selector: '[data-gumshoe] a', // Default link selector (must use a valid CSS selector)
  selectorHeader: '[data-gumshoe-header]', // Fixed header selector (must use a valid CSS selector)
  container: window, // The element to spy on scrolling in (must be a valid DOM Node)
  offset: 0, // Distance in pixels to offset calculations
  activeClass: 'menu-link--isActive', // Class to apply to active navigation link and its parent list item
  scrollDelay: true, // Wait until scrolling has stopped before updating the navigation
  callback: function (nav) {} // Callback to run after setting active link
});


// responsive-nav
var nav = responsiveNav(".menu", { // Selector
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 300, // Integer: Speed of the transition, in milliseconds
  label: "Menu", // String: Label for the navigation toggle
  insert: "after", // String: Insert the toggle before or after the navigation
  customToggle: "#toggle", // Selector: Specify the ID of a custom toggle
  closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
  openPos: "relative", // String: Position of the opened nav, relative or static
  navClass: "menu", // String: Default CSS class. If changed, you need to edit the CSS too!
  navActiveClass: "menu--isActive", // String: Class that is added to <html> element when nav is active
  jsClass: "js", // String: 'JS enabled' class which is added to <html> element
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});


// mixitup
var mixer = mixitup('.works-itemWrapper', {
    classNames: {
        block: 'filter',
        elementFilter: 'item',
        modifierActive: 'isActive',
        delineatorModifier: '--'
    }
});

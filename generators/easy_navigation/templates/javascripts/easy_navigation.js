var EasyNavigation = Class.create();
EasyNavigation.prototype = {

  timeout: null,
  menu: null,

  initialize: function(navigation) {
    $(navigation).select('li.tab.drop, li.tab div').each(
      function(node) {
        Event.observe(node, 'mouseover', this.displayMenu.bind(this));
        Event.observe(node, 'mouseout', this.hideMenu.bind(this));
      }.bind(this)
    );
  },

  displayMenu: function(event) {
    clearTimeout(this.timeout);
    this.menu = $(Event.element(event)).up('.tab div') ||
      $(Event.element(event)).down('.tab div') ||
      $(Event.element(event)).next('.tab div');
    if (this.menu.style.display == 'none')
      this.toggleMenu(this.menu);
  },

  hideMenu: function(event) {
    if (this.menu.style.display == 'none') {
      clearTimeout(this.timeout);
    } else {
      this.timeout = window.setTimeout(this.toggleMenu.bind(this, this.menu), 1000);
    }
  },

  toggleMenu: function(element) {
    Effect.toggle($(element), 'slide', {duration: 0.3});
  }

}

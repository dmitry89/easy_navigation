class EasyNavigationGenerator < Rails::Generator::Base
  attr_accessor :controllers
  def manifest

    record do |m|

      # CSS rules for EasyNavigation
      m.directory("public/stylesheets/sass")
      m.template "stylesheets/sass/easy_navigation.sass", "public/stylesheets/sass/easy_navigation.sass"

      # Javascript for horizontal dropdown menu's
      m.directory("public/javascripts")
      m.template "javascripts/easy_navigation.js", "public/javascripts/easy_navigation.js"

      m.directory("public/images/easy_navigation")
      m.file "images/arrow.png", "public/images/arrow.png"

    end
  end
end

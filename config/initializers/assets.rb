# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( chart.js owl_carousel.js owl.carousel.css owl.theme.css pickme.js pickme.css jquery_package.js )
Rails.application.config.assets.precompile += %w( rehearsal.js)
Rails.application.config.assets.precompile += %w( rehearsal.css )
Rails.application.config.assets.precompile += %w( rehearsal_sign.js )
Rails.application.config.assets.precompile += %w( jquery.vticker.min.js )
Rails.application.config.assets.precompile += %w( rehearsal_sign.css )
Rails.application.config.assets.precompile += %w( fakeloader.css )
Rails.application.config.assets.precompile += %w( loading/fakeloader.js )
Rails.application.config.assets.precompile += %w( loading/pace.js )

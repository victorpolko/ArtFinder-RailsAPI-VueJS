source 'https://rubygems.org'

ruby '2.4.0'
gem 'rails', '~> 5.0.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Database
gem 'pg'

# Utils
gem 'jbuilder',    '~> 2.5'
gem 'kaminari',    '~> 1.0.1'
gem 'paperclip',   '~> 4.3.7'
gem 'puma',        '~> 3.0'
gem 'rack-cors',   require: 'rack/cors'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'awesome_print'
  gem 'listen',                '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

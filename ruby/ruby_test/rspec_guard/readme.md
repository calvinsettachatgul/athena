# Testing Ruby

# guard-rspec gem

Add the gem to your Gemfile (inside development group):

    group :development do 
         gem 'guard-rspec', require: false
    end

putting the above them in your Gemfile will also install rspec dependencies

initialize guard file 

    bundle exec guard init rspec

# rspec gem

run rspec manually

    rspec spec

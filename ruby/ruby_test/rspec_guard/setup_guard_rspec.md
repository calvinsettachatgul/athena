# resource
https://github.com/guard/guard-rspec

# make the directory a git repository
git init

# initialize bundler Gemfile
bundle init

# add guard-rspec to Gemfile in development group this installs the rspec dependencies as well 
group : development do 
    gem 'guard-rspec', require: false
end

# install gems
bundle install


# configure Guardfile creates a Guardfile 
bundle exec guard init rspec

# use this for Guard example watching src and spec folders
group :backend do
    guard 'rspec', cmd: "bundle exec rspec" do
    # watch /src/ files
      watch(%r{^src/(.+).rb$}) do |m|
        "spec"
      end

    # watch /spec/ files
      watch(%r{^spec/(.+).rb$}) do |m|
        "spec/#{m[1]}.rb"
      end
    end
end

# watch for changes in _spec files and src files in spec and src directories
mkdir spec src

# create a spec_helper.rb file in spec folder 
touch spec/spec_helper.rb
# create test_spec.rb files for unit tests
touch spec/test_spec.rb
# create model.rb src code files in src
touch src/model.rb
touch src/model2.rb

# create some tests 
touch spec/model_spec.rb
touch spec/model2_spec.rb

# add model dependencies in spec_helper.rb
require_relative "../src/model.rb"
require_relative "../src/model2.rb"

# organize dependencies with spec_helper.rb
# require any models in spec_helper.rb so instances can be created 
# in any _spec.rb created require the spec_helper.rb
require_relative 'spec_helper'

model_spec.rb
------------------------------
require_relative "spec_helper"

describe "test group description" do 
    it "should have this behavior" do 
       expect(execution_with_return_value).to eq(expected_result) 
    end
end 




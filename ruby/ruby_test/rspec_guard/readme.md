Gauard setup script 
------------------------------

sets up a project directory 
with git version control 
Gemfile setup with guard-rspec in development
Guardfile

makes 2 directories src and spec
guard watches for changes in these folders

makes a src/model.rb file  
makes a spec/model_spec.rb file 
makes a spec/spec_helper.rb file 


Gemfile added
------------------------------
group :development do
    gem 'guard-rspec', require: false
end


Guardfile added
------------------------------
group :backend do
    guard 'rspec', cmd: "bundle exec rspec" do
      watch(%r{^src/(.+).rb$}) do |m|
        "spec"
      end

      watch(%r{^spec/(.+).rb$}) do |m|
        "spec/#{m[1]}.rb"
      end
    end
end


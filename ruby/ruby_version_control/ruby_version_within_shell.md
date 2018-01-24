ruby version in shell session can be set with 

rbenv shell <ruby_version_installed>
example: rbenv shell 2.5.0

after starting irb

output the ruby version by executing the environment variable 
RUBY_VERSION

rbenv shell
Sets a shell-specific Ruby version by setting the RBENV_VERSION environment variable in your shell. This version overrides application-specific versions and the global version.

$ rbenv shell jruby-1.7.1
When run without a version number, rbenv shell reports the current value of RBENV_VERSION. You can also unset the shell version:

$ rbenv shell --unset
Note that you'll need rbenv's shell integration enabled (step 3 of the installation instructions) in order to use this command. If you prefer not to use shell integration, you may simply set the RBENV_VERSION variable yourself:

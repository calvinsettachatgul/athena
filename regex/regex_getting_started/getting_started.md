# Regex

11/30/2015 10:26 AM

* Regex means Regular Expression a syntax that is used to search for and characterize strings

* delimited by two forward slashes /regex goes here/

* search for a string with matching content
  * you can search for the match string "string" in the following sentence "The cat chased the string"
  * "The cat chased the string."[/string/]
    * the output is the string "string"
    * the output of "The cat chased the string."[/hello/] => nil means that there was no string found matching the regular expression /hello/ within the sentence "The cat chased the string."

  * another syntax using the match method
    * regex.match(string)
    * /string/.match("The cat chased the string.") => "string"
    * /needle/.match("We're in a haystack.") => nil
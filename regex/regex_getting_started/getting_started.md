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

  * ? optionality character
    * example: "abcdef"[/abz?/] => "ab"

12/01/2015 12:38 PM

## More of the regex basics

* . a wild card any one character except line breaks
  * gre.t
* [] character set, any one character listed inside []
  * gr[ea]y
* [^ ] negative character set any one character not listed inside the []
  * [^aeiou]
- range indicator when inside a character set
  * [A-Za-z0-9]
* * Preceding element can occur zero or more times
  * file_*name
* + preceding element can occur one or more times * extended regex syntax
  * gro+ve
* ? preceding element can occur zero or more times * extended regex syntax
  * colou?r
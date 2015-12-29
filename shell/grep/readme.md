##  Grep
12/26/2015 12:22 PM

#  Grep is a tool for searching for strings

### Example syntax for grep

*  grep 'word' filename
*  grep 'word' file1 file2 file3
*  grep 'string1 string2'  filename
*  grep --color 'data' fileName


###  grep option flags

*  -r means recursively

*  > grep -r "search term" parent_directory

  *  in this case the -r flag is used to recursively search in the the path of the parent directory and any children directories for files that contain the string "search term"

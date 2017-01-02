## VIM

### Some Simple Vim Navigation

Command mode

*Note:* Navigation for left down up right.  Must be in command mode press continuously to repeat.

* h left
* j down
* k up
* l right

* H high ( top of terminal window )
* M middle ( mid of window )
* L low ( bottom of window )



### Editing

Command mode

*Note:* Navigation for left down up right.  Must be in command mode press continuously to repeat.

Returns to Command mode

* x delete one character under the cursor and stays in command mode
* r replace one character under the cursor with another character
* R replace from command mode to escape

## Composed Commands

Remains in Command mode

Action + Modifier + Noun

Examples:

* diw Delete + Inside + Word
* ci{ Change + Inside + {
* cip Change + Inside + Paragraph
* dt{ Delete + Till + {

* ciw change in word
* diw delete in word
* dip delete in paragraph
* dt{ delete until {

the paragraph block starts below this line paragraphs are separated by a blank line

```
{hello} // try ci{ here on any part of the expression
	this is a paragraph // navigate to any word and try ciw and diw
	a paragraph is this // move to any part of this entire block and try dip
hello
```

this won't get deleted if you use dip

# steps 
i found `\n{3,}  i replaced with `\n\n`

I found `^+` and replaced it with nothing to get rid of the spaces  
i found `^.+` and replaced it with `<line> \0 </line>`


found `<line>(\w+)</line>` replaced with`</sonnet>\n<sonnet n="\1">`

I am having trouble finding the roman numerals when I do [IVXLC]+  it highlights random letters within the documents and does not get the roman numerals at all: 
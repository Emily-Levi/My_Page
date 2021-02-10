#Bithedale 

find `&` replace with &amp;
Find `\n\n(.)` replace `</p>\n\n<p>\1`

for the titles 
i tried finding `[A-Z]{2,}` this also highlighted roman numerals and not the whoe title 
Text
tried `<p>[A-Z]{3,}[\.\s]`
Tried `<p>[A-Z]{3,}.+</p>``
Find <p>([A-Z]{1,}\..+)</p> replaced with <title>\1</title>
Find `"(.*?)"` replace `<quote>\0</quote>`
tried `</title>(\n\n<p>.+)<title>`

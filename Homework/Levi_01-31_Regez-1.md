# regex steps for coverting movie data to XML

First: I found ^.+ I then replaced it with <movie> /0</movie tag all the movies
second I found (<movie>)(.+?)\t the i replaced it with \1<title>\2</title> tag the titles 
Third I used the expression \d+ [a-z]+I then replace it with <time> \0 </time> 
fouth i used the expression (</title>)(.+?)\s find the years. then I  replaced it with \1<year>\2</year> 
fourth i used the expression (</year>)(.+?)\t i then replaced it with \1<location>\2</location> tag the locations
fith i found & and replaced with &amp;
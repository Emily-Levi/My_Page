# Mulan 
find `^ +` replace 
find `\n{3,}` replace `\n\n`
find `(^.+?)(\n{2})` replace `<sp>\1</sp>\2`
find `\[(.+?)\]` Replace `<stage>\1</stage>`
find `<sp>(<stage>.+?</stage>)</sp>` replace `\1`
find `(<sp><speaker>)(.+?)</speaker>` replace `\1<speaker>\2</speaker>`
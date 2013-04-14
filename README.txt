git add *

git commit -a -m "whatever"
This is the best way to commit each time

git rm --cached readme.txt
This is how you remove a staged file, but keep the original (eg. accidentally staged a BIN)

git mv readme.txt README
This is how you would rename a file


git log -p -2
Shows what how the files changed over the course of the last two commits

git push origin master
when you want to publish your stuff
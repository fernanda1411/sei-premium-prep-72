# sei-premium-prep-72



## Run local server

Go to project folder
```
cd ~/Projects/sei-premium-prep-72
```

Open VS Code
```
code . 
```

Open Live Server

1) On VS Code press `command + shift + p`
2) Type `Live Server` and press `Enter`

note: after step 2 a new browswer window should open with the url being `http://localhost:5500`


## Working on an exercise

1) Create a folder with the exercise name under the correct folder hierarch. For example:

For the exercise `findSmallestElement` on `Module 1`, `Part 5` you should create a folder at:

```
sei-premium-prep-72/Module1/Part5/findSmallestElement
```

2) Inside the new folder, create an index.html and a javascript file named aftter the exercise name (same as the new folder name).

3) Open index.html and type `html`. VS Code will suggest a few different options. Select `html:5` and press `enter`. VS Code will then, add the basic markup for an HTML page. 

4) Inside the `<body>` tag, type `script`. VS Code will suggest a few different options. Select `script:src`. VS Code will add a script tag with a src property to wich, you should enter `./JAVASCRIPT_FILE_NAME.js`. Using our example, the src should be `./findSmallestElement.js`.

5) Do the work on the javascript file. 


## Seem the exercise result

1) If Live Server is not yet running, then run the command to start it. See the `Run local server` session above. 

2) If not yet open, on a browser, go to `http://10.0.0.172:5500/` or `http://localhost:5500/`

3) Open the dev tools. One way to do it is pressing `cmnd + option + j`. On the dev tools, click on `console` to see the output of your code `console.log` and clic on `source` and on the file name `findSmallestElement.js` to see the source code.

## Commiting changes and pushing to github

```
git add .
git commit -m 'Description of your changes'
git push
```
# PhpJS

Phpjs is a framework to help you use PHP methods in javascript.
  - Simple to use
  - On-demand method loading

# New Features!

  - The str_replace method is now available
  - $ _GET is now available

### Installation
First [download](https://www.github.com/hiagodotme/phpjs) the latest version of our repository.

>Include file phpjs.min.js in your page.
```html
<script src="dist/phpjs.min.js"></script>
```

>Install the methods you want to use
```html
<script>phpjs.setup(['$_GET','str_replace'])</script>
```

>Using methods:
```javascript
phpjs.$_GET['variable']; //return the $_GET variable value.
phpjs.str_replace('hi', 'hello', 'hello how are you?'); //return hi how are you?
```

### Development

Want to contribute? Great!
PhpJS uses Gulp for fast developing.

Open your favorite Terminal and run these commands.

First Tab (enter in root phpjs folder and run):
```sh
$ npm install gulp gulp-uglify gulp-rename gulp-concat -g
$ npm install
$ gulp
```


Author
----
 - Hiago Silva Souza <<hiasilva@gmail.com>>

License
----
MIT

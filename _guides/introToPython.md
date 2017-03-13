---
title: Intro to Programming with Python
---
# Welcome
Programming might seem difficult, especially if you've never done it before. But in reality, once you get started, you'll find that it isn't rocket science (but it's helpful if you're hoping to go into that field!). In this workshop, you'll learn the fundamentals of programming with the Python programming language, along with common syntax that's present in most modern programming languages.
# Installing Atom
Let's get started! In order to begin coding you'll need somewhere to write your code. For the purpose of this workshop, we'll be using a code editor called _Atom_. Atom is pretty simple to use, and has a lot of features that make programming easier. Follow the instructions at [atom.io](https://atom.io) to install Atom.
# Installing Python
If you're on a Mac, the Python programming language comes pre-installed on your computer, so you can skip this step. If you're on Windows, go to [python.org](https://python.org) and follow the instructions to install Python.
# Let's go!
Now that you've got everything installed, we can start programming! Open up Atom and make a new file. In that file, type

{% highlight python %}
print("Hello, world")
{% endhighlight %}

Congratulations! You've written your first line of code! Now save that file on your desktop as `main.py`.
<br/><br/><br/><br/><br/>
# Running your program
## On Mac
Open the _Terminal_ app. Type `python ~/Desktop/main.py` and press enter. You should get an output of
{% highlight python %}
Hello, world
{% endhighlight %}
Notice how in order to run your program, you typed the command `python` followed by the location of your Python script.
## On Windows
Open the Command Prompt. Type `py C:/Users/%username%/Desktop/main.py` and press enter. You should get an output of
{% highlight python %}
Hello, world
{% endhighlight %}
Notice how in order to run your program, you typed the command `py` followed by the location of your Python script.
# Breaking down your program
From this, we've learned that the code `print("Hello, world")` outputs `Hello, world`. Try writing a program that outputs `Hello, Python`. Now, try writing the same program without quotes around the text. Do you get an error message when running it? That's supposed to happen. We'll explain why later.

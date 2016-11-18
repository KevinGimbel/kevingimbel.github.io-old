---
layout: post
title: "Setting up Bash Scripts for Global Use"
category: coding
tags:
  - bash
  - shell
---

Over the last year or so I got into [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) programming. Bash programming is kind of hard, the language itself does not allow for mistakes because it will simply not run if there's a error within a script - syntax wise. Other languages, such as JavaScript, are more forgiving but bash is not - and that's good! This post is a reference for what I've learned and I plan to link here from my GitHub repositories for setup instructions.

## Installing Shell Scripts

There is no default for installing bash scripts. I personally keep my scripts in my home directory inside a sub directory called `scripts`. Here I have all GitHub repositories so I can update them with `git pull origin master` from their directory. The path to each script is then linked to `/usr/local/bin` so they are inside the `$PATH` and can be executed from everywhere. Let's break this down.

### Installing a new script

First, I open a terminal and navigate to `~/scripts`. I then checkout the files from GitHub.

```sh
$ git checkout https://github.com/kevingimbel/vhost.git
```

Once the files are fetched from git I either follow the Install Guide (if there is any) or make the file executable and symlink it to `/usr/local/bin`.

```sh
# Make the file executable
$ chmod +x the_script.sh
$ ln -s /home/kevin/scripts/example_script/the_script.sh /usr/local/bin/the_script
```

You might notice I left off the `.sh` when symlinking. I prefer to call my scripts without extensions. With this symlink in place I can now run `$ the_script` and the script located in `/home/kevin/scripts/example_script/the_script.sh` is invoked. That's it. In this way I link all my scripts - either my own or from other people.

## Structure of a Bash Program

### Shebang (`#!`)

The [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) is a special character combination used in shell scripting. It indicates which program should execute the script and it will most likely be `#!/bin/bash` or `#!/bin/sh` for scripts riunning on [Unix-like systems](https://en.wikipedia.org/wiki/Unix-like) scripts. Consider the following script named `my_script.sh`:

```sh
#!/bin/bash
echo "Hello World!"
```
The first line (`#!/bin/bash`) tells the executer to run the script with the `/bin/bash` program - which happens to be the Bash Shell. Other shells could be [`zsh`](http://www.zsh.org/) which would be indicated with `#!/bin/zsh`. When the program is executed from the terminal with `$ my_scripts.sh`, the system call looks like this

```sh
$ /bin/bash my_script.sh
```

### Variables

In Shell Scripting variables are defined in a somewhat odd way when you come from languages like PHP or JavaScript. A variable is defined like `my_var=my_value` - no keywords or special characters are invoked when defining the variable. When using the variable, however, it is prefixed with a Dollar Sign (`$`).

Adjusting `my_script.sh` to use a variable would look like this.

```sh
#!/bin/bash
my_var="Hello World"
echo $my_var
```

You might notice that there is no indicator for line endings (e.g., `;`) in shell scripting. These are not part of the language as far as I'm concerned. It is possible to assign the returned value of a function or another bash script to a variable by calling the function with `$()`.

```sh
#!/bin/bash
my_var="$(cat /var/log/error.log /var/log/access.log var/log/another.log)"
echo $my_var
```

Here we use the `cat` function. The `cat` function is used to concatenate the contents of multiple files which can then be put into a file or printed to STDOUT. So we combine three logs into one big string and echo it out. It's arguable if this is useful or not; but it certainly shows how to call a function inside a shell script.

### Conditions

Bash is capable of handling `if/else` conditions. They can be invoked as follows.

```sh
if [ CONDITION ]; then
  echo "Condition is true!"
else
  echo "Condition is false!"
fi
```

Weird, isn't it? The first thing to notice is the `fi` in the last line. `fi` indicates that this if block is finished. In shell scripts all blocks are ended by reversing the initial control statement, e.g. `case` is finished with `esac`. To check if a variable is set you can use the `-z` (`zero`) in combination with `!` (`not`).

```sh
if [ ! -z "$my_var" ]; then
  echo "my_var is set to $my_var"
fi
```

You can either check for `-z` alone and handle if the variable is zero - to set it to a default, for example - or check if it is not zero/empty and work with that. It's also possible to check for commands which are available by using the `hash` function inside a `if` block.

```sh
if [ hash apache2 &>/dev/null ]; then
  echo "apache2 command is available"
fi
```

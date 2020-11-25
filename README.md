# BeCode "JavaScript Animations with GSAP" Workshop

## How to BeCode :octocat:

At BeCode we help motivated people become **junior web developers**.  
This means that during the **7 months** at BeCode we help you navigate the ever-growing world of web development.

Being a web developer means **never stop learning**. There are a lot of brand new technologies out there, and every day new solutions for new problems are found.  
This is why at BeCode we don't teach, instead, we help you find out how you can **teach yourself**.

At BeCode we use an **active learning** pedagogy, that boils down to 3 simple rules:

- When in doubt, Google it
- When you don't find it on Google, ask your teammates
- And in the end, of that doesn't work: ask your coach

This means that learning with us is not like listening to a teacher all the time as in a traditional school: instead, it is more like going on an exploration adventure yourself!

## Let's code

Today I will introduce you to **GSAP**. The GreenSock Animation Platform (GSAP) is a popular set of JavaScript tools for building animations on the web. Anything you see in your web browser can be animated with GSAP.  
The challenge of today: a 'magical universe' landing page.

At the beginning, I will give a short introduction to this new technology.  
Then it's your time to dive a little bit deeper in the matter and try to finish part one and two from the exercise.
After about one hour, I will do a short live coding session. From that point, you can decide to stick to part one and two or sparkle some more magic in part three.

## GSAP

**So what can we do with GSAP?**  
Anything you see in your web browser can be animated with GSAP. Whether you want to build elegant UI animations or dynamic effects in web apps, games, and interactive stories; GSAP is up to the task.  
Take a quick look on the [GSAP demo collection](https://codepen.io/collection/ANaOod) and see it for yourself.

**And how does it work?**  
You simply write short snippets of JavaScript code that define how elements should animate and what the timing should be. The benefit of animating with code is that one line of code can animate one thing just as easily as it can animate 1,000 things. With code-driven animation it’s surprisingly easy to randomize your animations and have them respond to user interaction.

### Try it yourself

Use the documentation on [GreenSock](https://greensock.com/get-started/) to find solutions for the following questions:

<details><summary>How do I load GSAP in my project?</summary>

```js
// Use a script tag like this:
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
```

</details>

<details><summary>How do I move an element with an id of "moon" to a y position of 200?</summary>

```js
gsap.to('#moon', { duration: 1, y: 200 });
```

</details>

<details><summary>How do I add an ease of "bounce out" to the previous line of code?</summary>

```js
gsap.to('#moon', { duration: 1, ease: 'bounce.out', y: 200 });
```

</details>

### Some useful resources

Be aware that you use the latest version of GreenSock (GSAP 3) for your documentation.  
You will notice the previous versions use `TweenLite.to`instead of `gsap.to`.

- [The official GSAP get started documentation](https://greensock.com/get-started/)
- [Getting started with GSAP3 - youtube](https://www.youtube.com/watch?v=M4GCT-2kaoo)
- [Just Google it!](https://www.google.com)

### Challenge

**Let's animate a 'magical universe' landing page.**

##### PART ONE: PREPARATION

I already prepared the html and css of the landing page so that you can start animating almost immediately.
There's still a few things you need to do to start.

1. Fork this repository to your own Github. In the top-right corner of the page, click Fork.
2. On GitHub, navigate to your fork an copy the code.
3. In the terminal, go to the folder you want to clone in `cd ...` and clone your forked repo `git clone url`.
4. Open the cloned repo in your favorite code editor and you're ready to go. Whoop whoop!

##### PART TWO: MY FIRST ANIMATIONS

Your task: the HTML and CSS are ready, all you have to do is to write the necessary JavaScript so that when you load the page, the magic happens. Exciting, isn't it?!

Don't know where to start? Try to follow these steps:

1. You will need to create 'app.js' and link it to the index.html
2. You will need to add another script tag to load GSAP in your project (remember the script tag??).
3. Now you can start animating in 'app.js'.

   - Pick a tween: `gsap.to()`, `gsap.from()` or `gsap.fromTo()`
   - Pick the target from the html you want to animate, e.g. ".planet-one img"
   - Optional: decide on the duration of the animation.
   - Decide on the vars. A var is an object with property/value pairs that you're animating to (like opacity:0.5, rotation:45, etc.)

4. Optional: add delays to the animations to make them variate in time (don't use timelines yet, that's the next part).

Before you start reading into the next part, let me know that you're done with the first two parts of the exercise.

##### PART THREE: EXTRA EXTRA EXTRA

I wouldn't be me, if I didn't add a little suprise in this challenge. Yes baby, let's explore our created universe!  
In this part of the workshop, we are going to use a little bit more JavaScript. Relax and breath, you can do this!

Go to 'style.css' and look for the astronaut-container. Hey, why does it have a property of `display: none`???  
That's the suprise!  
We're going to have fun with this little guy. Just leave the property like it is, we're only using JavaScript today.

1. In your 'app.js' add an eventlistener that listens to a click to the explore button.
2. In this eventlistener, manipulate the dom by changing the style of the astronaut to `display: block`.
3. Refresh the page and click the explore button. Is the astronaut appearing? Yes?? Good job!!
4. Now let's have some fun with this little guy, while using a timeline. Read this [introduction](https://greensock.com/docs/v3/GSAP/Timeline) to learn more about timelines.
5. Let's create a function `movingTheAstronaut()`. Inside this function, create a timeline and add some animations.
6. Now invoke the function inside the eventlistener we created in the first step, just after the dom-manipulation.
7. Now go crazy with other functions like `waving()`, `swimming()`, `rotating()`, ... Don't forget to add them to the eventlistener.

### This is it

All done? Congratulations, you deserve a piece of pie and an awesome weekend!  
I'm proud of you guys! I hope you had fun!

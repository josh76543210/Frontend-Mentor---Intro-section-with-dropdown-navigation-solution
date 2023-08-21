# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./assets/images/screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-rM8Bs-lybF](https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-rM8Bs-lybF)
- Live Site URL: [https://josh76543210-fm-intro-dropdown-nav.netlify.app/](https://josh76543210-fm-intro-dropdown-nav.netlify.app/)

## My process

### Built with

- HTML
- CSS
- JavaScript

### What I learned

Creating a navigation using subcategories.

```html
<ul
  class="header__nav-sublist header__nav-sublist--company"
  id="company-sublist"
>
  <li class="header__nav-subitem">
    <a href="#" class="header__nav-sublink">History</a>
  </li>
  <li class="header__nav-subitem">
    <a href="#" class="header__nav-sublink">Our Team</a>
  </li>
  <li class="header__nav-subitem">
    <a href="#" class="header__nav-sublink">Blog</a>
  </li>
</ul>
```

```css
/* submenu nav */
.header__nav-sublist {
  width: calc((120 / 16) * 1rem);
  background-color: var(--almost-white);
  padding: calc((20 / 16) * 1rem);
  padding-bottom: 0;
  border-radius: calc((7 / 16) * 1rem);
  box-shadow: calc((7 / 16) * 1rem) calc((10 / 16) * 1rem) calc(
      (30 / 16) * 1rem
    ) calc((5 / 16) * 1rem) #00000022;
  position: absolute;
  top: 0;
  left: calc((-18 / 16) * 1rem);
}
```

## Author

- Frontend Mentor - [@josh76543210](https://www.frontendmentor.io/profile/josh76543210)
- Twitter - [@josh76543210](https://www.twitter.com/josh76543210)

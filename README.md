# 30 Days - Set Up Your Own learning Tasks
This software is designed for promote learning habits. Users allow to set and prioritise tasks, help them divide and manage their study tasks. At the same time user can relax by playing music through the music player

## Contents of Readme File
 * __Change of design brief__
 * __Description__
 * __How to use__
 * __Reference__


# Change of design brief
My original idea in the previous design brief was to design a language learning software where the user could look up words using a dictionary and set time tracking to help them more concentration. However, I delete the time tracking idea, I thought if users who want to set study times, I think they may prefer to use them on their mobile phones rather than the web side. Thus, the final web application will be more focus on task management and music player those two features.

* __screenshot of the layout change__

orginal layout
![image](./readmeimg/1.png)

new layout
![image](./readmeimg/2.png)

* __Folded menu bar__

For the menu bar added a collapse effect, I didn't use js to achieve this, I referenced  [Areal Alien's](https://codepen.io/areal_alien/pen/BaRpxdX) code and added the effect to it in  **css**.

```CSS
  /*folded menu bar*/
  .flexbox {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .flexbox-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
  }
  .flexbox-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  /* left Columns of the menu */
  .flexbox-col {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
  }
  .flexbox-col-left {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
  }
  .flexbox-col-left-ns {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
  }
  .flexbox-col-right {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-end;
  }
  .flexbox-col-start-center {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
  }
  /* Spacings */
  .flexbox-space-bet {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
```

* __Card Layout__

The card layout is also reference from [jpmersuglia, 2020](https://github.com/jpmersuglia/responsive-cards-layout.git)
the card add :hover special styles to the mouse, so that when user's mouse put on the cards, it will change the color.

```css
.card {
    overflow: auto;  /*If the card content is trimmed, the browser displays a scroll bar to view the rest of the content*/
    background-color: rgba(255, 255, 255, 0.586);
    border-radius: 20px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.491);
    top: 150px;;
}

//the card will change text and background color when mouse put on the cards
.card:hover{
    background-color: #000000;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.4);
    color:#fff; //text color will change
}
```

* __Menu bar text change color__

I have added hyperlinks to the text in the menu bar so that the user can click on it to jump to the page. So I have added a hover effect to the menu text page, following jpmersuglia's code, where the underline and colour changes when the mouse is placed over the text to prompt the user.

```html
<li class="navbar-item flexbox-left">
  <div class="navbar-item-inner-icon-wrapper flexbox"></div>
  <span class="link-text">
    <a href="index.html" id="mentext">  //add hoverto menu text
      Home
    </a>
  </span>
</li>
```

```css
  /*Because the text in the menu bar is underlined after being added hyperlinked, 
  in order to change the color i use ID='mentext' to label a particular style
  */
  #mentext{
    text-decoration:none;
    color: white;
  }
  #mentext:hover {
    opacity: 3;
    text-decoration:underline;
    color: rgb(161, 166, 252);
}
```

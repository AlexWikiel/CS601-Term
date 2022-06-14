# W. Alex Wikiel

## Week 2

CS601 - 2022-5-24    

## Assignment1 Requirements:

Using only HTML 5 and CSS (no JavaScript or other languages):
You will be building upon your Assignment 1 submission. Make a copy of your
three (3) page website and style it according to the requirements outlined below.

1. Every page must be styled using the same external style sheet to provide
	a consistent look and feel across all pages.
2. The CSS declarations within your style sheet should provide at least three (3) 
distinct differences in how the pages are presented based on the screen size. Use
media queries to accomplish this.
3. Use selectors to style all appropriate elements on all pages using CSS.
	a. Each element selected should have at least one property:value pair assigned 
	to it. Providing more than one property:value pair for each element is encouraged 
	and will be acknowledged as extra effort.
	b. Examples of elements that are not appropriate to apply styles to include: 
	doctype, html, head, title, and a few select others. Check with your facilitator 
	if you are unsure or if you would like to request area sonable exception from 
	this requirement.
4. Be creative or at least show your facilitator that you spent some considerable time 
thinking about and planning out the appearance of your website. You could be creative 
with colors and whitespace, with font types and sizes, special alignments and positioning, 
page layout, navigation/menu appearance, etc.
5. Show us that you know how to use CSS effectively.
6. You can continue to add additional HTML elements and content if you desire, just be 
sure to style these a s well.
7. You cannot use a responsive web design framework for this assignment.

## Description

This weeks assignment required us to style our page content.  I had some trouble with this
as its my first exposure to CSS.  I had to watch some tutorials but the one that really
helped and allowed me to mimic some of the controls was this from youtube:

https://www.youtube.com/watch?v=oYRda7UtuhA

Changes to the initial 5 pages are minimal in mostly just styling.  The main and most time intestive
was the navigation, but using the tutorial above I was able to make it work with semantic elements
The nav now uses hovers to undeline each selection.  We also change sizes at 1040px and to smaller font
on the index page we make my picture change size too and disappear.  When we get to 410px the entire nav 
menu reduces and all the thrills are removed for mobile devices. The nav is shared by all the pages, so the 
style is in template.css.

Education page has nice school links which lights up when we hover over them. Personal Life page was also
styled to add a drop shadow to the image and align all parts.  Personal interest page has drop shodows 
added to the picture and to the table.  The table is also padded and a border added. here we used the aside
element with css to get a nice text wrap around the table.  It adjusts really nicely as you change the size
of the screen. the Favorites page also has nice links with highlights plus I made a border around the video
and added a drop shadow.

Two new pages were added, TV Corner and News. These will seem similar as my efforts were focused on styling
the existing pages.


## Running Instructions

- Open home.html
- Use navigation at top of page to navigate between pages

## File Structure

![File Structure](/images/filestructure.png)


## Week 1

CS601 - 2022-5-17

## Assignment1 Requirements

1. You must have at least two (2) paragraphs of text based content on at
least one page.
    1. Full paragraphs are 4-5 sentences in length.
2. You must provide at least one (1) external hyperlink to a publicly hosted
website(s) on at least one page.
    1. You can choose to link to your work, your home town, hobbies,
    interests, etc.
    2. Internal links to other pages of your site do not count towards this
    requirement.
3. You must use the new HTML5 structural elements on every page.
4. Include at least one image on every page
    1. You can use the same image on every page, but if you do, that will
    only count as having one image on one page. Add an additional
    image(s) to the other pages to meet the requirement
5. Include one table containing tabular data on at least one page.
6. Include at least one list on at least one page.
    1. This list should contain traditional list-type content
7. Create a consistent menu/navigation bar that is used on all pages and
contain links to the other pages.
    1. You should be able to access all pages from any page of your site.
    2. You may use a list for navigational/menu purposes. The list could
    then be styled with CSS as part of next week’s assignment.
8. Include one video or audio element on at least one page that successfully
plays in Firefox.
    1. You are encouraged to use HTML 5 video/audio elements, but you
    can alternatively embed a YouTube video if you desire.

## Description

The website contains some autobiographical content about me and my interests.  It consists
from 5 pages and each page contains 5 semantic structural elements. You can find outside links on
Education page, Personal Life page, and Personal Interets page, as well as on Favorites page. 
Every page has an unique image except the Favorites which has link to a video. You can find list of links
on Education, I hope this will be styled as a side box when we start with CSS. You can also find
a list in the Favorites page.  Table is on the Personal interest page.


## Running Instructions

- Open home.html
- Use navigation at top of page to navugate between pages

## File Structure

- CS601_HW1_Wikiel - Project Folder
  - html - folder
    - education.html
    - favorites.html
    - interests.html
    - personal_life.html
  - images - folder
    - bishop-hendricken-logo-4.png
    - bruno.jpg
    - bu_logo.png
    - me.png
    - torchys.jpg
    - uri_logo.png
  - video - folder
    - bruno.mp4
- home.html
- README.md

<!-- ********************** NOTE*******************
I wanted to create something like this, but I couldn't get it to work with markdown

|-- CS601_HW1_Wikiel
|   |-- html
|   |   |-- education.html
|   |   |-- favorites.html
|   |   |-- interests.html
|   |   |-- personal_life.html
|   |-- images
|   |   |-- bishop-hendricken-logo-4.png
|   |   |-- bruno.jpg
|   |   |-- bu_logo.png
|   |   |-- me.png
|   |   |-- torchys.jpg
|   |   |-- uri_logo.png
|   |-- video
|   |   |-- bruno.mp4
|-- home.html
|-- README.md
''' -->

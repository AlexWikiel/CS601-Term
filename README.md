# Term Project

CS601 - 2022-6-21

## W. Alex Wikiel

## Overview

This course includes a term project that evaluates the student’s mastery of the course material in order to create professional web sites and applications.
Students will be evaluated on how well they have mastered the following topics:

- Web languages
- HTML5
- CSS 3
- JavaScript
- Vue
- Web page layout and design
- Document object model (DOM)
- Website usability
- Project management for web design and development

## Deliverable

You will be required to create a comprehensive website consisting of 5-10 content pages using the knowledge you have learned in this course. Your code should be stored on GitHub (github.com) and publicly available for view. Please refer to the documentation on Getting Started with GitHub to get setup.
The term project’s default topic is YOU!

Create a website that includes a portfolio about yourself. You can choose one or more of the following features:

- Include your biography
- Share your interests
- Provide a web-based contact form
- Display your resume
- Include a photo gallery
- Showcase skills you learned in this course

It is expected that you will utilize the majority of the material covered in the course to implement your project.
Unless approved by your facilitator you are restricted to the default topic described above. Don’t construe this as a requirement, it would be great to have you work on a topic that better suits your interests or could actually fulfill a need or desire you currently have. If you would like to choose a different topic or direction, just be sure to have your alternative topic approved by your course facilitator before the start of week three.

If you are going to be in the job market in the near future—creating a portfolio about your education makes a lot of sense and is strongly recommended.

In addition, a mid-term review (at the end of Module 3) may also be offered as an optional event in order for students to receive feedback on their project before they finish and submit the assignment.

The following diagram can help you with the planning and implementation of your project:
![diagram](/images/diagram.png)

## Presentation

You have two options for presentation: via video or live.
-Live presentations: Your instructor or facilitator will schedule final presentations in which each student will devote 8–10 minutes presenting their completed project in a live classroom environment. It is nothing to stress over, just show us the great work that you have accomplished!
-Video presentations: You can also submit your project as a video walk-through. If so, submit both the link to the video and the link to your codebase on GitHub as your final. Your instructor and/or facilitator will announce the days and times of these two events.

## Option for Extra Credit

You have the opportunity to earn extra credit for this assignment. This extra credit provides for a maximum of a 10% adjustment to your final term project score.
To earn extra credit, you will need to incorporate one or more of these technologies into your final submission.
-Adding any ES6 or higher functionality presented in module five.
-Connecting to a database or external API to add dynamic functionality to your site. This typically involves being able to submit, retrieve, edit, and delete information from a web form to a database.
-Making your site responsive using CSS Flexbox or CSS Grid Layout (no frameworks).

## Resources

Web authoring tools and other software
You may use a text editor and/or integrated development environment. You may also benefit from using image, video, and/or audio editing software. You must also publish your project to the web, so you’ll need web hosting space. We recommend Netlify, Azure Static Apps or GitHub pages for your hosting. Please use GitHub to store your code; this makes deployment much easier as well.
Development Resources
-Lecture notes
-Live classroom recordings
-Course textbooks
-Additional web research
-No group projects or external collaboration is permitted
File Management
-Your code should be stored on GitHub in a public repo in a folder with a README.md file explaining your project's goal. Submit the link to this project as your final project submission.
-Privacy issues: Your codebase should be publicly accessible on GitHub, but if for some reason you need to keep it private, you can create a private repo. You will need to give your instructor/facilitator access, so email this person to coordinate access.

## Web Hosting

We recommend Netlify, Azure Static Apps or GitHub pages to host your projects. Please use GitHub to store your code; this makes deployment much easier as well.

## Description

The my website is a biographical website, that is fun and interactive.  The goel is to introduce the user to myself and some of the things I am about and intersted in.  It starts with an quick intro, and then exposes the user to relevant information about my education and personal life. Further pages introduce some of my interests and favorite things and we finish with some interactive fun and a call to action to complete a contact form.

The website layout is a one column layout with a common theme (template) shared on every page. The users eyes are meant to scroll down and all pages share the heading and footers.  This makes it easy to transition to mobile. I did try one zig zag style layout on the tv corner page site.

I used a font called Poppins from the google API and sans-serif as a backup.  I tried to keep the size of text nice and big for easy readability but also it scales well to smaller devices.

The navigation is a Vue app that really just contains the template and css but could be customized in the future.  By using this approach, it is all in one place and gives a very consistent feel.

All pages have images expcept the contact form and the tic tac toe. I tried images on those pages but I believe it took away from the clean look of the page.

All the links on the site are working and highlight is used to identify links.

Semantic elemnts are used on every page for element organization.   Highlighting is used for links and underlining in the nav.  Bold and italics were omited because it did nto fit with the design.

JavaScript is used on the contact page for submission validation (netlify is used for the form) and also the personal interest page uses js for fetching the json files needed to populate the table. Both those pages alos update the DOM.

Vue is used on the tic tac toe game, which is entiry done in vue and is just a component on the page. Also the nav is a Vue component but it really doesn’t do any js work.

We use CSS media queries to change the size of some elements the most notable is the nav which complete changes for mobile. We also use Fetch on to update a table instead of AJAX for update the info that populate form a json.

********************Important not******************
There is one validation error on the contact form page because of netlify forms which is not really a valid attribute.

## Running Instructions

- Open index.html
- Use navigation at top of page to navigate between pages
- The site hosted on netlify
- URL: <https://alex-wikiel-cs601.netlify.app/>
- Github: <https://github.com/AlexWikiel/CS601-Term.git>

## File Structure

![File Structure](/images/FinalFileStructure.png)

## Previous Week Works that this project built on

## Week 2

CS601 - 2022-5-24

## Assignment1 Requirements

Using only HTML 5 and CSS (no JavaScript or other languages):
You will be building upon your Assignment 1 submission. Make a copy of your
three (3) page website and style it according to the requirements outlined below.

1. Every page must be styled using the same external style sheet to provide a consistent look and feel across all pages.
2. The CSS declarations within your style sheet should provide at least three (3) distinct differences in how the pages are presented based on the screen size. Use
media queries to accomplish this.
3. Use selectors to style all appropriate elements on all pages using CSS.
 a. Each element selected should have at least one property:value pair assigned to it. Providing more than one property:value pair for each element is encouraged and will be acknowledged as extra effort.
 b. Examples of elements that are not appropriate to apply styles to include: doctype, html, head, title, and a few select others. Check with your facilitator if you are unsure or if you would like to request area sonable exception from this requirement.
4. Be creative or at least show your facilitator that you spent some considerable time thinking about and planning out the appearance of your website. You could be creative with colors and whitespace, with font types and sizes, special alignments and positioning, page layout, navigation/menu appearance, etc.
5. Show us that you know how to use CSS effectively.
6. You can continue to add additional HTML elements and content if you desire, just be sure to style these a s well.
7. You cannot use a responsive web design framework for this assignment.

## Description 2

This weeks assignment required us to style our page content.  I had some trouble with this
as its my first exposure to CSS.  I had to watch some tutorials but the one that really
helped and allowed me to mimic some of the controls was this from youtube:

<https://www.youtube.com/watch?v=oYRda7UtuhA>

Changes to the initial 5 pages are minimal in mostly just styling.  The main and most time intestive was the navigation, but using the tutorial above I was able to make it work with semantic elements The nav now uses hovers to undeline each selection.  We also change sizes at 1040px and to smaller font on the index page we make my picture change size too and disappear.  When we get to 410px the entire nav
menu reduces and all the thrills are removed for mobile devices. The nav is shared by all the pages, so the style is in template.css.

Education page has nice school links which lights up when we hover over them. Personal Life page was also styled to add a drop shadow to the image and align all parts.  Personal interest page has drop shodows added to the picture and to the table.  The table is also padded and a border added. here we used the aside element with css to get a nice text wrap around the table.  It adjusts really nicely as you change the size
of the screen. the Favorites page also has nice links with highlights plus I made a border around the video and added a drop shadow.

Two new pages were added, TV Corner and News. These will seem similar as my efforts were focused on styling
the existing pages.

## Running Instructions 2

- Open home.html
- Use navigation at top of page to navigate between pages

## File Structure 2

![File Structure](/images/filestructure.png)

## Week 1

CS601 - 2022-5-17

## Assignment1 Requirements 3

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

## Description 3

The website contains some autobiographical content about me and my interests.  It consists from 5 pages and each page contains 5 semantic structural elements. You can find outside links on Education page, Personal Life page, and Personal Interets page, as well as on Favorites page. Every page has an unique image except the Favorites which has link to a video. You can find list of links on Education, I hope this will be styled as a side box when we start with CSS. You can also find a list in the Favorites page.  Table is on the Personal interest page.

## Running Instructions

- Open home.html
- Use navigation at top of page to navugate between pages

## File Structure 3

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

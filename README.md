# The University of Carbon Emissions
## John Dutan, Shahrukh Gizabi, Xavier Luck
## Description
The University of Carbon Emissions is a comprehensive search engine website that allows users to input the name of a university or website ending in .edu to see how much carbon it emits during usage. It will enable students to determine whether their university websites are carbon-friendly by hosting a library of university websites' carbon emissions. Our search engines will rank the universities based on their website's carbon footprint; more specifically, it is an excellent tool for many schools' green initiatives.
## Target Browsers
Target browsers for our website are Mozilla Firefox, Google Chrome, and Microsoft Edge. Additionally, our website is compatible with iOS and Android devices.
# User Manual
1. Download a zip file of our project from GitHub
2. Open 'index.js'
3. Open a terminal window to run our application using the following commands:
&nbsp;&nbsp;&nbsp;&nbsp;a. npm init (enter through all commands)
&nbsp;&nbsp;&nbsp;&nbsp;b. npm install express
&nbsp;&nbsp;&nbsp;&nbsp;c. npm install nodemon
&nbsp;&nbsp;&nbsp;&nbsp;c. npm install papaparse
&nbsp;&nbsp;&nbsp;&nbsp;d. npm start
5. Once started, go into your browser and type http://localhost:4000/home.html
6. You should see the home page.
*Additionally, you may access the app by using https://inst-377-project.vercel.app/*
# Developer Manual
## How to Install 
1. Download any of the aforementioned browsers to run our application.
2. Use any Integrated Development Environment (IDE) or code-editing software to edit and review code for the website (i.e., Microsoft Visual Studio).
3. Create a GitHub account to access and ask for permission to access this GitHub repository.
## How to Run the Application
1. Open any browser.
2. Visit http://localhost:4000/index.html
3. Scroll through and switch through the pages
## How to Run Tests
1. Use debugging software on your IDE to access the Live Server application to see changes made in real-time from code to browser<br />
&nbsp;&nbsp;&nbsp;&nbsp;a. We recommend using the extension Live Server by Ritwick Dey<br />
2. Use console.log() commands throughout the code to publish any print tests onto the browser console<br />
&nbsp;&nbsp;&nbsp;&nbsp;a. On most browsers, to access the console, right-click on the page and press "Inspect"->"Console." Any output will appear on the console as and when appropriate.<br />
## API Documentation
1. Website Carbon API (link: https://api.websitecarbon.com/) - GET /site<br />
&nbsp;&nbsp;&nbsp;&nbsp;a. This endpoint requires a URL parameter and will calculate emissions generated per page view. It checks once every 24 hours<br />
&nbsp;&nbsp;&nbsp;&nbsp;b. This endpoint returns:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I. 'url' - The URL tested<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II. 'green' - Whether or not The Green Web Foundtation can establish website hosting as being "green"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;III. 'bytes' - THe number of bytes transferred per page load<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IV. 'cleanerThan' - value between 0 and 1 representing the percentage of tested resources by Website Carbon API that the parameter website is cleaner than.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V. 'Statistics' Object comprised of:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A. 'adjustedBytes' - Bytes transferred by page load, adjust o take first time versus returning visitor percentage into account<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B. 'energy' - Approximate energy amount transferred on eaach page in KWg<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C. 'co2' object comprised of:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. 'grams' - Co2 transferred on each page load in grams<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. 'litres' - Co2 transferred on each page load in litres<br />
2. Hong Kong Observatory - /GET Daily Solar Radiation Readings (as CSV)
&nbsp;&nbsp;&nbsp;&nbsp;a. This provided the team the unique challenge of parsing through the CSV using the npm package Papavarse. Once converting it to JSON, we used Chart.js to display the daily readings of solar radiation for 2023
3. Supabase Endpoint (link: https://supabase.com/dashboard/project/zgucoxetmnqcuzgyiqoy) - GET /customer<br />
&nbsp;&nbsp;&nbsp;&nbsp;a. This endpoint accesses a table of 'customers' that are our partners for the website. Once they fill out their name in the form, their name appears in our "Partnership" page
## Known Bugs / Future Development Roadmap
1. Page reload sometimes causes the images to bug out and appear after a slight delay. There should be some implementation in the Home.js to decrease or eliminate this delay.
2. The donor list is small right now because we do not have many partners as a startup. We need to find more donors and partners to spread our message across a larger population
3. We want to access more relevant carbon emissions news and facts on our front page to connect with other organizations about the importance of website carbon emissions.


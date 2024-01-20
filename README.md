# Welcome to NASA Calendar!
This is a calendar made with the APOD (Astronomy picture of the day) in each day as a preview.
In some cases the picture could be a video.
You can identify them becase have a default picture.
When you click any picture it will display a modal where you can see the full picture or a video if it's the case.

## How to use
In the page url, you can set the year and the month that you want to see.
The url ends like this `/[year]/[month]`. You can replace the year and the month for what you want (only numbers available).
For example if you want the 2023 February, you must go to `/2023/2`.

## How to set up the project
- To start you need to clone the repository (repo).
Open a terminal and run
`git clone <repo url>`
use the https url for now

- Next you need to setup the repo
For that you need to open a terminal in your repo folder and run
`npm install`
This command will install all repo dependencies

- When the intallation is running, you can copy the `.env.template` file and change its name to `.env.local`
And then complete the `=` with data, if you don't have an API key, you can use the demo key: `DEMO_KEY` or generate your own key here: https://api.nasa.gov/index.html

- Here the path forks
If you are developer go to For developers else go to For everyone instead

## For everyone
- Start the project with:
`npm run build; npm run start`
When the command ends, go to http://localhost:3000/ to see the page

## For developers
- Start the project with:
`npm run dev`
When the command ends, go to http://localhost:3000/ to see the page
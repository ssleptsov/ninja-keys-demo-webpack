// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'
import 'ninja-keys';
// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)


const hotkeys = [
  {
    id: "Home",
    title: "Open Home",
    hotkey: "cmd+h",
    mdIcon: "home",
    handler: () => {
      console.log("navigation to home");
    }
  },
  {
    id: "Open Projects",
    title: "Open Projects",
    hotkey: "cmd+p",
    mdIcon: "apps",
    handler: () => {
      console.log("navigation to projects");
    }
  },
  {
    id: "Theme",
    title: "Change theme...",
    mdIcon: "desktop_windows",
    children: [
      {
        id: "Light Theme",
        title: "Change theme to Light",
        mdIcon: "light_mode",
        handler: () => {
          console.log("theme light");
        }
      },
      {
        id: "Dark Theme",
        title: "Change theme to Dark",
        mdIcon: "dark_mode",
        keywords: "lol",
        handler: () => {
          console.log("theme dark");
        }
      }
    ]
  }
];
const ninja = document.querySelector("ninja-keys");
ninja.data = hotkeys;
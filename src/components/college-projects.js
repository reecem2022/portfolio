import bankVideo from '../assets/bankvideo.mp4';
import newsVideo from '../assets/newsapp.mp4';
import spaceoutVideo from '../assets/spaceoutvideo.mp4';

const PROJECT_DATA = JSON.stringify([
    {
        name: "CMZ Banking",
        description: "Banking app created using Qt Creator and C++",
        video: bankVideo,
        link: "https://github.com/shwaygrr/cmz-banking"
    },
    {
        name: "News App",
        description: "News app created using XCode and Swift",
        video: newsVideo,
        link: "https://github.com/markedreece/News-App"
    },
    {
        name: "Contact Management Software",
        description: "Contact Management software created using React, Javascript, and CSS (Private as of 1/29/2025)(No Video as of 1/29/2025)",
        video: "",
        link: "https://github.com/markedreece/Contact-Management-Project"
    },
    {
        name: "Space Out",
        description: "Game made in Unity with a team of new game developers.",
        video: spaceoutVideo,
        link: "https://rainstorminteractive.itch.io/space-out"
    },
    
]);

export default PROJECT_DATA;
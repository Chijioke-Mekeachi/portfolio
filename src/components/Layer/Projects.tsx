import React from 'react'
import Card from '../UI/Card'


interface CardProps{
    Title: string;
    Years: number;
    description: string;
    link: string;
}


const Projects = () => {
    const Projects: CardProps[] = [
        {
            Title: "BitxChain",
            Years: 1,
            description: "Web3 Base webApplication, making use of the blurt network , supabase, React-vite and Css, used for converting blurt to Naira",
           link: "https://bitxchain-core.vercel.app/"
        },
        {
            Title: "AquacionX",
            Years: 1,
            description: "Web3 Base webApplication Game, for minting Aquacoin",
              link: "https://aquacoinx-spin2win.vercel.app/"
        },
        {
            Title: "Cogni",
            Years: 1,
            description: "Cogni is an AI-powered study assistant built with Next.js, designed to help students learn smarter. It supports multimodal inputs (image and audio) and generates concise summaries, study notes, and flashcards. When possible, Cogni runs on-device using Chrome’s built-in Gemini Nano model for fast, private inference. If not available, it securely falls back to a cloud model (via Firebase AI Logic and Gemini/Vertex AI) (under development)",
            link: ""
        },
        {
            Title: "GameDevAI",
            Years: 1,
            description: "A Game development AI, a tool that builds a fully functional Game with Just A prompt (Under development)",
            link: "https://ai-game-dev-two.vercel.app"
        }, {
            Title: "Jude X",
            Years: 1,
            description: "A landing page for My Tech brand",
            link: "https://jud-ex.vercel.app"
        },
    ]
  return (
    <div>
        <p className='text-[35px] font-bold bg-gradient-to-br from-purple-500 via-blue-600 to-blue-500 bg-clip-text text-transparent '>Projects</p>
        <div className={`flex flex-row gap-15 p-2 flex-wrap`}> 
            {
            Projects.map((item, index) => (
                <Card Title={item.Title} Years={item.Years} description={item.description} key={index} link={item.link}/>
            ))
        }
        </div>
        
    </div>
  )
}

export default Projects

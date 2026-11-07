import planit from '@/assets/planit.jpg'
import faceit from '@/assets/faceit.png'
import repocats from '@/assets/repocats.jpg'
import visocode from '@/assets/visocode.png'
import prova from '@/assets/prova.png'
import plotbreak from '@/assets/plotbreak.jpg'

export const projects = [
    {
        "image": prova,
        "title": "Prova",
        "description": "Startup funding data API covering 265,000+ companies. Served 420,000+ lookups in its first month, including 64,000+ paid lookups, making $8K in revenue.",
        "tags": ["TypeScript", "Python", "Supabase", "API"],
        "imageLink": "https://www.provaapi.com",
        "buttons": [
            {
                "type": "website",
                "link": "https://www.provaapi.com"
            }
        ]
    },
    {
        "image": plotbreak,
        "title": "Plotbreak: The Playable Anime",
        "description": "Native iOS game with an AI story engine, live on the App Store. Reached 1,000+ accounts, 9,000+ AI story turns and 60+ in-app purchases within 8 weeks of launch, with a peak of 105 DAU.",
        "tags": ["SwiftUI", "Postgres", "Supabase", "PostHog"],
        "imageLink": "https://apps.apple.com/us/app/plotbreak-the-playable-anime/id6811307049",
        "buttons": [
            {
                "type": "appstore",
                "link": "https://apps.apple.com/us/app/plotbreak-the-playable-anime/id6811307049"
            },
            {
                "type": "website",
                "link": "https://plotbreak.com"
            }
        ]
    },
    {
        "image": visocode,
        "title": "VisoCode",
        "description": "AI-powered engine that transforms questions into animated educational videos using a multi-agent pipeline with research and code generation capabilities.",
        "tags": ["Python", "AI Agents", "Manim", "LaTeX", "Kimi-K2", "Gemini"],
        "imageLink": "https://visocode.vercel.app",
        "buttons": [
            {
                "type": "github",
                "link": "https://github.com/adventurex-hackathon/"
            },
            {
                "type": "website",
                "link": "https://visocode.vercel.app"
            }
        ]
    },
    {
        "image": repocats,
        "title": "Repocats",
        "description": "AI-powered tool that analyzes GitHub repositories and generates walkthroughs, tutorials, and diagrams to help developers understand codebases quickly.",
        "tags": ["NextJS", "OpenAI", "Supabase", "TypeScript"],
        "imageLink": "https://github.com/DekyCS/repocats",
        "buttons": [
        {
            "type": "github",
            "link": "https://github.com/DekyCS/repocats"
        },
        {
            "type": "website",
            "link": "https://www.repocats.com/"
        }
        ]
    },
    {
        "image": planit,
        "title": "PlanIt Mobile App",
        "description": "Smart group planning app that makes organizing hangouts easy by matching everyone's schedules and preferences, taking the hassle out of making plans.",
        "tags": ["Flutter", "Dart", "Firebase", "Places API", "Xcode"],
        "imageLink": "https://github.com/SaidBecerra/planit",
        "buttons": [
        {
            "type": "github",
            "link": "https://github.com/SaidBecerra/planit"
        },
        {
            "type": "testflight",
            "link": "https://testflight.apple.com/join/5EPuyFGF"
        }
        ]
    },
    {
        "image": faceit,
        "title": "FaceIt",
        "description": "\"Fake\" browser extension that merges facial recognition with autofill for secure, password-free logins, protecting your accounts even if your device is stolen.",
        "tags": ["Flask", "Python", "SQLite", "Face Recognition"],
        "imageLink": "https://github.com/DekyCS/geekfest",
        "buttons": [
        {
            "type": "github",
            "link": "https://github.com/DekyCS/geekfest"
        }
        ]
    }
];
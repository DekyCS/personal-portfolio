

import planit from '@/assets/planit.jpg'
import faceit from '@/assets/faceit.png'
import repocats from '@/assets/repocats.jpg'

export const projects = [
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
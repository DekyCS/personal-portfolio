import './App.css'
import { Button } from './components/ui/button'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IconButton from './components/icon-button'
import PlaceInfo from './components/place-info'
import SectionTitle from './components/section-title'
import { Card } from "@/components/ui/card"
import { FileDown, Mail, Github, Linkedin, Moon } from 'lucide-react';
import face from './assets/face.jpeg'
import { ThemeProvider } from './components/theme-provider'
import { ThemeButton } from './components/theme-button'

const jobs = [
  {
    "imgSource": "https://assets.grenier.qc.ca/cdn-cgi/image/q=90,format=webp,fit=pad,w=200,h=200/uploads/images/Logo-ITHQ-Marine-rgb-154839.png",
    "time": "Summer 2024",
    "company": "Institut de tourisme et d'hôtellerie du Québec",
    "title": "Research Assistant (Intern)",
    "descriptions": [
      "Developed a Python desktop application with Tkinter for project organization and building a system to automatically sort and classify documents",
      "Built web scraping solutions using BeautifulSoup and APIs to analyze pet policies across 100+ hotels, creating reports on industry standards"
    ]
  }
];

const educations = [
  {
    "imgSource": "https://catholicmontreal.ca/wp-content/uploads/cache/images/jac-t/jac-t-564307454.png",
    "time": "August 2023 - May 2026",
    "company": "John Abbott College CEGEP",
    "title": "Computer Science Technical Program",
    "descriptions": []
  }
];

const featuredProjects = [
  {
    "imageSource": "https://tedawf.com/_next/image?url=%2Ftv-tele-alerts.png&w=640&q=75",
    "title": "Tradingview Telegram Alerts",
    "description": "Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes",
    "tags": ["Docker", "FastAPI", "Fly.io", "Python", "Selenium", "Telegram Bot API"],
    "source": "https://github.com/tedawf/tradingview-telegram-alerts"
  }
];

function App() {

  return (
    <ThemeProvider defaultTheme="light">
      <div className='flex flex-col max-w-3xl mx-auto p-8 text-lg'>
        <nav className='flex items-center justify-between'>
          <div className='flex gap-8'>
            <a className="opacity-60 hover:opacity-90" href="/">home</a>
            <a className="opacity-60 hover:opacity-90" href="/">projects</a>
            <a className="opacity-60 hover:opacity-90" href="/">blog</a>
            <a className="opacity-60 hover:opacity-90" href="/">contact</a>
          </div>

          <ThemeButton />
        </nav>
        <div className='flex flex-row items-center justify-between gap-12 pt-12'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl calistoga-regular pb-4'>hi omar here 👋</h1>
            <p className='font-light'>19-year-old computer science student from Montreal 🇨🇦</p>
            <p className='font-light pb-4'>I like to develop full stack websites, mobile applications and eat korean bbq</p>
            <div className='flex flex-row gap-8 items-center'>
              <Button variant="outline" className="cursor-pointer">
                Resume <FileDown />
              </Button>
              
              <IconButton Icon={Linkedin} link="https://www.linkedin.com/in/omar-lahlou-mimi-000988251/"></IconButton>
              <IconButton Icon={Github} link="https://github.com/DekyCS"></IconButton>
              <IconButton Icon={Mail} link="mailto:omarlahmimi@gmail.com"></IconButton>
            </div>
          </div>
          <div className='flex-shrink-0 w-44'>
            <AspectRatio ratio={1}>
              <img 
              src={face}
              alt="Omar's photo"
              className='rounded-md object-cover w-full h-full'/>
            </AspectRatio>
          </div>
        </div>
        <div className='pt-18'>
        <Tabs defaultValue="Work" className='w-full'>
          <TabsList className='w-full'>
            <TabsTrigger className='flex-1 cursor-pointer' value="Work">Work</TabsTrigger>
            <TabsTrigger className='flex-1 cursor-pointer' value="Education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="Work">
            <Card className="flex flex-col gap-y-8 pt-4 pb-4 pl-6 pr-6">
              <PlaceInfo place={jobs[0]}/>
            </Card>
          </TabsContent>
          <TabsContent value="Education">
            <Card className="flex flex-col gap-y-8 pt-4 pb-4 pl-8 pr-16">
              <PlaceInfo place={educations[0]}/>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
        <div className='pt-18'>
          <SectionTitle title="featured projects" link="https://youtube.com" />
        </div>
        <div className='pt-18'>
          <SectionTitle title="featured awards" />
        </div>
        <div className='pt-18'>
          <SectionTitle title="recent posts" link="https://youtube.com" />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

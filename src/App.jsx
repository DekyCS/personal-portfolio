import './App.css'
import { Button } from './components/ui/button'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IconButton from './components/icon-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FileDown, Mail, Github, Linkedin, Moon } from 'lucide-react';
import face from './assets/face.jpeg'

function App() {

  return (
    <>
      <div className='flex flex-col max-w-3xl mx-auto p-8'>
        <nav className='flex opacity-50 items-center justify-between'>
          <div className='flex gap-8'>
            <a href="/">home</a>
            <a href="/">projects</a>
            <a href="/">blog</a>
            <a href="/">contact</a>
          </div>

          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Moon />
          </Button>
        </nav>
        <div className='flex flex-row items-center justify-between gap-8 pt-12'>
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
          <div className='flex-shrink-0 w-40'>
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
            <Card className="p-4">
            Make changes to your account here.
            </Card>
          </TabsContent>
          <TabsContent value="Education">
            <Card>
            Change your password here.
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </>
  )
}

export default App

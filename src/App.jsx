import './App.css'
import { Button } from './components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function App() {

  return (
    <div className='flex flex-col bg-amber-500 justify-center items-center w-200'>
      <h1 className='text-5xl text-center p-16'>Vite React Project With Tailedwind Css with UI</h1>
      <Button>Button</Button>

      <div className='flex space-x-2 lg:space-x-23'>
        <h1>Hello</h1>
        <h1>Hey There</h1>
      </div>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default App

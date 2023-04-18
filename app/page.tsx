import { Inter } from 'next/font/google'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-6">
     <MessageList />
     <ChatInput />
    </main>
  )
}

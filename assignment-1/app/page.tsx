'use client'

import { useState, FormEvent, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { quotes as initialQuotes } from "@/data/quotes"
import { Card } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { Plus } from "lucide-react"

interface QuotesData {
  [key: string]: string[]
}

export default function Home() {
  const [topic, setTopic] = useState("")
  const [quotesData, setQuotesData] = useState<QuotesData>(initialQuotes)
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([])
  const [newTopic, setNewTopic] = useState("")
  const [newQuote, setNewQuote] = useState("")
  const [showUserQuotes, setShowUserQuotes] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [showAllTopics, setShowAllTopics] = useState(false)

  const topicList = Object.keys(quotesData)

  useEffect(() => {
    const defaultTopic = "Success"
    const topicKey = topicList.find(key => key.toLowerCase() === defaultTopic.toLowerCase())
    if (topicKey && quotesData[topicKey]) {
      const all = quotesData[topicKey]
      const shuffled = [...all].sort(() => 0.5 - Math.random())
      setFilteredQuotes(shuffled.slice(0, 3))
      setTopic(defaultTopic)
    }
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const topicKey = topicList.find(key => key.toLowerCase() === topic.toLowerCase())
    if (topicKey && quotesData[topicKey]) {
      const all = quotesData[topicKey]
      const shuffled = [...all].sort(() => 0.5 - Math.random())
      setFilteredQuotes(shuffled.slice(0, 3))
    } else {
      setFilteredQuotes(["No quotes found for this topic."])
    }
  }

  const handleAddQuote = () => {
    const topicKey = newTopic.trim()
    const quoteText = newQuote.trim()
    if (!topicKey || !quoteText) return
    const updatedQuotes: QuotesData = { ...quotesData }
    if (updatedQuotes[topicKey]) {
      updatedQuotes[topicKey] = [...updatedQuotes[topicKey], quoteText]
    } else {
      updatedQuotes[topicKey] = [quoteText]
    }
    setQuotesData(updatedQuotes)
    setNewTopic("")
    setNewQuote("")
    setDialogOpen(false)
  }

  const displayedTopics = showAllTopics ? topicList : topicList.slice(0, 8)

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-6 space-y-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute w-72 h-72 bg-purple-400 opacity-20 rounded-full top-10 left-10 blur-3xl" />
        <div className="animate-float-slow absolute w-96 h-96 bg-pink-500 opacity-10 rounded-full bottom-10 right-10 blur-3xl" />
        <div className="animate-float absolute w-60 h-60 bg-blue-400 opacity-10 rounded-full bottom-1/3 left-1/4 blur-2xl" />
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 14s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-5xl flex justify-end">
        <ModeToggle />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text text-center">
        Quote Generator
      </h1>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <div className="inline-flex rounded-full bg-white/30 dark:bg-white/10 p-1 shadow-inner border border-white/20">
          <button
            onClick={() => {
              setDialogOpen(true)
              setShowUserQuotes(true)
            }}
            className={`px-4 py-2 rounded-full text-sm text-white transition ${showUserQuotes ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-blue-400'}`}
          >
            Add Quote
          </button>
          <button
            onClick={() => setShowUserQuotes(false)}
            className={`px-4 py-2 rounded-full text-sm text-white transition ${!showUserQuotes ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-blue-400'}`}
          >
            Browse Topics
          </button>
        </div>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Quote</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input placeholder="Topic (e.g. Honesty)" value={newTopic} onChange={(e) => setNewTopic(e.target.value)} />
            <Textarea placeholder="Enter your quote here..." value={newQuote} onChange={(e) => setNewQuote(e.target.value)} />
          </div>
          <DialogFooter>
            <Button onClick={handleAddQuote} className="bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-purple-400 hover:to-blue-400">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {showUserQuotes ? (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-xl z-10">
            <Input type="text" placeholder="Enter a topic (e.g. Success)" value={topic} onChange={(e) => setTopic(e.target.value)} />
            <Button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-purple-400 hover:to-blue-400">Get Quotes</Button>
          </form>

          <div className="w-full max-w-xl space-y-4 z-10">
            {filteredQuotes.map((quote, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="p-4 border rounded-lg shadow-md text-gray-900 dark:text-white backdrop-blur-xl bg-white/30 dark:bg-white/10 border-white/30 cursor-pointer hover:scale-[1.02] transition">
                    {quote.length > 100 ? `“${quote.slice(0, 100)}...”` : `“${quote}”`}
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quote</DialogTitle>
                  </DialogHeader>
                  <p className="text-lg">“{quote}”</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-6 z-10 w-full max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
            Popular Topics
            <button onClick={() => setShowAllTopics(!showAllTopics)} className="text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-blue-400 p-1 rounded-full">
              <Plus size={18} />
            </button>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {displayedTopics.map((t, index) => (
              <Button
                key={index}
                className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-blue-400 text-white text-xs px-3 py-1 transition hover:scale-105"
                onClick={() => {
                  setTopic(t)
                  const all = quotesData[t]
                  const shuffled = [...all].sort(() => 0.5 - Math.random())
                  setFilteredQuotes(shuffled.slice(0, 3))
                }}
              >
                {t}
              </Button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            <Input type="text" placeholder="Or type your own topic..." value={topic} onChange={(e) => setTopic(e.target.value)} />
            <Button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-purple-400 hover:to-blue-400" type="submit">Search</Button>
          </form>

          <div className="w-full space-y-4">
            {filteredQuotes.map((quote, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="p-4 border rounded-lg shadow-md text-gray-900 dark:text-white backdrop-blur-xl bg-white/30 dark:bg-white/10 border-white/30 cursor-pointer hover:scale-[1.02] transition">
                    {quote.length > 100 ? `“${quote.slice(0, 100)}...”` : `“${quote}”`}
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quote</DialogTitle>
                  </DialogHeader>
                  <p className="text-lg">“{quote}”</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

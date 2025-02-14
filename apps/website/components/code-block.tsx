"use client"

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { Button } from '@/components/ui/button'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      <div className="rounded-lg overflow-hidden">
        <Highlight
          theme={themes.nightOwl}
          code={code.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} p-4 overflow-x-auto`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
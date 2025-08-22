// components/ChatbotProvider.tsx
'use client'

import { useEffect } from 'react'

// Declare the custom property on window object
declare global {
    interface Window {
        aiChatbotConfig?: {
            apiUrl: string;
            businessType: string;
            businessName: string;
            customDetails: string;
            customerId: string;
            theme: {
                primaryColor: string;
                textColor: string;
            };
        };
    }
}

export default function ChatbotProvider() {
    useEffect(() => {
        // Configure chatbot
        window.aiChatbotConfig = {
            apiUrl: 'https://aski-chatbot.vercel.app',
            businessType: 'default',
            businessName: 'My Functional Recovery',
            customDetails: 'Physical therapy, massage therapy, and rehabilitation services',
            customerId: 'mfr-001',
            theme: {
                primaryColor: '#F0978A',
                textColor: '#F0978A'
            }
        }

        // Load script
        const script = document.createElement('script')
        script.src = 'https://aski-chatbot.vercel.app/embed.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return null // This component doesn't render anything
}
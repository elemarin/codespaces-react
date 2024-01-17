import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://yrkqzefmjtupvuljetsy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlya3F6ZWZtanR1cHZ1bGpldHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MTQ3OTYsImV4cCI6MjAyMDk5MDc5Nn0.I5N4d4oVqnHyC5Pf7ZokJucgZbdbzenKJvcFx9UZog8')

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setSession(session)

    const { data: { subscription } } = await supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged in!</div>)
  }
}
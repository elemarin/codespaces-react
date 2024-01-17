import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://<your-project-id>.supabase.co', '<your-anon-key>')

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
import { useState, useEffect, FC, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { getSession } from "next-auth/react"

import { autoSignIn } from "@/store/actions/user.action"


const SessionCheck = ({children}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getSession().then(session => {
      if(session) {
        // dispatch action to set session
        dispatch(autoSignIn())
        .unwrap()
        .then(() => {
          setLoading(false);
        })
        
      } else {
        // dispatch action to clear session
        setLoading(false);
      }
    }).catch(err => {
      setLoading(false);
    })
  }, []);

  if (loading) return <div>Loading...</div>
  
  return (
    <div>
      {children}
    </div>
  )
}

export default SessionCheck
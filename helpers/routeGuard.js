import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loading from "@/components/Loading";

const RouteGuard = (props) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then(session => {
      if(!session) {
        router.push("/users/sign_in")
      } else {
        setLoading(false)
      }
    })
  }, []);

  if(loading) {
    return <Loading />
  }

  return (
    <>
      {props.children}
    </>
  )
}

export default RouteGuard
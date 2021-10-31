import React, { useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { LoginForm } from "../components/LoginForm"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Login() {
  const query = useQuery();
  useEffect(() => {
    console.log('tradad')
  }, [query])
  return <LoginForm />
}

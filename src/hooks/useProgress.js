import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export function useProgress(userId) {
  const [completed, setCompleted] = useState({})

  useEffect(() => {
    if (!userId) return
    const ref = doc(db, 'progress', userId)
    getDoc(ref).then(snap => {
      if (snap.exists()) setCompleted(snap.data())
    })
  }, [userId])

  async function markComplete(lang, topicId) {
    const key = `${lang}_${topicId}`
    const updated = { ...completed, [key]: true }
    setCompleted(updated)
    await setDoc(doc(db, 'progress', userId), updated)
  }

  function isComplete(lang, topicId) {
    return !!completed[`${lang}_${topicId}`]
  }

  return { completed, markComplete, isComplete }
}
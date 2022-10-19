import { ReactElement } from 'react'

export interface UserTrailsType {
  primary_key: string
  id: string
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  rating: string
  imageUrl: string
  url: string
  userId: string
  setUpdateUserTrails: React.Dispatch<React.SetStateAction<boolean>>
}

export interface UserCardProps {
  primary_key: string
  name: string
  length: string
  elevation: string
  duration: string
  rating: ReactElement
  image: string
  urL: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  userId: string
  setUpdateUserTrails: React.Dispatch<React.SetStateAction<boolean>>
}

export interface TrailsType {
  primary_key: string
  id: string
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  rating: string
  imageUrl: string
  url: string
  userId: string
}

export interface CardProps {
  primary_key: string
  name: string
  length: string
  elevation: string
  duration: string
  rating: ReactElement
  image: string
  urL: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  userId: string
}

export const colorMap = {
  Easy: 'bg-yellow-300',
  Moderate: 'bg-green-400',
  Hard: 'bg-red-400',
  All: 'bg-gray-200',
}

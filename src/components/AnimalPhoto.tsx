"use client"

import Image from "next/image"
import { useState } from "react"

interface Props {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function AnimalPhoto({ src, alt, className, priority }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className ?? "object-cover"}
      priority={priority}
      onError={() => setFailed(true)}
    />
  )
}

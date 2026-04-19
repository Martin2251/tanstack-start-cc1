import { Heart } from 'lucide-react'
import React, { useState } from 'react'



type SkillCardProps = {
 name:string
}
const SkillCard = ({name}:SkillCardProps) => {
    const [liked,setLiked] = useState(false)
    const likes = liked ? 1 : 0;

  return (
    <div>
      SkillCard
      <h2>{name}</h2>
      <p>{likes} {likes === 1 ? 'like':'likes'} </p>
      <button onClick={() => setLiked((current) => !current)} type='button'>
        <Heart fill={liked ? 'currentColor' :'none'} size={18}/>
      </button>
    </div>
  )
}

export default SkillCard

import { useAnimate } from 'motion/react'
import { useEffect } from 'react'

const CarouselCards = ({ direction, children }: { direction?: 'RTL'; children: React.ReactNode }) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const animation = () => {
      const keyframes = [0, -scope.current.scrollWidth / 2]
      const x = direction === 'RTL' ? keyframes : keyframes.reverse()

      animate(
        scope.current,
        { x: x },
        {
          x: {
            ease: 'linear',
            duration: 100,
            repeat: Infinity,
            repeatType: 'loop',
          },
        },
      )
    }

    animation()
    addEventListener('resize', animation)
    return () => removeEventListener('resize', animation)
  }, [])

  return (
    <div className='cards_container'>
      <div ref={scope} className='cards_inner_container'>
        {children}
      </div>
    </div>
  )
}

export { CarouselCards }

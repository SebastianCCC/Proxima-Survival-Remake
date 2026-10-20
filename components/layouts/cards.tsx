import { cards } from '@/data/cards'

import '@/styles/common.block/cards/cards.css'

import { CarouselCards } from '@/components/ui/carouselCards'

const Cards = () => {
  return (
    <>
      <CarouselCards>
        {[...cards, ...cards, ...cards].map(({ id, image }, index) => (
          <img key={id + index} src={image} />
        ))}
      </CarouselCards>
      <CarouselCards direction='RTL'>
        {[...cards, ...cards, ...cards].map(({ id, image }, index) => (
          <img key={id + index} src={image} />
        ))}
      </CarouselCards>
    </>
  )
}

export { Cards }

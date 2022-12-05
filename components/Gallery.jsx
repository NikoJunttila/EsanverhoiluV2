'use client';

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { fadeIn} from '../utils/motion';

const Gallery = ({galleryImages}) => {
    
    const [slideNumber,setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
      }

      const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( galleryImages.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
      }
    
      // Next Image  
      const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
      }

    return( 
    <div>
        {openModal && 
            <div className='sliderWrap'>
        <FontAwesomeIcon className='btnClose' icon={faCircleXmark} size="2x"  onClick={handleCloseModal}  />
        <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" className='btnPrev' onClick={prevSlide} />
        <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className='btnNext' onClick={nextSlide} />
              <div className='fullScreenImage'>
                <img src={galleryImages[slideNumber].img} alt='full' />
              </div>
            </div>
          }
<div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <motion.div 
              variants={fadeIn('right', 'spring', index*0.4, 0.75)} 
                className='single' 
                key={index}
                onClick={()=> handleOpenModal(index)}
                >
                <img src={slide.img} alt='gallerypics' />
              </motion.div>
            )
          })
        }
      </div>
      </div>
)}

export default Gallery


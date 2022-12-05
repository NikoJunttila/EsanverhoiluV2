'use client';
import Gallery from "../components/Gallery";
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
const Galleria = () => {

    const galleryImages = [
        {
            img: "/gallery1.jpg"
        },
        {
            img: "/gallery2.jpg"
        },
        {
            img: "/gallery3.jpg"
        },
        {
            img: "/gallery4.jpg"
        },
        {
            img: "/gallery5.jpg"
        },
        {
            img: "/gallery6.jpg"
        },
        {
            img: "/gallery8.jpg"
        },
        {
            img: "/gallery9.jpg"
        },
        {
            img: "/gallery10.jpg"
        }
    ];
    
   return(
    <section className={`${styles.paddings}`} id="gallery">
<motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
 <TypingText title="| Galleria" textStyles="text-center" />
        <TitleText
          title={<>Kuvia aikaisemmista töistä </>}
          textStyles="text-center"/>       
<Gallery galleryImages={galleryImages}/>
</motion.div>
</section>

)};

export default Galleria;

import React from 'react';
import {motion} from 'framer-motion';

import './Modal.scss';
import { randomDirectorImages, randomImageGenerator } from '../../../Utils/RandomImageGenerator';

export default function Modal({director, onClose}) {
    return (
        <motion.div
        className="backdrop"
        onClick={onClose}
        initial={{opacity:0}}
        animate={{opacity:1}} >
            <section className="director__wrapper">   
                <div className="image__wrapper">
                    <img src={randomImageGenerator(randomDirectorImages, 3)} alt="director" /> 
                </div>   
                <div className="description__wrapper">
                    <h3>{director}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iste. Provident, nobis autem! Possimus perferendis rerum ad cumque adipisci voluptate blanditiis, veritatis ab, fugit maxime alias quis assumenda optio numquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero fuga quia officiis non error neque similique aperiam doloremque sequi soluta earum, voluptate quos, consequuntur sit nihil quisquam veniam. Necessitatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad recusandae possimus a molestiae at hic autem porro vitae dolore, veritatis esse dignissimos maxime. Aliquam eius minus molestias incidunt velit!
                    </p>
                </div>
            </section>
            
        </motion.div>
    )
}

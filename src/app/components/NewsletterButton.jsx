"use client"
import React from 'react'
import { motion } from 'framer-motion'

const NewsletterButton = () => {
    return (
        <motion.button
            whileTap={{ scale: 0.95, shadow: 0 }}
            className="2xl:text-3xl text-xl flex items-center justify-center bg-white text-tertiary md:rounded-2xl rounded-xl 2xl:w-[520px] 2xl:h-[100px] md:w-[380px] md:h-[70px] w-full h-[100px] hover:bg-secondary shadow-default-card">
            Iscriviti alla newsletter
        </motion.button>
    )
}

export default NewsletterButton
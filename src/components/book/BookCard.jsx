import React from 'react';
import { motion } from 'framer-motion';

const BookCard = ({ book, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
   
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className='border text-black rounded-lg border-black p-4 w-full max-w-md mx-auto my-6 bg-white shadow-md'
    >
      <img src={book.image} alt="book cover" className='w-full h-60 object-cover rounded-md' />
      <h1 className='text-2xl font-semibold mt-4'>{book.name}</h1>
      <p className='my-2 text-gray-600'>{book.description}</p>
      <p className='font-bold text-xl text-blue-600'>${book.price}</p>
    </motion.div>
  );
};

export default BookCard;

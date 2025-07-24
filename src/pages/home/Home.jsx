import React, { useRef } from 'react'
import Banner from '../../components/Header/Banner'
import BookCard from '../../components/book/BookCard';

const books = [
  {
    "id": "b1",
    "name": "The Silent Patient",
    "price": 14.99,
    "description": "A psychological thriller about a woman’s act of violence against her husband.",
    "writtenBy": "Alex Michaelides",
    "image": "/images/silent-patient.jpg"
  },
  {
    "id": "b2",
    "name": "Atomic Habits",
    "price": 18.50,
    "description": "Build good habits and break bad ones to transform your life.",
    "writtenBy": "James Clear",
    "image": "/images/atomic-habits.jpg"
  },
  {
    "id": "b3",
    "name": "The Alchemist",
    "price": 12.00,
    "description": "A magical story about following your dreams and listening to your heart.",
    "writtenBy": "Paulo Coelho",
    "image": "/images/the-alchemist.jpg"
  },
  {
    "id": "b4",
    "name": "Educated",
    "price": 15.25,
    "description": "A girl who was kept out of school and ended up earning a PhD from Cambridge.",
    "writtenBy": "Tara Westover",
    "image": "/images/educated.jpg"
  },
  {
    "id": "b5",
    "name": "The Subtle Art of Not Giving a F*ck",
    "price": 16.75,
    "description": "A counterintuitive approach to living a good life.",
    "writtenBy": "Mark Manson",
    "image": "/images/subtle-art.jpg"
  },
  {
    "id": "b6",
    "name": "Rich Dad Poor Dad",
    "price": 13.90,
    "description": "Teaches financial independence and investing.",
    "writtenBy": "Robert Kiyosaki",
    "image": "/images/rich-dad.jpg"
  },
  {
    "id": "b7",
    "name": "Think and Grow Rich",
    "price": 11.99,
    "description": "Success principles based on interviews with the world's richest people.",
    "writtenBy": "Napoleon Hill",
    "image": "/images/think-grow-rich.jpg"
  },
  {
    "id": "b8",
    "name": "1984",
    "price": 10.50,
    "description": "A dystopian novel about government surveillance and control.",
    "writtenBy": "George Orwell",
    "image": "/images/1984.jpg"
  },
  {
    "id": "b9",
    "name": "To Kill a Mockingbird",
    "price": 13.00,
    "description": "A powerful story of racial injustice in the Deep South.",
    "writtenBy": "Harper Lee",
    "image": "/images/mockingbird.jpg"
  },
]


function Home() {
  const containerRef =useRef(null);
  return (
    <div className=''>
      <Banner></Banner>
      <div>
           <h1 className='text-center text-black font-bold text-5xl my-10'>All Books</h1>
        <div ref={containerRef} className='min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {
            books.map(book => (<BookCard key={book.id} containerRef={containerRef} book={book} />))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
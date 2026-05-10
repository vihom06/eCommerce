import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const previousValue = 0;

const searchTexts = ["Products", "partners", "Factories"]

const SearchBar = () => {
  
  const [searchValue, setSearchValue] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    
    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % searchTexts.length)

    }, 2500)

    return () => clearInterval(interval)

  }, [])

  return (
    <form className="border w-[50%] flex flex-row justify-between rounded-xl px-4 py-2">
      <input
        className={`placeholder:text-black/40 outline-none w-full bg-transparent ${searchValue ? '' : "animate-placeholder"}`}
        placeholder={`Search for ${ searchTexts[index]}`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
      />
      <button className="cursor-pointer">
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar
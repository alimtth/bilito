import React, { useState } from 'react'
import { useMemo } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const SelectField = ({ options = [], value, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen((s) => !s)
    }

    const handleClick = (option) => {
        toggleDropdown()
        onChange?.(option)
    }

    const selectedOption = useMemo(() => {
        return options.find((o) => o.id == value)
    }, [value, options])

    const localOptions = useMemo(() => options.sort((a, b) => a.name > b.name ? 1 : -1), [options])

    return (
        <div className="relative border border-gray-500 px-4 lg:px-4 rounded-lg">
            {label && <label className='absolute -top-2 right-4 text-sm bg-white px-2 text-gray-600'>{label}</label>}
            <div
                onClick={toggleDropdown}
                className="flex items-center justify-between py-3"
            >
                <input
                    readOnly
                    type={'text'}
                    className="w-1/2 focus:outline-none caret-transparent"
                    value={selectedOption?.name}
                />
                <IoIosArrowDown />
            </div>
            {isOpen && (
                <div className="flex flex-wrap w-full bg-white shadow-lg gap-2 py-2 rounded-lg px-3 absolute z-10 -mr-4">
                    <ul className="h-[300px] w-full overflow-y-scroll  scroll-bar">
                        {localOptions.map((option, index) => (
                            <li
                                key={index + 1}
                                value={option.id}
                                onClick={() => handleClick(option)}
                                className={`py-1 px-2 flex-shrink-0 cursor-pointer hover:bg-gray-10 hover:rounded-md `}
                            >
                                {option.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SelectField
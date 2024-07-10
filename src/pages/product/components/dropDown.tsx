import { FC, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface IDropDown {
    options: string[]
    selectedOption: string
    onSelect: (selectedOption: string) => void;
}

const Dropdown: FC<IDropDown> = ({ options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full">
            <div className="flex items-center border rounded px-3 py-2 cursor-pointer" onClick={toggleDropdown}>
                <span>{selectedOption}</span>
                <FaChevronDown className="ml-auto text-gray-500" />
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${selectedOption === option ? 'bg-blue-50' : ''
                                }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <span className="flex-1">{option}</span>
                            {selectedOption === option && <span className="text-blue-500 ml-2">•</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
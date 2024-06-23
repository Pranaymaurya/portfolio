import './project.css';
import { motion } from 'framer-motion';

export default function Project() {
    return (
        <>
            <div className="bg-blue-gradient">
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.1 }}
                    className="flex flex-wrap justify-evenly p-10"
                >
                    <div className="card dark:bg-gray-800 shadow-md p-4 w-1/5 overflow-visible relative m-5 flex flex-col h-auto rounded-md text-white">
                        <div className="card-img bg-orange-200 h-2/5 w-full rounded-lg transition-transform duration-300 ease-in-out">
                            {/* <img src={img1}></img> */}
                        </div>
                        <div className="card-info pt-4">
                            <p className="text-title font-extrabold text-xl leading-snug">Password Generator</p>
                            <p className="text-body text-sm pb-2.5">
                                A random password generator is a tool designed to create secure, unpredictable passwords for user These passwords are typically composed of a random combination of characters, including letters, numbers, and special symbols.
                            </p>
                        </div>
                        <div className="card-footer flex justify-between items-center pt-2.5 border-t border-gray-300">
                            <span className="text-title font-extrabold text-xl">HTML, CSS, JS</span>
                            <div className="card-button border border-black flex p-1 cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:text-black">
                                More info
                            </div>
                        </div>
                    </div>

                    <div className="card dark:bg-gray-800 shadow-md p-4 w-1/5 h-96 overflow-visible relative m-5 text-white rounded-md">
                        <div className="card-img bg-orange-200 h-2/5 w-full rounded-lg transition-transform duration-300 ease-in-out"></div>
                        <div className="card-info pt-4">
                            <p className="text-title font-extrabold text-xl leading-snug">Whack a Mole</p>
                            <p className="text-body text-sm pb-2.5">
                                It is a game made with HTML, CSS, and advanced JS. When the game starts, there is a mole moving. You have to click on the mole to increase your score, and if you accidentally click on the plant, you will be out.
                            </p>
                        </div>
                        <div className="card-footer flex justify-between items-center pt-2.5 border-t border-gray-300">
                            <span className="text-title font-extrabold text-xl">HTML, CSS, JS</span>
                            <div className="card-button border border-black flex p-1 cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:text-black">
                                More info
                            </div>
                        </div>
                    </div>

                    <div className="card dark:bg-gray-800 shadow-md p-4 w-1/5 h-96 overflow-visible relative m-5 text-white rounded-md">
                        <div className="card-img bg-orange-200 h-2/5 w-full rounded-lg transition-transform duration-300 ease-in-out"></div>
                        <div className="card-info pt-4">
                            <p className="text-title font-extrabold text-xl leading-snug">Joke Generator</p>
                            <p className="text-body text-sm pb-2.5">
                                A joke generator is a simple application that displays a joke whenever a button is clicked. Here, an API is used to find details and display them to the user. It is made with HTML and JS.
                            </p>
                        </div>
                        <div className="card-footer flex justify-between items-center pt-2.5 border-t border-gray-300">
                            <span className="text-title font-extrabold text-xl">HTML, CSS, JS</span>
                            <div className="card-button border border-black flex p-1 cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:text-black">
                                More info
                            </div>
                        </div>
                    </div>

                    <div className="card dark:bg-gray-800 shadow-md p-4 w-1/5 h-96 overflow-visible relative m-5 text-white rounded-md">
                        <div className="card-img bg-orange-200 h-2/5 w-full rounded-lg transition-transform duration-300 ease-in-out"></div>
                        <div className="card-info pt-4">
                            <p className="text-title font-extrabold text-xl leading-snug">Movie Details</p>
                            <p className="text-body text-sm pb-2.5">
                                Movie Detail is an interesting website that shows details about any movie you want. Here, a movie database is used to fetch the API of the following name. IMDB is free to use, and we can make API calls in it.
                            </p>
                        </div>
                        <div className="card-footer flex justify-between items-center pt-2.5 border-t border-gray-300">
                            <span className="text-title font-extrabold text-xl">REACT JS</span>
                            <div className="card-button border border-black flex p-1 cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:text-black">
                                More info
                            </div>
                        </div>
                    </div>

                    <div className="card dark:bg-gray-800 shadow-md p-4 w-1/5 h-96 overflow-visible relative m-5 text-white rounded-md">
                        <div className="card-img bg-orange-200 h-2/5 w-full rounded-lg transition-transform duration-300 ease-in-out"></div>
                        <div className="card-info pt-4">
                            <p className="text-title font-extrabold text-xl leading-snug">Movie Details</p>
                            <p className="text-body text-sm pb-2.5">
                                Movie Detail is an interesting website that shows details about any movie you want. Here, a movie database is used to fetch the API of the following name. IMDB is free to use, and we can make API calls in it.
                            </p>
                        </div>
                        <div className="card-footer flex justify-between items-center pt-2.5 border-t border-gray-300">
                            <span className="text-title font-extrabold text-xl">REACT JS</span>
                            <div className="card-button border border-black flex p-1 cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:text-black">
                                More info
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

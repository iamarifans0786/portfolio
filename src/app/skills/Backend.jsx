import React from 'react'
import Image from 'next/image'
import { SiBackendless } from 'react-icons/si'
import PythonIcon from '@/Assets/python.png'
import DjangoIcon from '@/Assets/django.png'
import DrfIcon from '@/Assets/restapi.png'
import SqliteIcon from '@/Assets/sqlite.png'
import SqlIcon from '@/Assets/sql.png'
import MysqlIcon from '@/Assets/mysql.png'
import ReduxIcon from '@/Assets/redux.png'
import Giticon from '@/Assets/git.png'
import Npmicon from '@/Assets/npm.png'

const Backend = () => {
    return (
        <>
            <div className='shadow-lg p-4 pb-6 w-[100%] md:w-[40%]'>
                <h1 className='text-2xl text-center font-bold text-gray-900 mb-4'><span> <SiBackendless className='inline mr-2 font-bold text-2xl' /> Backend / Tools</span></h1>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3 '>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={PythonIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Python</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={DjangoIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Django</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3 '>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={DrfIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Django Rest API</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={SqliteIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>SQLite</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3 '>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={MysqlIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>MySQL</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={ReduxIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Redux</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3'>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={Giticon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Git</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={Npmicon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>NPM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Backend
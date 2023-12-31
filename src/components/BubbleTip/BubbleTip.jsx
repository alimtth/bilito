// eslint-disable-next-line no-unused-vars
import React, {memo, useCallback, useEffect, useState} from 'react'
import customer from '@/assets/Images/stewardess.jpg'
import {Link} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function BubbleTip({}) {
  const [isShow, setIsShow] = useState(false)

  const handle = useCallback(() => {
    return setTimeout(()=>{
      setIsShow(true)
    },4000)


  },[])
  useEffect(() => {
    handle()
  }, [])
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = 10
  //     const shouldHide = window.scrollY > scrollThreshold
  //     setIsShow(!shouldHide)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <>
      <div
        className={`cloud ${isShow === true ? 'animated' : ''}`}
      >
        <div className="flamelab-cw-msg-box">
          <div className={'flex'}>
            <span className={'text-blue-500'}>
              فکر کنم بتونم کمکت کنم همراه من باش!!!
            </span>
            <img className={'w-1/2'} src={customer} />
          </div>

          <div className="flex gap-8">
            <Link
              onClick={() => setIsShow(false)}
              to={'/stepshop'}
              className={'transform hover:scale-105 text-blue-500'}
            >
              بزن بریم
            </Link>
            <div
              onClick={() => setIsShow(false)}
              className={'transform cursor-pointer hover:scale-105 text-gray-20'}
            >
              نه اوکیم
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(BubbleTip)

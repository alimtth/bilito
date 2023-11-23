// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
import {apiUpdateCurrentUser} from '@/api/user'

function EditUser() {
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    national_code: '',
    mobile: '',
  })
  const handleSaveChanges  = async () => {
    const res = await apiUpdateCurrentUser(userData)
    console.log(res)
  }
  return (
    <>
      <div className="flex flex-col mt-16">
        <div className="flex justify-between items-center ">
          <h3 className="font-bold">ویرایش اطلاعات</h3>
        </div>
        <div className="lg:outline outline-gray-400 rounded-lg mt-7 p-5 flex flex-col flex-wrap gap-8 justify-end">
          <div className="flex flex-col lg:flex-row flex-wrap justify-around gap-8">
            <InputTextField
              className="w-full lg:w-[350px]"
              size={'ssl'}
              value={userData.name}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  name: e.target.value,
                })
              }
            >
              نام و نام خانوادگی
            </InputTextField>
            <InputTextField
              className="w-full lg:w-[350px]"
              size={'ssl'}
              value={userData.gender}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  gender: e.target.value,
                })
              }
            >
              جنسیت
            </InputTextField>

            <InputTextField
              className="w-full lg:w-[350px]"
              size={'ssl'}
              value={userData.national_code}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  national_code: e.target.value,
                })
              }
            >
              کد ملی
            </InputTextField>
            <InputTextField
              className="w-full lg:w-[350px]"
              size={'ssl'}
              value={userData.mobile}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  mobile: e.target.value,
                })
              }
            >
              شماره موبایل
            </InputTextField>
          </div>
          <div className="justify-end flex">
            <Buttons
              variant="fill"
              className={'w-full lg:w-1/4 flex justify-center items-end'}
              onClick={handleSaveChanges}
            //   disabled={isSaving}
            >
              {/* {isSaving ? 'در حال ارسال' : 'ویرایش'} */}
            </Buttons>
            {/* <Buttons >
                            <a href="https://widget.raychat.io/655e21fae2bda8dde47a9c67?version=2">s</a>
                        </Buttons> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser

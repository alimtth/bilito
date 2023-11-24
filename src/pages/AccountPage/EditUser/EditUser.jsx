// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
import {apiUpdateCurrentUser, apiUpdateCurrentUserAvatar} from '@/api/user'
import {useAuthContext} from '@/providers/AuthProvider'
import {useNavigate} from 'react-router-dom'
import {useMutation} from '@tanstack/react-query'
import AvatarField from '@/components/Ui/AvatarField'

function EditUser() {
  const navigate = useNavigate()
  const {currentUser, setCurrentUser} = useAuthContext()
  const [errors, setErrors] = useState({})

  const updateUserMutation = useMutation({
    mutationFn: apiUpdateCurrentUser,
  })

  const updateUserAvatarMutation = useMutation({
    mutationFn: apiUpdateCurrentUserAvatar,
  })

  const [userData, setUserData] = useState({
    name: currentUser.name,
    gender: currentUser.gender,
    national_code: currentUser.national_code,
    mobile: currentUser.mobile,
  })

  const handleSaveChanges = async () => {
    if (
      !userData.name ||
      !userData.gender ||
      !userData.national_code ||
      !userData.mobile
    ) {
      return
    }

    updateUserMutation.mutate(userData, {
      onSuccess: (res) => {
        setCurrentUser(res.data)
        navigate('/account/data-user')
      },
      onError: (err) => {
        if (err?.response?.status == 422) {
          setErrors(err.response.data.errors)
        }
        console.log(err)
      },
    })
  }

  const handleChangeAvatar = (file) => {
    updateUserAvatarMutation.mutate(file, {
      onSuccess: (res) => {
        console.log(res)
      },
    })
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
              error={errors.name}
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
              error={errors.gender}
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
              error={errors.national_code}
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
              error={errors.mobile}
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
          <div className="flex flex-col gap-3 justify-start mr-10">
            <AvatarField
              onChange={handleChangeAvatar}
              loading={updateUserAvatarMutation.isPending}
            />
            <h3>عکس خود را بارگذاری کنید</h3>
          </div>
          <div className="justify-end flex">
            <Buttons
              loading={updateUserMutation.isPending}
              variant="fill"
              className={'w-full lg:w-1/4 flex justify-center items-end'}
              onClick={handleSaveChanges}
            >
              ویرایش
            </Buttons>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser

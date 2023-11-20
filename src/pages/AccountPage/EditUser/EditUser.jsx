// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
import {useUser} from '@/providers/UserDataProvider'

function EditUser() {
    const {userData, setUserData, savaUserData} = useUser()
    const [isSaving, setIsSaving] = useState(false)

    const handleSaveChanges = () => {
        setIsSaving(true)
        ///s

        setTimeout(() => {
            savaUserData(userData)
            setIsSaving(false)
        }, 1000)
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
                            value={userData.fullName}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    fullName: e.target.value,
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
                            value={userData.nationalCode}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    nationalCode: e.target.value,
                                })
                            }
                        >
                            کد ملی
                        </InputTextField>
                        <InputTextField
                            className="w-full lg:w-[350px]"
                            size={'ssl'}
                            value={userData.phoneNumber}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    phoneNumber: e.target.value,
                                })
                            }
                        >
                            شماره موبایل
                        </InputTextField>
                    </div>
                    <div className="justify-end flex">
                        <Buttons
                            variant="fill"
                            className={
                                'w-full lg:w-1/4 flex justify-center items-end'
                            }
                            onClick={handleSaveChanges}
                            disabled={isSaving}
                        >
                            {isSaving ? 'در حال ارسال' : 'ویرایش'}
                        </Buttons>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser

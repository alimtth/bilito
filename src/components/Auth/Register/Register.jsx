// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import InputTextField from '@/components/Ui/InputTextField'
import {Alert, AlertTitle} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import bilitoIcon from '@/assets/Images/Icons/BilitoIcone.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Buttons from '@/components/Ui/Button'
import {useAuthContext} from '@/providers/AuthProvider'
import {apiRegisterUser} from '@/api/user'

const schema = yup.object().shape({
  mobile: yup.string().required('فیلد نام کاربری اجباری است'),
  password: yup.string().required('فیلد پسورد اجباری است'),
  password_confirmation: yup.string().required().oneOf([yup.ref('password')], 'تکرار پسورد اشتباه است'),
})

function Register() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})
  const [isloding, setIsloding] = useState(false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const [error, setError] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()

  const {saveAccess} = useAuthContext()

  const handleCheckboxChange = () => {
    setIsButtonEnabled(!isButtonEnabled)
  }

  const onFormSubmit = async (data) => {
    if (isloding) return

    try {
      setErrMsg('')
      setIsloding(true)
      const result = await apiRegisterUser(data)

      saveAccess(result.data.token)
      navigate('/')

  
    } catch (err) {
      setErrMsg(err.toJSON().message)
    } finally {
      setIsloding(false)
    }
    setError('مشکل سرور')
  }

  return (
    <div>
      <div className="fixed inset-0 bg-blue-650 bg-opacity-10 backdrop-blur-[0.5px] flex justify-center items-center">
        <div className="fixed z-20 mt-[100px] opacity-75 mb-16">
          <div className="bg-white p-2 rounded-[8px] shadow-md">
            <div className="flex flex-col items-center gap-6 justify-center">
              <img
                src={bilitoIcon}
                alt=""
                className="w-[96px] flex justify-center mt-8"
              />
              <h3 className="font-semibold mt-7 flex justify-center text-[20px] animate-pulse hover:text-blue-650">
                ورود یا ثبت نام
              </h3>
              <form
                className="flex flex-col items-center px-6"
                onSubmit={handleSubmit(onFormSubmit)}
              >
                <InputTextField
                  size="slx"
                  type={'text'}
                  register={register('mobile')}
                >
                  شماره موبایل
                </InputTextField>
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobile?.message}
                  </p>
                )}
                <br />
                <InputTextField
                  size="slx" 
                  placeholder={''}
                  register={register('password')}
                >
                  پسورد
                </InputTextField>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password?.message}
                  </p>
                )}
                <br />
                <InputTextField
                  size="slx"
                  placeholder={''}
                  register={register('password_confirmation')}
                >
                  تکرار رمز عبور
                </InputTextField>
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password_confirmation?.message}
                  </p>
                )}

                <div className="flex flex-col">
                  <div className="flex gap-4  mt-[40px] text-gray-600 mr-4">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={handleCheckboxChange}
                    />
                    <h4 className='text-sm'>
                      با ورود و ثبت‌نام در سایت، با{' '}
                      <Link className="text-blue-650" to={'#'}>
                        قوانین بیلیتو
                      </Link>{' '}
                      موافقت می‌کنم.
                    </h4>
                  </div>
                  <Buttons
                    className="bg-gray-650 text-white flex justify-center  rounded-[8px] mt-4 mb-[32px]"
                    size="slx"
                    type="submit"
                    loading={isloding}
                    styles={{
                      backgroundColor: isButtonEnabled ? '#1D91CC' : '',
                    }}
                    disabled={!isButtonEnabled}
                  >
                    ثبت نام
                  </Buttons>
                  <Link to={'/login '} className="flex justify-center mb-1">
                    <Buttons> ورود</Buttons>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <img
          src={bilitoIconsss}
          alt=""
          className="lg:w-96 z-10	 blur-md relative -right-[700px] rotate-12 animate-pulse inline-block transition-transform duration-75"
        /> */}
      </div>
      {error && (
        <Alert
          severity="error"
          variant="filled"
          className="w-60 m-6 rounded-3xl animate-bounce "
          onClose={() => setError(false)}
        >
          <AlertTitle>Error</AlertTitle>
          <strong>{errMsg}</strong>
        </Alert>
      )}
    </div>
  )
}

export default Register

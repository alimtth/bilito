// eslint-disable-next-line no-unused-vars
import bilitoIcon from '@/assets/Images/Icons/BilitoIcone.png'
import InputTextField from '@/components/Ui/InputTextField'
import Button from '@/components/Ui/Button'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import bilitoIconsss from '@/assets/Images/Icons/AirplaneSelected.svg'
import {useAuthContext} from '@/providers/AuthProvider'
import {apiLoginUser} from '@/api/user'
import {useState} from 'react'
import Buttons from '@/components/Ui/Button'
import { Alert, AlertTitle } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

const schema = yup.object().shape({
  username: yup.string().required('فیلد نام کاربری اجباری است'),
  password: yup.string().min(6).max(12).required('فیلد پسورد اجباری است'),
})
function Login() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  const router = useRouter()
  const {isLoggedIn, saveAccess} = useAuthContext()
  const [isloding, setIsloding] = useState(false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [error, setError] = useState(null)

  const handleCheckboxChange = () => {
    setIsButtonEnabled(!isButtonEnabled)
  }
  const onFormSubmit = async (data) => {
    if (isLoggedIn === true) return

    try {
      setErrMsg('')
      setIsloding(true)
      const res = await apiLoginUser(data)
      saveAccess(res.data.token.accessToken)
      router.push('/')

      console.log(res)
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
        <div className="w-[600px] opacity-75">
          <div className="bg-white p-2 rounded-[8px]">
            <div className="flex flex-col items-center">
              <img
                src={bilitoIcon}
                alt=""
                className="w-[96px] flex justify-center mt-8"
              />
              <h3 className="font-semibold mt-7 flex justify-center text-[20px]">
                ورود یا ثبت نام
              </h3>

              <h6 className="-mr-[150px] font-normal text-gray-600 mt-[32px] mb-[16px]">
                کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
              </h6>
              <br />
              <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="flex flex-col justify-start items-start px-6"
              >
                <InputTextField
                  size="xl"
                  value={''}
                  placeholder={''}
                  register={register('username')}
                  className="w-[530px]"
                >
                  نام کاربری
                </InputTextField>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username?.message}
                  </p>
                )}
                <br />
                <InputTextField
                  size="md"
                  value={''}
                  placeholder={''}
                  register={register('password')}
                  className="w-[530px]"
                >
                  پسورد
                </InputTextField>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {' '}
                    {errors.password?.message}
                  </p>
                )}

                <div>
                  <div className="flex gap-4  mt-[40px] text-gray-600 mr-4">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={handleCheckboxChange}
                    />
                    <h4>
                      با ورود و ثبت‌نام در سایت، با{' '}
                      <Link className="text-blue-650" href='#'>
                        قوانین بیلیتو
                      </Link>{' '}
                      موافقت می‌کنم.
                    </h4>
                  </div>
                  <Buttons
                    className="bg-gray-650 text-white flex justify-center w-[536px] h-[48px] rounded-[8px] mt-4 mb-[32px]"
                    type="submit"
                    loading={isloding}
                    styles={{
                      backgroundColor: isButtonEnabled ? '#1D91CC' : '',
                    }}
                    disabled={!isButtonEnabled}
                  >
                    ورود
                  </Buttons>
                  <Link href='/auth/register' className="flex justify-center mb-1">
                    <Button> ثبت نام</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bilitoIconsss}
        alt=""
        className="lg:w-96 z-10	 blur-md relative right-[1290px] rotate-12 animate-pulse inline-block"
      />
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

export default Login

// eslint-disable-next-line no-unused-vars
import bilitoIcon from '@/assets/Images/Icons/BilitoIcone.png'
import {Link, useNavigate} from 'react-router-dom'
import InputTextField from '@/components/Ui/InputTextField'
import Button from '@/components/Ui/Button'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {useAuthContext} from '@/providers/AuthProvider'
import {apiLoginUser} from '@/api/user'
import {useState} from 'react'
import Buttons from '@/components/Ui/Button'
import { Alert, AlertTitle } from '@mui/material'

const schema = yup.object().shape({
  mobile: yup.string().required('فیلد نام کاربری اجباری است'),
  password: yup.string().required('فیلد پسورد اجباری است'),
})
function Login() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})
  const {isLoggedIn, saveAccess} = useAuthContext()
  const [isloding, setIsloding] = useState(false)
  const navigate = useNavigate()
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
      saveAccess(res.data.token)
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

      <div>
        <img src="" alt="dsds" />
      </div>
      <div className="fixed inset-0 bg-blue-650 bg-opacity-10 backdrop-blur-[0.5px] flex justify-center items-center">
        <div className=" opacity-75">
          <div className="bg-white p-2 rounded-[8px]">
            <div className="flex flex-col items-center">
              <img
                src={bilitoIcon}
                alt=""
                className="w-[96px] flex justify-center mt-8"
              />
              <h3 className="font-semibold mt-7 flex justify-center text-[20px] animate-pulse hover:text-blue-650">
                ورود یا ثبت نام
              </h3>
              <br />
              <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="flex flex-col items-center px-6"
              >
                <InputTextField
                  size="slx"
                  placeholder={''}
                  register={register('mobile')}
                >
                  نام کاربری
                </InputTextField>
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobile?.message}
                  </p>
                )}
                <br />
                <InputTextField
                  size="slx"
                  register={register('password')}
                >
                  پسورد
                </InputTextField>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {' '}
                    {errors.password?.message}
                  </p>
                )}

                <div className='flex flex-col'>
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
                    ورود
                  </Buttons>
                  <Link to={'/register'} className="flex justify-center mb-1">
                    <Button> ثبت نام</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
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

export default Login

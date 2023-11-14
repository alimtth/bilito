import InputTextField from '@/components/Ui/InputTextField'
import Buttons from '@/components/Ui/Button'
import FormListInputs from '@/components/Ui/FormListInputs/index.jsx'
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function FormList() {
  return (
    <>
      <div className="flex flex-col">
        <FormListInputs isAdult={true} />
        <FormListInputs isAdult={false} />
        <FormListInputs isAdult={false} />
      </div>

      <div>
        <div className="outline p-5 outline-gray-400 rounded-lg mt-7 mb-9 flex flex-col gap-4">
          <span className="text-xl font-bold">اطلاعات تماس</span>
          <p className="text-sm text-gray-500 font-light">
            در صورت مغایرت اطلاعات تماس این فرم با اطلاعات درج شده در حساب
            کاربری، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال خواهد شد.
            همچنین «اعلام تغییرات بلیط» یا «دریافت تاییدیه» از یکی از کانال‌های
            «اطلاعات تماس حساب کاربری» یا «اطلاعات همین فرم» صورت خواهد گرفت و
            بیلیتو متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم
            هر دو کانال را در دسترس نگه دارید.
          </p>
          <div className="flex lg:flex-row justify-center items-start gap-6">
            <InputTextField size={'ssl'}>ایمیل</InputTextField>
            <InputTextField size={'ssl'}>شماره موبایل</InputTextField>
          </div>
        </div>

        <div className="flex justify-center items-center pb-14">
          <Link to={'/form/confirm-buy'}>
            <Buttons className={'w-1/4 justify-center'} size={'xl '} variant='fill'>
              ادامه
            </Buttons>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FormList

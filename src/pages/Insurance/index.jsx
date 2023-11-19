import HomePageScreen from '@/components/NavBar/HomePageScreen'
import Button from '@/components/Ui/Button'
import InputTextField from '@/components/Ui/InputTextField'
import searchIcon from '@/assets/Images/Icons/search-normal.svg'
import tableReportMedical from '@/assets/Images/Icons/table_report-medical.svg'
import tablerDental from '@/assets/Images/Icons/tabler_dental.svg'
import plus from '@/assets/Images/Icons/iconoir_pharmacy-cross-square.svg'
import airplan from '@/assets/Images/Icons/airplane.svg'
import cardTick from '@/assets/Images/Icons/card-tick.svg'
function Insurace() {
  return (
    <>
      <HomePageScreen />
      <div className="p-8">
        <p className="font-bold text-blue-500">بیمه مسافرتی</p>
        <div className="w-full h-full flex flex-col justify-between gap-8 items-center">
          <InputTextField value={''} size="sm" className={'sm:px-44 lg:px-0 '}>
            کشور مبدا
          </InputTextField>
          <InputTextField value={''} size="sm" className={'sm:px-44 lg:px-0 '}>
            مدت سفر
          </InputTextField>
          <InputTextField value={''} size="sm" className={'sm:px-44 lg:px-0 '}>
            مسافران
          </InputTextField>
          <Button
            variant="fill"
            size="xl"
            className={' sm:px-56 lg:px-3'}
            type="submit"
          >
            <img src={searchIcon} />
            جستجو
          </Button>
        </div>
      </div>
      <div className="p-8">
        <p className="font-bold">بیمه مسافرتی چیست؟</p>
        <p>
          بیمه مسافرتی (Travel Insurance) یک نوع بیمه است که برای پوشش هزینه‌ها
          و خسارات مرتبط با سفرهای بین‌المللی یا داخلی ارائه می‌شود. این بیمه
          معمولاً توسط شرکت‌های بیمه عرضه می‌شود و شامل تعدادی پوشش است که
          می‌تواند شامل پوشش هزینه‌های پزشکی اضطراری، پوشش لغو سفر، پوشش بیمه
          مسافرتی برای خسارت اموال، مسئولیت مدنی و پوشش تأخیرات و لغو پرواز
          باشد. یکی از اصلی‌ترین پوشش‌های بیمه مسافرتی پوشش هزینه‌های پزشکی است.
          اگر در سفر به بیماری یا حادثه‌ای برخورد کنید و نیاز به درمان داشته
          باشید، بیمه مسافرتی ممکن است هزینه‌های مرتبط با ویزیت پزشک، بستری در
          بیمارستان، داروها و معالجه‌های دیگر را پوشش دهد
        </p>
        <div>
          <p className="font-bold py-8">خدمات بیمه مسافرتی</p>
          <p>
            خدمات بیمه مسافرتی شامل مجموعه‌ای از خدماتی هستند که توسط شرکت‌های
            بیمه به بیمه‌گزاران ارائه می‌شوند. این خدمات در ارتباط با موارد
            مختلفی از جمله پوشش‌ها، مشاوره‌ها و خدمات اضافی مرتبط با سفرها ارائه
            می‌شود. به طور کلی، خدمات بیمه مسافرتی عبارتند از:
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex flex-row items-center gap-3">
            <img src={tableReportMedical} alt="table" />
            <div>
              <span className="font-bold">هزینه های پزشکی:</span>
              <span>
                هزینه مراقبت پزشکی و بستری در بیمارستان برای درمان بیماری‌ها یا
                حوادث و صدمات مختلف.
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={tablerDental} alt="tabler" />
            <div>
              <span className="font-bold">هزینه های دندانپزشکی:</span>
              <span>
                درمان ضروری برای درمان عفونت شدید، دندان درد، کشیدن دندان و...
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src={plus} alt="airplan" />
            <div>
              <span className="font-bold">جبران هزینه دارو:</span>
              <span>
                در صورت مفقود شدن داروهای همراه مسافر (به شرط ضروری بودن مصرف
                آن‌ها) و ارسال مجدد داروهای مورد نیاز بیمه‌شده.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src={airplan} alt="airplan" />
            <div>
              <span className="font-bold">هزینه‌های بازگشت: </span>
              <span>
                در صورت ابتلا به بیماری یا وقوع حادثه‌ای که بیش از 10 روز نیاز
                به بستری شدن در بیمارستان داشته باشد.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src={cardTick} alt="cardtick" />
            <div>
              <span className="font-bold">جبران خسارت اموال:</span>
              <span>
                بیمهه مسافرتی می‌تواند در صورت خسارت، سرقت یا از دست رفتن وسایل
                شخصی و اموال شما در سفر تأمین کند
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="py-8">
            <p className="font-bold">مبلغ بیمه مسافرتی</p>
          </div>
          <div>
            <p>
              قیمت بیمه مسافرتی بر اساس عوامل متعددی تعیین می‌شود. در زیر به
              برخی از اصلی‌ترین عواملی که بر قیمت بیمه مسافرتی تأثیر می‌گذارند،
              اشاره شده است.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <span className="font-bold">مقصد سفر: </span>
              <span>
                مقصد سفر یکی از عوامل اصلی در تعیین قیمت بیمه مسافرتی است. برخی
                مقاصد سفر به دلیل خطرات بیشتر، هزینه درمان بالاتر یا موارد دیگر،
                قیمت بیمه بیشتری دارند.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <span className="font-bold">مدت زمان سفر:</span>

              <span>
                مدت زمان سفر نیز تأثیر قابل توجهی در قیمت بیمه دارد. معمولاً
                هرچه مدت زمان سفر بیشتر باشد، قیمت بیمه مسافرتی نیز بالاتر خواهد
                بود
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <span className="font-bold">سن و تعداد مسافران:</span>

              <span>
                سن و تعداد مسافران ممکن است نیز تأثیرگذار باشند. برخی
                بیمه‌گزاران در سنین بالا ممکن است قیمت بیمه بیشتری داشته باشند.
                همچنین، در صورتی که تعداد مسافران بیشتر باشد، قیمت بیمه ممکن است
                بیشتر شود.
              </span>
            </div>
          </div>
        </div>
        <table className="table-auto border border-blue-300 ">
          <tr>
            <th>mmd</th>
            <th>mmd</th>
          </tr>
          <tr>
            <td>mmd</td>
            <td>mmd</td>
          </tr>
          <tr>
            <td>mmd</td>
            <td>mmd</td>
          </tr>
          <tr>
            <td>mmd</td>
            <td>mmd</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Insurace

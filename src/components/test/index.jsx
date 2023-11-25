import icon1 from '@/assets/Images/ticket_levels.svg'
import icon2 from '@/assets/Images/best-price.svg'
import icon3 from '@/assets/Images/whytrip.svg'

function Test() {
    return (
        <div className={'flex gap-8 justify-between  mt-10'} id={'container'}>
            <div className="card-container basis-1/3  hover:shadow-2xl">
                <div className="flex items-center ">
                    <img className="h-14 mt-4 mb-3 ml-3 blur-0" alt="خرید اینترنتی بلیط هواپیما"
                         src={icon1}
                         data-src="/Content/Upload/Images/ticket_levels.svg"/>
                    <h3 className="font-bold text-sm text-[#3a5971]">خرید اینترنتی بلیط هواپیما</h3>
                </div>
                <div className="text-sm overflow-y-scroll h-[120px] px-6 text-justify" id={'style-1'}>
                    <span className={'text-sm font-light lin leading-6'}>
                         <p>
                             خرید بلیط هواپیما اولین دغدغه مسافران
                             برای شروع یک سفر هوایی است. در دنیای پرسرعت امروزی خرید آنلاین بلیط هواپیما
                             بهترین روش خرید بلیط است که در هزینه و زمان شما صرفه‌جویی می‌کند. پیشنهاد ما خرید اینترنتی
                             بلیط هواپیما از سامانه تریپ است. در ادامه مراحل خرید بلیط هواپیما از تریپ را با هم مرور می‌کنیم:
                         </p>
                        <ul className={'list-disc'}>
                            <li>
                                در ابتدا برای مشاهده ساعت و قیمت پروازهای داخلی و خارجی شهر مبدا و مقصد خود را انتخاب کنید.
                            </li>
                            <li>در گام بعدی، یک طرفه یا رفت و برگشت بودن پرواز را تعیین کرده
                                و پس از انتخاب تاریخ مورد نظر پروازتان، تعداد مسافر(کودک یا بزرگسال)
                                و کلاس پروازی (اکونومی یا بیزینس) بر روی دکمه نارنجی رنگ جستجو کلیک کنید.
                            </li>
                            <li>در این مرحله موتور جستجوی پرواز تریپ با دقت و سرعت
                                بالا بیش از هزاران ایرلاین و ده‌ها تامین کننده بین المللی بلیط هواپیما
                                را جستجو کرده و فهرستی از بهترین پروازها را متناسب با مشخصات وارد شده نمایش می‌دهد.
                            </li>
                            <li>حالا شما می‌توانید لیستی از پروازها را با ایرلاین‌های مختلف مشاهده کنید
                                و از طریق فیلترهای سمت راست نوع بلیط (سیستمی و چارتری)،
                                کلاس پروازی (اکونومی یا بیزینس)، خطوط هوایی (ایرلاین‌های مختلف داخلی و خارجی)
                                ، ساعت حرکت، تعداد توقف و حتی فرودگاه مورد نظر خود را تغییر دهید.
                            </li>
                        </ul>
                        <p>در ضمن در بالای صفحه قبل از لیست پروازها می‌توانید
                            تقویم قیمتی بلیط هواپیما را مشاهده کرده و به راحتی مناسب‌ترین و ارزانترین بلیط را انتخاب کنید.
                        </p>
                    </span>
                </div>

            </div>
            <div className="card-container basis-1/3  hover:shadow-2xl">
                <div className="flex items-center ">
                    <img className="h-14 mt-4 mb-3 ml-3 blur-0" alt="قیمت بلیط هواپیما"
                         src={icon2}
                         data-src="/Content/Upload/Images/ticket_levels.svg"/>
                    <h3 className="font-bold text-sm text-[#3a5971]">قیمت بلیط هواپیما</h3>
                </div>
                <div className="text-sm overflow-y-scroll h-[120px] px-6 text-justify" id={'style-1'}>
                    <span  className={'text-sm font-light leading-6'}>
                         <p>
                             قیمت بلیط هواپیما به عوامل مختلفی بستگی دارد که سیستمی یا چارتری بودن پرواز، کلاس پروازی
                             ، حجم تقاضا و همچنین تاریخ رزرو بلیط هواپیما از جمله این عوامل است؛ مثلا در ایام نوروز به
                             دلیل حجم بالای تقاضا برای خرید بلیط ممکن است قیمت بلیط هواپیما کمی بالاتر باشد یا برای برخی
                             از مسیرها بلیط هواپیما لحظه آخری با نرخ کمتر موجود باشد. در ضمن، قیمت بلیط هواپیما
                             برای نوزادان زیر دو سال 10 درصد و برای کودکان 2 تا 12 سال بین 50 تا 100 درصد نرخ پرواز بزرگسال است.
                         </p>
                    </span>
                </div>

            </div>
            <div className="card-container basis-1/3  hover:shadow-2xl">
                <div className="flex items-center ">
                    <img className="h-14 mt-4 mb-3 ml-3 blur-0" alt="مزایای خرید بلیط هواپیما از تریپ"
                         src={icon3}
                         data-src="/Content/Upload/Images/ticket_levels.svg"/>
                    <h3 className="font-bold text-sm text-[#3a5971]">مزایای خرید بلیط هواپیما از تریپ</h3>
                </div>
                <div className="text-sm overflow-y-scroll h-[120px] px-6 text-justify" id={'style-1'}>
                   <span  className={'text-sm font-light leading-6'}>
                      <p>مهم‌ترین مزیت خرید بلیط هواپیما چارتر یا سیستمی در تریپ سرعت
                          بالا در رزرو بلیط است. علاوه بر این، برای خرید و رزرو بلیط هواپیما
                          این امکان را دارید تا قیمت بلیط هواپیما را در ایرلاین‌های مختلف مقایسه کنید و از بین
                          تمامی ایرلاین‌های خارجی و داخلی با توجه به تاریخ، ساعت پرواز و نوع بلیط حق انتخاب داشته باشید.
                          همچنین در سمت راست صفحه رزرو بلیت هواپیما علاوه بر نوع بلیط سیستمی و چارتری،
                          می‌توانید تعداد توقف و خطوط هوایی موردنظر خود را مشخص کنید.</p>
                       <ul className={'list-disc'}>
                           <li>
                               سرعت رزرو بالا
                           </li>
                           <li>
                               پوشش تمامی ایرلاین‌های فعال و معتبر
                           </li>
                           <li>
                               تقویم قیمتی بلیط هواپیما
                           </li>
                           <li>
                               فیلترهای مختلف برای یافتن بلیط دلخواه
                           </li>
                           <li>
                               دسترسی آسان از طریق وبسایت، موبایل و اپلیکیشن تریپ
                           </li>
                           <li>
                               پشتیبانی 24 ساعته کارشناسان تریپ
                           </li>
                       </ul>
                       <p>از جمله مزایایی است که برای کاربران گرامی تریپ امکان خریدی مطمئن و راحت را فراهم کرده
                           و سامانه تریپ را به یکی از معتبرترین سایت‌های خرید بلیط هواپیما در ایران تبدیل می‌کند.
                       </p>
                   </span>
                </div>

            </div>

        </div>
    );
}

export default Test;
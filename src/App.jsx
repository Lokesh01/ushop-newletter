//images header
import bgHeader from "./assets/topHeader/bg-header.svg";
import voucherBgWhite from "./assets/topHeader/voucher-bg-white.svg";
import uShopLogo from "./assets/topHeader/ushop-logo.svg";
import mobileInHand from "./assets/topHeader/mobile-in-hand.svg";

//images top deals
import discountVoucher from "./assets/topDeals/voucher-bg.svg";
import img1 from "./assets/topDeals/image-1.svg";
import img2 from "./assets/topDeals/image-2.svg";
import img3 from "./assets/topDeals/image-3.svg";
import img4 from "./assets/topDeals/image-4.svg";
import img5 from "./assets/topDeals/image-5.svg";
import img6 from "./assets/topDeals/image-6.svg";

//images unique shop features
import EasyReturn from "./assets/UniquePoints/easy-return.svg";
import FastDelivery from "./assets/UniquePoints/speedy-delivery.svg";
import OrigProducts from "./assets/UniquePoints/original-products.svg";
import SecurePayments from "./assets/UniquePoints/secure-payments.svg";

//images new products
import newProdTitle from "./assets/newProducts/title.svg";
import newImg1 from "./assets/newProducts/image1.svg";
import newImg2 from "./assets/newProducts/image2.svg";
import newImg3 from "./assets/newProducts/image3.svg";

//images blog
import imgBlog1 from "./assets/blog/blog-1.svg";
import imgBlog2 from "./assets/blog/blog-2.svg";

//images footer
import insta from "./assets/socialMedia/insta.svg";
import fb from "./assets/socialMedia/fb.svg";
import tikTok from "./assets/socialMedia/tik-tok.svg";
import youtube from "./assets/socialMedia/yt.svg";

function App() {
  return (
    <div
      style={{
        maxWidth: "48rem",
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "hidden",
      }}
    >
      {/* first section */}
      <div
        style={{ backgroundImage: `url(${bgHeader})` }}
        className="h-fit bg-cover bg-center max-w-full max-[768px]:px-5 md:px-10"
      >
        <div className="flex justify-between items-center w-full py-4">
          <img src={uShopLogo} alt="ushop-logo" className="w-[32%]" />
          <p className="max-[768px]:text-xl text-2xl text-[#24211B] font-medium">
            January
          </p>
        </div>

        <div className="pt-2 md:pt-4 flex px-5">
          <div className="flex flex-col w-[60%]">
            <p className="max-[768px]:text-xl text-5xl text-[#24211B] font-bold w-full">
              Shop Online <br /> On Your Demand
            </p>
            <div className="mt-2">
              <p className="max-[768px]:text-sm text-2xl font-medium text-[#3A3A3A]">
                City Wide Same Day
              </p>

              <a href="https://www.ushop.market/" target="_blank">
                <button className="mt-2 md:mt-5 max-[768px]:text-sm text-2xl bg-[#F7A526] text-black max-[768px]:px-10 px-14 max-[768px]:py-2 py-3 rounded-[30px] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  BUY NOW
                </button>
              </a>
            </div>
          </div>

          <div className="w-[50%]">
            <img src={mobileInHand} alt="mobile-in-hand" />
          </div>
        </div>
      </div>

      {/* second section welcome voucher */}
      <div className="bg-[#F3DCB6] max-w-full max-[768px]:px-5 px-10 pb-5 h-fit">
        <div className="bg-gradient-to-r from-[#FB8400] to-[#FFA500] px-4 pt-2 pb-3 md:pb-5 rounded-lg">
          <p className="max-[768px]:text-lg text-2xl text-white font-semibold md:mb-2">
            Welcome Voucher
          </p>
          <div
            style={{ backgroundImage: `url(${voucherBgWhite})` }}
            className="h-fit bg-cover bg-center max-w-full max-[768px]:px-4 px-8 py-2 rounded-lg"
          >
            <div className="flex flex-col max-w-full">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-[#FA1722] max-[768px]:text-3xl text-[56px] font-semibold">
                    $5.00
                  </p>
                  <p className="max-[768px]:text-sm text-xl text-[#282828] mb-4">
                    For All New Signups
                  </p>
                </div>

                <a href="https://www.ushop.market/signup/" target="_blank">
                  <button className="md:mt-5 max-[768px]:text-base text-2xl bg-[#F7A526] text-black max-[768px]:px-5 px-10 max-[768px]:py-1 py-3 rounded-[30px] font-semibold">
                    Claim
                  </button>
                </a>
              </div>

              <p className="text-[#3A3A3A] max-[768px]:text-sm text-xl">
                *To Be Used In 7 days of Signup
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third section top deals */}
      <div className="bg-[#FFEADF] max-w-full my-5 max-sm:mx-2 rounded max-[768px]:px-3 px-5 pt-5 pb-8 h-fit flex flex-col items-center">
        <p className="max-[768px]:text-3xl text-[40px] font-semibold text-center">
          <span className="text-black">Top</span>
          <span className="text-[#F95554]">Deals</span>
        </p>

        <div className="grid grid-cols-2 max-[768px]:gap-3 gap-5 w-full mt-5">
          {/* Card 1 */}
          <div className="flex flex-col h-fit bg-white rounded max-[768px]:px-2 px-3 max-[768px]:py-3 py-4 max-[768px]:gap-2 gap-3">
            <div className="flex flex-col items-center justify-center font-medium">
              <img
                src={img1}
                alt="Haruka All-In-One (AIO) Moisturizer From Japan..."
                className="max-[768px]:max-w-[150px]"
              />
              <p className="text-xl text-black overflow-hidden text-ellipsis whitespace-normal line-clamp-2 max-[768px]:text-[0.875rem]">
                Haruka All-In-One
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                style={{ backgroundImage: `url(${discountVoucher})` }}
                className="w-[70%] md:w-[40%] text-right bg-cover bg-center pr-2 py-1 rounded"
              >
                <p className="max-[768px]:text-sm text-[1.125rem] leading-[1.625rem] bg-gradient-to-r from-[#954D2E] to-[#5E1212] text-transparent bg-clip-text font-medium">
                  76.31% Off
                </p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#F7A526] max-[768px]:text-xl text-3xl font-semibold">
                  $5.90
                </p>
                <p className="text-[#999999] line-through max-[768px]:text-sm text-xl">
                  $24.90
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-fit bg-white rounded max-[768px]:px-2 px-3 max-[768px]:py-3 py-4 max-[768px]:gap-2 gap-3">
            <div className="flex flex-col items-center justify-center font-medium">
              <img
                src={img2}
                alt="[Bundle Of 8] - Golden Bridge Biryani Rice/Jasm..."
                className="max-[768px]:max-w-[150px]"
              />
              <p className="max-[768px]:text-sm text-xl text-black">
                [Bundle Of 8] - Golden Bridge Biryani Rice/Jasm...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                style={{ backgroundImage: `url(${discountVoucher})` }}
                className="w-[70%] md:w-[40%] text-right bg-cover bg-center pr-2 py-1 rounded"
              >
                <p className="max-[768px]:text-sm text-[18px] leading-[26px] bg-gradient-to-r from-[#954D2E] to-[#5E1212] text-transparent bg-clip-text font-medium">
                  57.88% Off
                </p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#F7A526] max-[768px]:text-xl text-3xl font-semibold">
                  $29.99
                </p>
                <p className="text-[#999999] line-through max-[768px]:text-sm text-xl">
                  $71.20
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-fit bg-white rounded max-[768px]:px-2 px-3 max-[768px]:py-3 py-4 max-[768px]:gap-2 gap-3">
            <div className="flex flex-col items-center justify-center font-medium">
              <img
                src={img3}
                alt="Smiling Fish [Pumpui] Crispy Baby Clam Snack..."
                className="max-[768px]:max-w-[150px]"
              />
              <p className="max-[768px]:text-sm text-xl text-black">
                Smiling Fish [Pumpui] Crispy Baby Clam Snack...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                style={{ backgroundImage: `url(${discountVoucher})` }}
                className="w-[70%] md:w-[40%] text-right bg-cover bg-center pr-2 py-1 rounded"
              >
                <p className="max-[768px]:text-sm text-[18px] leading-[26px] bg-gradient-to-r from-[#954D2E] to-[#5E1212] text-transparent bg-clip-text font-medium">
                  39.04% Off
                </p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#F7A526] max-[768px]:text-xl text-3xl font-semibold">
                  $8.90
                </p>
                <p className="text-[#999999] line-through max-[768px]:text-sm text-xl">
                  $14.60
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col h-fit bg-white rounded max-[768px]:px-2 px-3 max-[768px]:py-3 py-4 max-[768px]:gap-2 gap-3">
            <div className="flex flex-col items-center justify-center font-medium">
              <img
                src={img4}
                alt="Osim UThron V (Black) Gaming massage Chair..."
                className="max-[768px]:max-w-[150px]"
              />
              <p className="max-[768px]:text-sm text-xl text-black">
                Osim UThron V (Black) Gaming massage Chair...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                style={{ backgroundImage: `url(${discountVoucher})` }}
                className="w-[70%] md:w-[40%] text-right bg-cover bg-center pr-2 py-1 rounded"
              >
                <p className="max-[768px]:text-sm text-[18px] leading-[26px] bg-gradient-to-r from-[#954D2E] to-[#5E1212] text-transparent bg-clip-text font-medium">
                  37.99% Off
                </p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#F7A526] max-[768px]:text-xl text-3xl font-semibold">
                  $1549.00
                </p>
                <p className="text-[#999999] line-through max-[768px]:text-sm text-xl">
                  $2486.00
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col h-fit bg-white rounded max-[768px]:px-2 px-3 max-[768px]:py-3 py-4 max-[768px]:gap-2 gap-3">
            <div className="flex flex-col items-center justify-center font-medium">
              <img
                src={img5}
                alt="[Bundle of 3] Evolutionary Slimming 3-Pack..."
                className="max-[768px]:max-w-[150px]"
              />
              <p className="max-[768px]:text-sm text-xl text-black">
                [Bundle of 3] Evolutionary Slimming 3-Pack...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                style={{ backgroundImage: `url(${discountVoucher})` }}
                className="w-[70%] md:w-[40%] text-right bg-cover bg-center pr-2 py-1 rounded"
              >
                <p className="max-[768px]:text-sm text-[18px] leading-[26px] bg-gradient-to-r from-[#954D2E] to-[#5E1212] text-transparent bg-clip-text font-medium">
                  86.09% Off
                </p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#F7A526] max-[768px]:text-xl text-3xl font-semibold">
                  $13.90
                </p>
                <p className="text-[#999999] line-through max-[768px]:text-sm text-xl">
                  $99.90
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col h-fit bg-white rounded max-[768px]:px-2 px-3 max-[768px]:py-3 py-4 max-[768px]:gap-2 gap-3">
            <div className="flex flex-col items-center justify-center font-medium">
              <img
                src={img6}
                alt="Kelly's Sliced Ham-Breakfast Ham 200g..."
                className="max-[768px]:max-w-[150px]"
              />
              <p className="max-[768px]:text-sm text-xl text-black">
                {"Kelly's Sliced Ham-Breakfast Ham 200g..."}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                style={{ backgroundImage: `url(${discountVoucher})` }}
                className="w-[70%] md:w-[40%] text-right bg-cover bg-center pr-2 py-1 rounded"
              >
                <p className="max-[768px]:text-sm text-[18px] leading-[26px] bg-gradient-to-r from-[#954D2E] to-[#5E1212] text-transparent bg-clip-text font-medium">
                  9.23% Off
                </p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[#F7A526] max-[768px]:text-xl text-3xl font-semibold">
                  $5.90
                </p>
                <p className="text-[#999999] line-through max-[768px]:text-sm text-xl">
                  $6.50
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="https://www.ushop.market/" target="_blank">
          <button className="mt-7 max-[768px]:text-xl text-2xl bg-[#F7A526] text-black max-[768px]:px-10 px-14 max-[768px]:py-2 py-3 rounded-[30px] font-semibold">
            Learn More
          </button>
        </a>
      </div>

      {/* fourth section */}
      <div className="bg-[#F7F0FF] max-w-full">
        <div className="flex flex-col items-center justify-center text-2xl md:text-4xl font-semibold text-black pt-5">
          <p>Shop With Peace Of Mind</p>
          <p>Fast Delivery</p>
        </div>

        <div className="px-[50px] md:px-[180px] py-3 md:py-5">
          {/* first row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex flex-col items-center">
              <img
                src={FastDelivery}
                alt="speedy-delivery"
                className="max-sm:w-[70px]"
              />
              <div className="flex flex-col items-center text-base md:text-2xl font-semibold text-[#333333]">
                <p>Speedy</p>
                <p>Delivery</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={EasyReturn}
                alt="speedy-delivery"
                className="max-sm:w-[70px]"
              />
              <div className="flex flex-col items-center text-lg md:text-2xl font-semibold text-[#333333]">
                <p>Easy Return</p>
                <p>Policy</p>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={SecurePayments}
                alt="speedy-delivery"
                className="max-sm:w-[4.375rem]"
              />
              <div className="flex flex-col items-center text-base md:text-2xl font-semibold text-[#333333]">
                <p>100% Secure</p>
                <p>Payments</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={OrigProducts}
                alt="speedy-delivery"
                className="max-sm:w-[70px]"
              />
              <div className="flex flex-col items-center text-base md:text-2xl font-semibold text-[#333333]">
                <p>100% Original</p>
                <p>Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth section new products */}
      <div className="bg-white max-w-full flex flex-col items-center mt-10">
        <img src={newProdTitle} alt="new products" className="w-[50%]" />

        <div className="grid grid-cols-3 gap-2 max-w-full mt-8 px-3 md:px-5">
          {/* Card 1 */}
          <div className="flex flex-col h-fit border border-[#EDEDED] rounded">
            <img src={newImg1} alt="Vvave Nimbus Bladeless Fan Air..." />
            <div className="flex flex-col gap-1 py-3 px-4">
              <p className="text-black text-base md:text-xl">
                Vvave Nimbus Bladeless Fan Air...
              </p>
              <p className="text-lg md:text-2xl text-[#F7A526] font-semibold">
                $399.00
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-fit border border-[#EDEDED] rounded">
            <img src={newImg2} alt="Ferragamo Continental Wallet..." />
            <div className="flex flex-col gap-1 py-3 px-4">
              <p className="text-black text-base md:text-xl">
                Ferragamo Continental Wallet...
              </p>
              <p className="text-lg md:text-2xl text-[#F7A526] font-semibold">
                $199.00
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-fit border border-[#EDEDED] rounded">
            <img src={newImg3} alt="Frozen KS Japanese Soy..." />
            <div className="flex flex-col gap-1 py-3 px-4">
              <p className="text-black text-base md:text-xl">
                Frozen KS Japanese Soy...
              </p>
              <p className="text-lg md:text-2xl text-[#F7A526] font-semibold">
                $5.04
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col h-fit border border-[#EDEDED] rounded">
            <img src={newImg1} alt="Vvave Nimbus Bladeless Fan Air..." />
            <div className="flex flex-col gap-1 py-3 px-4">
              <p className="text-black text-base md:text-xl">
                Vvave Nimbus Bladeless Fan Air...
              </p>
              <p className="text-lg md:text-2xl text-[#F7A526] font-semibold">
                $399.00
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col h-fit border border-[#EDEDED] rounded">
            <img src={newImg2} alt="Ferragamo Continental Wallet..." />
            <div className="flex flex-col gap-1 py-3 px-4">
              <p className="text-black text-base md:text-xl">
                Ferragamo Continental Wallet...
              </p>
              <p className="text-lg md:text-2xl text-[#F7A526] font-semibold">
                $199.00
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col h-fit border border-[#EDEDED] rounded">
            <img src={newImg3} alt="Frozen KS Japanese Soy..." />
            <div className="flex flex-col gap-1 py-3 px-4">
              <p className="text-black text-base md:text-xl">
                Frozen KS Japanese Soy...
              </p>
              <p className="text-lg md:text-2xl text-[#F7A526] font-semibold">
                $5.04
              </p>
            </div>
          </div>
        </div>

        <a href="https://www.ushop.market/" target="_blank">
          <button className="mt-5 md:mt-8 max-[768px]:text-xl text-2xl bg-[#F7A526] text-black max-[768px]:px-10 px-14 max-[768px]:py-2 py-3 rounded-[30px] font-semibold">
            Learn More
          </button>
        </a>
      </div>

      {/* sixth section blog */}
      <div className="bg-[#FFEED4] max-w-full flex flex-col items-center mt-10">
        <p className="text-black text-3xl md:text-[2.5rem] font-semibold my-8">
          Ushop Blog
        </p>

        <div className="flex flex-col items-center px-5 md:px-10 gap-5 md:gap-10">
          <a
            href="https://www.ushop.market/blog/article/why-opt-for-ushop-for-all-your-health-and-well-being-requirements/"
            target="_blank"
          >
            <div className="flex flex-col bg-white rounded-md">
              <img src={imgBlog1} alt="blog1" />
              <p className="text-xl md:text-[1.75rem] md:leading-10 font-medium p-3 md:p-4">
                Why Opt For Ushop For All Your Health And Well-Being
                Requirements ?
              </p>
            </div>
          </a>

          <a
            href="https://www.ushop.market/blog/article/experience-the-magic-of-unique-cookies-from-pelynoobakes/"
            target="_blank"
          >
            <div className="flex flex-col bg-white rounded-md mb-7">
              <img src={imgBlog2} alt="blog2" />
              <p className="text-xl md:text-[28px] md:leading-10 font-medium p-3 md:p-4">
                Experience The Magic Of Unique Cookies From Pelynoobakes
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* seventh footer section */}
      <div className="bg-white max-w-full px-5 py-8">
        <p className="text-[#494949] text-xl md:text-2xl font-semibold">
          Don’t You Wish To ... <br />
          Receive Your Online Orders The Day You Ordered?
        </p>

        <p className="text-sm md:text-base text-[#494949] mt-5 font-medium">
          Do So With <span className="text-[#F7A526] font-semibold">UShop</span>{" "}
          <br /> UShop Is Your Delivery Integrated Shopping Platform. <br />{" "}
          When You’re Checking Out, Select When You Wish To Receive Your Items,
          <br /> Including Same Day Options. Shop Online Like You’re In-Stores.{" "}
          <br /> For Businesses, Operate Like You Own A Dynamic Fleet. UShop Is
          The Smarter <br /> Platform That Takes Care Of Your Fulfilment
          Island-Wide Seamlessly. <br /> We Combine The Merits Of Conventional
          E-Commerce With Innovations In Last <br /> Mile Delivery.
        </p>

        <div className="flex gap-10 items-center my-5">
          <a href="https://www.instagram.com/ushop.market/" target="_blank">
            <img src={insta} alt="instagram" className="max-sm:w-[70%]" />
          </a>
          <a
            href="https://www.facebook.com/ushopmarket.singapore/"
            target="_blank"
          >
            <img src={fb} alt="facebook" className="max-sm:w-[70%]" />
          </a>
          <a href="">
            <img src={tikTok} alt="tik-Tok" className="max-sm:w-[70%]" />
          </a>
          <a href="https://www.youtube.com/@uShopSingapore" target="_blank">
            <img src={youtube} alt="youtube" className="max-sm:w-[70%]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

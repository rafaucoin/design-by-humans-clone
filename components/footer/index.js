import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col  mt-[20vh] gap-10 md:flex-row md:h-[80vh] bg-[#1b2224] px-[10%] py-[5%] ">
      1
      <div className="flex flex-col w-[100%]">
        <div className="flex text-white flex-col md:flex-row flex-wrap  gap-[50px]">
          <section className="flex-col gap-2 flex">
            <a
              href="/help/"
              title="Need Help?"
              className="hover:underline uppercase  text-lg"
            >
              Need Help?
            </a>

            <a
              href="/help/faq/"
              title="F.A.Q."
              className="text-[#817f7f] text-sm text-md"
            >
              F.A.Q.
            </a>
            <a
              href="/help/shipping/"
              title="Shipping"
              className="text-[#817f7f] text-sm text-md"
            >
              Shipping
            </a>
            <a
              href="/help/returns/"
              title="Returns"
              className="text-[#817f7f] text-sm text-md"
            >
              Returns
            </a>
            <a
              href="/help/size-chart/"
              title="Size Chart"
              className="text-[#817f7f] text-sm text-md"
            >
              Size Chart
            </a>
            <a
              href="/help/contact-us/"
              title="Contact Us"
              className="text-[#817f7f] text-sm text-md"
            >
              Contact Us
            </a>
            <a
              href="/OrderStatus/"
              title="Order Status"
              className="text-[#817f7f] text-sm text-md"
            >
              Order Status
            </a>
          </section>
          <section className="flex-col gap-2 flex">
            <a
              href="/shop/new/"
              title="Shop"
              className="hover:underline uppercase text-lg"
            >
              Shop
            </a>

            <a
              href="/shop/featured-collections/"
              title="Collections"
              className="text-[#817f7f] text-sm text-md"
            >
              Collections
            </a>
            <a
              href="/shop/t-shirt-design-categories/"
              title="Categories"
              className="text-[#817f7f] text-sm text-md"
            >
              Categories
            </a>
            <a
              href="/shop/egift-cards/"
              title="Gift Cards"
              className="text-[#817f7f] text-sm text-md"
            >
              Gift Cards
            </a>
            <a
              href="/student-discount/"
              title="Student Discount"
              className="text-[#817f7f] text-sm text-md"
            >
              Student Discount
            </a>
          </section>
          <section className="flex-col gap-2 flex">
            <span className="text-bold uppercase">Community</span>

            <a
              href="/store-signup/artist/"
              title="Open A Store"
              className="text-[#817f7f] text-sm text-md"
            >
              Open A Store
            </a>
            <a
              href="http://blog.designbyhumans.com/"
              title="Blog"
              className="text-[#817f7f] text-sm text-md"
            >
              Blog
            </a>
            <a
              href="/contests/"
              title="Art Contests"
              className="text-[#817f7f] text-sm text-md"
            >
              Art Contests
            </a>
          </section>
          <section className="flex-col gap-2 flex">
            <span className="text-bold ">ABOUT US</span>

            <a
              href="/store-signup/artist/"
              title="Open A Store"
              className="text-[#817f7f] text-sm text-md"
            >
              Careers
            </a>
            <a
              href="http://blog.designbyhumans.com/"
              title="Blog"
              className="text-[#817f7f] text-sm text-md"
            >
              Affiliates
            </a>
            <a
              href="/contests/"
              title="Art Contests"
              className="text-[#817f7f] text-sm text-md"
            >
              Ambassador Progrem
            </a>
          </section>
        </div>
        <div id="footer-links" className="text-white text-sm mt-auto">
          <span className="footer-link icon-hover">
            © 2022 Design By Humans
          </span>

          <span className="footer-link-div">/</span>

          <a href="/help/policies/terms/" className="footer-link icon-hover">
            Terms of Service
          </a>

          <span className="footer-link-div">/</span>

          <a href="/help/copyright/" className="footer-link icon-hover">
            Copyright
          </a>

          <span className="footer-link-div">/</span>

          <a href="/help/policies/privacy/" className="footer-link icon-hover">
            Privacy Policy
          </a>

          <span className="footer-link-div">/</span>

          <a href="/help/glossary/" className="footer-link icon-hover">
            Glossary
          </a>

          <span className="footer-link-div">/</span>

          <a href="/sitemap/" className="footer-link icon-hover">
            Sitemap
          </a>
        </div>
      </div>
      <div className="text-white mb-[30%] md:mb-0  flex flex-col w-[100%] ">
        <span className="text-2xl text-[#ddd] w-[100%] md:w-[75%] font-italic">
          Join us for 10% off your first order
        </span>
        <label className="font-italic text-[#ebdede] mt-6 ">
          Email Address
        </label>
        <div className="flex rounded-[10px] w-[90%]">
          <input type="email" className="rounded-l-md bg-[#ddd] w-full" />
          <button className="bg-blue-500 font-bold p-4 rounded-r-md">
            JOIN
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

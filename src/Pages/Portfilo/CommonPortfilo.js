import React from "react";
import Modal from "react-modal";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";

Modal.setAppElement("#root");

const CommonPortfilo = () => {
  return (
    <>
      <PageTitle title="Portfolio"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container mb-8   px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect  after:left-48 mt-12  lg:mt-0">
                Portfolio
              </h2>
            </div>

            {/* Portfolio items start */}

            <h1>item</h1>
            {/* Portfolio modal end */}
          </div>
          {/* End Portfolio */}

          {/* Common Footer call here*/}
          <Footer condition={true} bg={"#F8FBFB"} />
        </div>
      </section>
    </>
  );
};

export default CommonPortfilo;

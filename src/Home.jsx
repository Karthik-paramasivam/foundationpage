import React, { useState, useRef, useEffect } from "react";
import BackgroundImage from "./Images/Backgroundimage.jpeg";
import { Button, Form, Input, Select, message, Space } from "antd";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./App.css";
import Logo2 from "./Images/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutImage from "./Images/AboutImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footerlogo from "./Images/Footerlogo.png";
import travel from "./Images/travel-service.png";
import globe from "./Images/globe.png";
import traveldocument from "./Images/visa.png";
import exploretravel from "./Images/travel-and-tourism.png";
import customerservice from "./Images/passport.png";
import ticket from "./Images/travel.png";
import CourseContent from "./Images/CourseContent.jpg";
import CareerOpportunities from "./Images/CareerOpportunities.jpg";
import EntryQualificationImage from "./Images/EntryQualificationImage.jpg";
import LearnerImage from "./Images/LearnerImage.jpg";





import {
  faCheck,
  faCircleCheck,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { useInView } from "react-intersection-observer"; // Import the hook for Intersection Observer
// import icon1 from "./Images/icon1.png";
// import icon2 from "./Images/icon2.png";
// import icon3 from "./Images/icon3.png";
// import Crew2 from "./Images/crew2.jpg";
// import Crew3 from "./Images/crew3.jpg";
// import Crew4 from "./Images/crew4.jpg";
// import Crew5 from "./Images/crew5.jpeg";

export default function Home() {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code

  const [hasViewed, setHasViewed] = useState(false); // Track if the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    onChange: (inView) => {
      if (inView) setHasViewed(true); // Set to true when the element enters the viewport
    },
  });

  const [hasViewedSlide, setHasViewedSlide] = useState({
    zeroElement: false,
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
    seventhElement: false,
  });

  const { ref: myRef0, inView: zeroElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.zeroElement) {
        setHasViewedSlide((prev) => ({ ...prev, zeroElement: true }));
      }
    },
  });

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.secondElement) {
        setHasViewedSlide((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  const { ref: myRef3, inView: thirdElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirdElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  const { ref: myRef4, inView: fourthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fourthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  const { ref: myRef5, inView: fifthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fifthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  const { ref: myRef6, inView: sixthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.sixthElement) {
        setHasViewedSlide((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });
  const { ref: myRef7, inView: seventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.seventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, seventhElement: true }));
      }
    },
  });

  useEffect(() => {
    // Effect when the element enters the viewport
    if (inView) {
      setHasViewed(true); // Set animation to true
    }
  }, [inView]);

  // Handle form submission
  const handleSubmit = (values) => {
    // Log the values during the first submission, formData will be null initially
    console.log(values);
    setFormData(values); // Set form data after submission
    message.success("Form submitted successfully!");
    setPhoneNumber(""); // Reset phone number field
    form.resetFields(); // Reset all fields
  };

  // Handle phone number change
  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value); // Update the phone number state
  // };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Remove any non-numeric characters
    const filteredValue = value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(filteredValue); // Update the phone number state with filtered value
  };

  const validatePhoneNumber = (_, value) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    const expectedLength = selectedCountry ? selectedCountry.phoneLength : 10; // Default to 10 if no country selected
    const fullPhoneNumber = value;
    if (!value) {
      return Promise.reject(new Error(""));
    }
    // Validate phone number length based on the selected country
    if (fullPhoneNumber.length !== expectedLength) {
      return Promise.reject(
        new Error(
          `Please enter a valid phone number with ${expectedLength} digits!`
        )
      );
    }

    return Promise.resolve();
  };

  // Define country codes
  const countryCodes = [
    { code: "+971", label: "UAE (+971)", phoneLength: 7 },
    { code: "+1", label: "USA (+1)", phoneLength: 10 },
    { code: "+44", label: "UK (+44)", phoneLength: 10 },
    { code: "+91", label: "India (+91)", phoneLength: 10 },
    { code: "+61", label: "Australia (+61)", phoneLength: 9 },
    { code: "+81", label: "Japan (+81)", phoneLength: 10 },
    { code: "+33", label: "France (+33)", phoneLength: 10 },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(""));
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email regex
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address!"));
    }
    return Promise.resolve();
  };

  const styl = `
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
    margin: 0;
    color: white;
  }
    .slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
    .slick-prev, .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 40%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    background: white;
}
    .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #1677ff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li button:before {
    font-family: 'slick';
    font-size: 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: #0d278e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li.slick-active button:before {
    opacity: .75;
    color: #1677ff;
}
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 4000,
  // initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        speed: 300,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
      },
    },
  ],
};
  const aboutRef = useRef(null);
  const handleScrollToAbout = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <style>{styl}</style>
      <div className="container-fluid">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div
              className="col-12 dynamic-height d-flex align-items-center justify-content-center"
              style={{
                position: "relative",
                height: "800px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Pseudo-element for blurred background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  zIndex: -1, // Keep the background behind the content
                }}
              ></div>
              <div className="row d-flex align-items-center justify-content-center rounded-5 p-1 terminalresponsive-container m-auto">
                {/* First Column with Animation */}
                <motion.div
                  className="col-12 col-lg-6 mt-lg-5 mt-xl-5 mt-xxl-5 m-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <h1
                    className="text-white"
                    style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    Launch Your
                 
                    Travel and Tourism Career
                  </h1>
                  <h4 className="text-white fw-light">
                    Join our comprehensive Foundation in Travel and Tourism
                    Diploma to turn your passion for travel into a career.
                  </h4>
                </motion.div>

                {/* Second Column with Animation */}
                <motion.div
                  className="col-12 col-lg-5 rounded-4 mt-3 m-auto mt-lg-1 mb-lg-1"
                  style={{ backgroundColor: "#0721a4", padding: "20px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="text-white mt-2 text-center mt-md-3 mt-lg-2">
                    Enquire Now
                  </h1>
                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {/* First Name Field */}
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>

                    {/* Last Name Field */}
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>

                    {/* Email Field */}
                    <Form.Item
                      label="Email"
                      name="email"
                      className="form-item "
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>

                    {/* Phone Number Field with Country Code */}
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        { validator: validatePhoneNumber },
                      ]}
                    >
                      <Space.Compact style={{ width: "100%" }}>
                        <Select
                          defaultValue={countryCodes[0].code}
                          // style={{ width: "150px" }}
                          onChange={handleCountryChange}
                          style={{ width: "30%" }} // Adjust the width as needed
                        >
                          {countryCodes.map((country, index) => (
                            <Select.Option key={index} value={country.code}>
                              {country.label}
                            </Select.Option>
                          ))}
                        </Select>
                        <Input
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          // style={{
                          //   width: "calc(100% - 0px)",
                          // }}
                          style={{ width: "70%" }} // Adjust the width as needed
                          placeholder="Enter your phone number"
                          // maxLength={10}
                        />
                      </Space.Compact>
                    </Form.Item>

                    <Form.Item>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="default"
                          htmlType="submit"
                          style={{
                            backgroundColor:
                              "#faad14" /* Ant Design warning color */,
                            color: "white",
                            borderColor: "#faad14",
                          }}
                          className="Submitbutton"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Content When In View */}
        <div className="container mt-5" id="about">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <motion.div
                  ref={ref} // Ref to observe intersection
                  className="col-12 col-lg-6 "
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: hasViewed ? 1 : 0,
                    x: hasViewed ? 0 : -50,
                  }}
                  transition={{ duration: 1 }}
                >
                  {/* Logo with animation */}
                  <motion.div
                ref={myRef0}
                initial={{ scale: 0 }}
                animate={{ scale: hasViewedSlide.zeroElement ? 1 : 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                    }}>
                    <img
                      src={Logo2}
                      alt="IATA Logo"
                      className="img-fluid w-25"
                    />
                  </motion.div>

                  {/* Course Description */}
                  <div className="course-text">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="course-title  fw-bold"
                    >
                      <span>About </span>{" "}
                      <span className="text-primary">the Course</span>
                    </motion.h1>
                    {/* <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                    >
                      The Airline Cabin Crew course at WingsWay Training
                      Institute helps aspiring aviation professionals meet
                      industry demands and offers a 360-degree learning
                      experience. This includes:
                    </motion.p> */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                      className="course-list"
                      style={{ listStyleType: "none", paddingLeft: 0 }}
                    >
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="d-flex align-items-start "
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        <span>
                          This IATA-certified Travel and Tourism diploma is
                          curated for anybody interested to work in the exciting
                          industry of travel and tourism. It covers 13 essential
                          modules that will make you an expert in arranging
                          travel plans end-to-end, including transport
                          essentials, the role of geography in travel planning,
                          booking tools, airfare details, and the influence of
                          technology on the industry.
                        </span>{" "}
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="d-flex align-items-start mt-1"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        Our offerings extend beyond education, encompassing
                        guaranteed international internships, grooming sessions,
                        CV-building support, mock interviews, job search
                        assistance, and more.
                      </motion.li>
                      {/* <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="d-flex align-items-start mt-1"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        Grooming sessions to help you always look your best.
                      </motion.li>

                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className="d-flex align-items-start mt-1"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        Aircraft visits to give you a glimpse into your future
                        life as an aviator.
                      </motion.li> */}
                      {/* <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className="d-flex align-items-start mt-1"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        Guaranteed internship after course completion.
                      </motion.li> */}
                    </motion.ul>
                  </div>
                </motion.div>
                <div className="col-12 col-lg-6 ">
                  <img
                    src={AboutImage}
                    alt="About the course image"
                    className="img-fluid rounded-3 mt-5 hover-scale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="key">
          <div
            className={`row  slide-in-left  ${
              hasViewedSlide.myElement ? "animate-slide-in" : ""
            }`}
            ref={myRef1}
          >
            {" "}
            <div className="col-12 ">
              <h1 className="text-center ">
                <span className="fw-bold">Key </span>
                <span className="text-primary  fw-bold">Topics</span>
              </h1>
            </div>
            <div className="col-12 d-flex justify-content-evenly flex-wrap mt-4">
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0 p-sm-1">
                <img
                  src={travel}
                  alt="Travel Image"
                  className="img-fluid w-50 m-auto mt-2 "
                />
                <div>
                  <p className="fw-bold text-center mt-2 p-lg-2 p-2">
                    What it takes to excel in the travel industry
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0 p-sm-1">
                <img
                  src={globe}
                  alt="Globe Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2 p-2">
                    Understanding physical geography,  maps, and industry
                    codes
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0 p-sm-1">
                <img
                  src={traveldocument}
                  alt="Travel Documents Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2 p-lg-2 p-xl-2 p-xxl-2 p-2">
                    Essential travel documents and airport procedures
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div
            className={`row  slide-in-left  ${
              hasViewedSlide.secondElement ? "animate-slide-in" : ""
            }`}
            ref={myRef2}
          >
            <div className="col-12 d-flex justify-content-evenly  flex-wrap mt-lg-3 mt-xl-3 mt-xxl-4 ">
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-5 p-sm-1">
                <img
                  src={exploretravel}
                  alt="Explore mediums of travel Image"
                  className="img-fluid w-50 m-auto mt-2 "
                />
                <div>
                  <p className="fw-bold text-center mt-2 p-lg-2 p-xl-1 p-2">
                    Exploring mediums of travel and  tourism: flights,
                    trains, hotels,  car rentals, cruises, and tours
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-5 p-sm-1">
                <img
                  src={customerservice}
                  alt="Customer Service Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2 p-xl-2 p-2">
                    Delivering exceptional customer  service and building
                    loyalty
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-5 p-sm-1 ">
                <img
                  src={ticket}
                  alt="Ticket Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2 p-lg-2 p-2">
                    Unpacking airfares, ticketing, and mastering GDS
                    functionality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="course">
          <div
            className={`row shadow rounded-4 slide-in-left p-3  ${
              hasViewedSlide.thirdElement ? "animate-enquire" : ""
            }`}
            ref={myRef3}
          >
            {/* First Column - Image */}
            <div className="col-12 col-lg-6 hover-scale2 text-start mt-4 mb-3 ">
              <img
                src={CourseContent}
                alt="Course Content Image"
                className="img-fluid rounded-3 mt-1"
              />
            </div>

            {/* Second Column - Course Content */}
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <h1 className="text-center">
                <span className="fw-bold ">Course </span>
                <span className="fw-bold text-primary">Content</span>
              </h1>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 1:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    The Travel and Tourism industry and the profession of travel
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 2:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Geography in travel planning
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 3:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Travel formalities
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 4:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Air transport essentials
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 5:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Land transport: Introduction to passenger rail
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 6:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Land transport: Car & camper
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 7:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Hotel products and services
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 8:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Water transport: Ferries & cruise
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 9:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Tour packages
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 10:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Serving the travel customer
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 11:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Electronic booking tools (Sabre)
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 12:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Fundamental in air fares & ticketing
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Module 13:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                    Technology in travel: Distribution and airline retailing with NDC
                    </span>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                {/* <Button
                  className="mt-2 text-center text-white Contactbutton mb-2 mb-lg-0"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button> */}
                  <button
              type="button"
              className="btn btn-lg text-center text-white Contactbutton mb-2 mb-lg-0"
              onClick={() => {
                window.location.href = "#"; // Simulate href="#" behavior
              }}
            >
              Enquire Now
            </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="learner">
          {/* <div className="row "> */}
          <div
            className={`row shadow rounded-4 slide-in-left p-3 ${
              hasViewedSlide.fourthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef4}
          >
            <div className="col-12 col-lg-6  m-auto ps-lg-3">
              <h1 className="text-center">
                <span className="fw-bold  ">Learner’s </span>
                <span className="fw-bold  text-primary">Profile</span>
              </h1>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Travel Agents
                </li>
                <li className="mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Airline Reservation Agents{" "}
                </li>
                <li className="mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Tour Operators{" "}
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Call Center Agents{" "}
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Working professionals interested in the industry{" "}
                </li>

                <li className="mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  People looking to change their career
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  High school graduates
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Travel enthusiasts
                </li>
               
              </ul>
              <div className="text-center">
                {/* <Button
                  className="mt-2 mb-2 text-center text-white Contactbutton"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button> */}
                 <button
              type="button"
              className="btn btn-lg text-center text-white Contactbutton mb-2 mb-lg-0"
              onClick={() => {
                window.location.href = "#"; // Simulate href="#" behavior
              }}
            >
              Enquire Now
            </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mb-3">
              <img
                src={LearnerImage}
                alt="Leaner Profile Image"
                className="img-fluid rounded-3 "
              />
            </div>
          </div>
        </div>

        <div className="container mt-5" id="entry">
          <div
            className={`row row shadow rounded-4 slide-in-left p-3 ${
              hasViewedSlide.fifthElement ? "animate-enquire" : ""
            }`}
            ref={myRef5}
          >
            {/* First Column - Image */}
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mb-3">
              <img
                src={EntryQualificationImage}
                alt="Entry Qualifications Image"
                className="img-fluid rounded-3"
              />
            </div>

            {/* Second Column - Course Content */}
            <div className="col-12 col-lg-6  m-auto ps-lg-4">
              <h1 className="text-center">
                <span className="fw-bold  ">Entry </span>
                <span className="fw-bold  text-primary">
                  Qualifications
                </span>
              </h1>
              {/* <p>The eligibility criteria for the Foundation of Travel and Tourism course at WingsWay Training Institute is:</p> */}
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {/* <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  The eligibility criteria for the Foundation of Travel and Tourism course at WingsWay Training Institute is:
                </li> */}
                <li className="mt-1 ms-lg-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  High school diploma or equivalent (10+2 education).
                </li>
                <li className="mt-1 ms-lg-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Proficiency in English
                </li> 
                <li className="mt-1 ms-lg-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                 Minimum age of 18 years.
                </li>
                <li className="mt-1 ms-lg-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                 A keen interest in the travel and tourism industry is highly recommended.
                </li>
                <li className="mt-1 ms-lg-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                 Familiarity with basic computer operations and internet usage.
                </li>
              
              </ul>
              <div className="text-center ">
                {/* <Button
                  className="mt-2 text-center text-white Contactbutton mb-2"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button> */}
                  <button
              type="button"
              className="btn btn-lg text-center text-white Contactbutton mb-2 mb-lg-0"
              onClick={() => {
                window.location.href = "#"; // Simulate href="#" behavior
              }}
            >
              Enquire Now
            </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 " id="career">
          {/* <div className="row "> */}
          <div
            className={`row shadow rounded-4 slide-in-left p-3  ${
              hasViewedSlide.sixthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef6}
          >
            <div className="col-12 col-lg-6 rounded-3 mt-lg-3 ps-lg-3">
              <h1 className="text-center mt-lg-3">
                <span className="fw-bold  ">Career </span>
                <span className="fw-bold  text-primary">Opportunities</span>
              </h1>
              <ul
                style={{ listStyleType: "none", paddingLeft: 0 }}
                
              >
                <li >
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 "
                  />
                  Reservation Agent
                </li>
                <li className=" mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 "
                  />
                  Travel Consultant{" "}
                </li>
                <li className=" mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 "
                  />
                  Destination Specialist{" "}
                </li>
                <li className=" mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 "
                  />
                  Corporate Travel Consultant{" "}
                </li>
                <li className=" d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2   flex-shrink-0 mt-1"
                  />
                  Travel Coordinator{" "}
                </li>
                <li className=" d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2   flex-shrink-0 mt-1"
                  />
                  Ticketing Agent{" "}
                </li>
                <li className=" d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2   flex-shrink-0 mt-1"
                  />
                  Cruise Consultant{" "}
                </li>
                <li className=" d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2   flex-shrink-0 mt-1"
                  />
                 Hotel Manager{" "}
                </li>
                <li className=" d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2   flex-shrink-0 mt-1"
                  />
                 Tour Operator{" "}
                </li>
                <li className=" d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2  flex-shrink-0 mt-1"
                  />
                 Travel Agency Manager{" "}
                </li>
              </ul>
              <div className="text-center">
                {/* <Button
                  className="mt-2 mb-2 text-center text-white Contactbutton"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button> */}
                  <button
              type="button"
              className="btn btn-lg text-center text-white Contactbutton mb-2 mb-lg-0"
              onClick={() => {
                window.location.href = "#"; // Simulate href="#" behavior
              }}
            >
              Enquire Now
            </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mb-3 text-center ">
              <img
                src={CareerOpportunities}
                alt="Career Opportunities Image"
                className="img-fluid rounded-3 mt-2"
                // style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>

        {/* <div className="container mt-5 border border-white" id="Testimonials"> */}
        <div
          className={` container mt-5 border border-white  rounded-4 slide-in-left   ${
            hasViewedSlide.seventhElement ? "animate-enquire" : ""
          }`}
          ref={myRef7}
          id="Testimonials"
        >
          <div className="row border-primary ">
            <div className="col-12 text-center mb-4">
              <h2 className="fw-bold">Testimonials</h2>
            </div>
          </div>

          {/* <Slider {...settings} className="m-0 p-0 col-12 "> */}
          <Slider
            {...settings}
            className="m-0 p-0 col-12 col-md-8 col-lg-8 m-auto"
          >
            <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-0 ms-1 me-1 testimonialresponsive-div">
                <h3 className="text-center mt-5 ">Sidonie la Fleur </h3>
                <p className=" mt-3 text-center">
                I had the best educational experience from here and I can boast that I now Have WINGS to fly higher. 🥰🥰🥰 I love y’all Ma’am Sheetal, Miss Tina and all the School Admins.
                </p>
              </div>
            </div>
            <div>
              <div className=" p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-4 ms-1 me-1 mt-0 testimonialresponsive-div">
                <h3 className="text-center mt-5">Sushmita Bajracharya</h3>
                <p className="mt-3 text-center">
                It was an amazing experience, I’m grateful to be your student. I want to thank entire team of WingsWay Training Institute for the wonderful opportunities to learn and grow. Special thanks to ma'am sheetal and ma'am Tina. Thank you.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 ms-1 me-1 mt-0 testimonialresponsive-div" >
                <h3 className="text-center mt-5 mt-lg-4 mt-xl-4 mt-xxl-4">Za</h3>
                <p className="mt-3 text-center">
                I had the privilege of learning from Ms. Sheetal, and it was an incredible experience. Her teaching style is engaging, clear, and interactive, making even the most complex topics easy to understand. She is always approachable and genuinely cares about students' success. Thanks to her dedication and expertise. Thanks to Ms. Fathima who provided valuable information about the Foundation in Travel and Tourism course and supported my admission process. Thank you WingsWay Team.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-4 ms-1 me-1 mt-0 testimonialresponsive-div">
                <h3 className="text-center mt-5">Trenah Trevia</h3>
                <p className="mt-3 text-center">
                I am glad to be among the students in WingsWay Training Institute. The experience is overwhelming and have gained a lot of knowledge and team work.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 mb-1 ms-1 me-1 mt-0 testimonialresponsive-div">
                <h3 className="text-center mt-md-5 mt-lg-5 mt-5">
                Dilan Jason
                </h3>
                <p className="mt-3 text-center">
                  {" "}
                  WingsWay has given me an opportunity into something I love which I'm extremely grateful. Ms. Tina's classes are very easy to understand and really enjoyable, I highly recommend WingsWay to anyone who's looking for an upscale in their professional life.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 mb-1 ms-1 me-1 mt-0 testimonialresponsive-div">
                <h3 className="text-center mt-md-5 mt-lg-5 mt-5">
                Sadia Nasir
                </h3>
                <p className="mt-3 text-center">
                  {" "}
                  I have completed Foundation in Travel and Tourism course from WingsWay Training Institute. Trainers are very good and very cooperative and helpful.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        {/* <div
          className="container-fluid mt-5 border border-danger"
          style={{ backgroundColor: "#002994", color: "white" }}
        >
          <div className="row d-flex align-items-start ">
            <div className="col-12">
            <div className="col-12 col-md-2 col-lg-2 d-flex flex-column align-items-center border border-dark ms-lg-5">
              <img src={Footerlogo} alt="logo" className="img-fluid mt-3" />
            </div>
          </div>

             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span> About The <br /> Course </span>
             </div>  
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Key  <br /> Topics </span>
             </div>    
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Course  <br /> Content </span>
             </div>  
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Learner's  <br /> Profile </span>
             </div> 
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Entry <br /> Qualification </span>
             </div>  
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Career <br /> Opportunities </span>
             </div>    
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Testimonial </span>
             </div>    
          </div>
          
        </div> */}

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a
                  href="https://wa.me/+971509062236"
                  className="fixed-icon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} bounce size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="container-fluid m-0 p-0"
          style={{ backgroundColor: "#002994", color: "white" }}
        >
          {/* <div className="text-center">
          <div
            className="row d-flex  mt-5 border border-danger"
            style={{ backgroundColor: "#002994", color: "white" }}
          >
            <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center  ms-lg-5 ">
              <img src={Footerlogo} alt="logo" className="img-fluid mt-3 " />
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#about" className="footer-link">
                <span>
                  About The <br /> Course
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#key" className="footer-link">
                <span>
                  Key <br /> Topics{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#course" className="footer-link">
                <span>
                  Course <br /> Content{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#learner" className="footer-link">
                <span>
                  Learner's <br /> Profile{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#entry" className="footer-link">
                <span>
                  Entry <br /> Qualification{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#career" className="footer-link">
                <span>
                  Career <br /> Opportunities 
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12  col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#Testimonials" className="footer-link">
                <span>Testimonial </span>
              </a>
            </div>
          </div>
          </div> */}
          <div
            className="text-center"
            style={{ backgroundColor: "#002994", color: "white" }}
          >
            <div
              className="row d-flex justify-content-center align-items-center mt-5 "
              style={{ backgroundColor: "#002994", color: "white" }}
            >
              <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center text-start ">
                <img
                  src={Footerlogo}
                  alt="logo"
                  className="img-fluid mt-3 responsive-logofooter  text-start"
                />
              </div>

              <div className="col-12 col-md-12 col-lg-1 text-center mt-lg-4 ms-lg-4 text-lg-start">
                <a href="#about" className="footer-link">
                  <span>
                    About The <br /> Course
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-start">
                <a href="#key" className="footer-link">
                  <span>
                    Key <br /> Topics
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-start">
                <a href="#course" className="footer-link">
                  <span>
                    Course <br /> Content
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-start">
                <a href="#learner" className="footer-link">
                  <span>
                    Learner's <br /> Profile
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-start">
                <a href="#entry" className="footer-link">
                  <span>
                    Entry <br /> Qualification
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-start">
                <a href="#career" className="footer-link">
                  <span>
                    Career <br /> Opportunities
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-1 text-lg-start">
                <a href="#Testimonials" className="footer-link">
                  <span>Testimonial</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="row pb-lg-3 "
            style={{ backgroundColor: "#002994", color: "white" }}
          >
            <div className="col-12  text-center pb-lg-2 mt-3 mb-3 mt-md-3">
              <p>© 2023 WingsWay All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

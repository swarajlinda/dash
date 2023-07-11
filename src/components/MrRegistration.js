import React from "react";
import { API_BASE_URL, BEARER_TOKEN } from "../constants/config";

import { useState } from "react";
import axios from "axios";

import { AiFillHome } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { MdLocalPharmacy } from "react-icons/md";
import { BsReception4 } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";
import { RiVipDiamondFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import { SiJetpackcompose } from "react-icons/si";
import { MdAppRegistration } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";

import Card from "@mui/material/Card";
const MrRegistration = () => {
  const [patientName, setPatientName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [address1, setAddressOne] = useState("");
  const [address2, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [mobileNo, setMobile] = useState("");

  const [placeofbirth, setPlaceOfBirth] = useState("");
  const [aadharno, setAadharNo] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [bankname, setBankName] = useState("");
  const [consultantfees, setConsultantfees] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const postData = () => {
    const reqPayload = {
      patientName,
      fatherName,
      motherName,
      sex,
      dob,
      address1,
      address2,
      city,
      state,
      pin,
      mobileNo,
      placeofbirth,
      aadharno,
      paymentMode,
      bankname,
      consultantfees,
    };
    axios.post(`${API_BASE_URL}/api/mr-register`, reqPayload, {
      headers: {
        Authorization: "Bearer " + BEARER_TOKEN,
        "Content-Type": "application/json",
      },
    });
  };
  const appendPaymentMode = (result) => {
    const chequeModes = ["CHEQUE", "CARD", "CSHCRD"];
    setPaymentMode(result);
    if (chequeModes.includes(result)) setIsVisible(true);
    else setIsVisible(false);
  };
  return (
    <div className="p-4 bg-blue-100">
      <div className="grid  grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
        <div class="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
          <div>
            <p className="mx-16 text-white text-lg font-mono my-2">
              Framework Futuristics{" "}
            </p>
          </div>
          <div id="main" class="my-20 flex flex-col  space-y-4">
            <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left">
                Dashboard <AiFillHome className="float-left my-1 mx-2" />
                <AiOutlineCaretDown className="float-right my-2 mx-24" />
              </p>
            </div>
            <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left">
                Patient Reg.{" "}
                <MdAppRegistration className="float-left my-1 mx-2" />
              </p>
            </div>
            <div class="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700 flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left ">
                Organise <CgOrganisation className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 flow-root rounded-2xl">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Pharmacy <MdLocalPharmacy className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Reception <BsReception4 className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                OPD <AiFillLayout className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl">
              <p class="mx-12 my-2 text-lg font-bold text-white ">
                IPD <RiVipDiamondFill className="float-left my-1 mx-2" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white ">
                Billing <MdPayments className="float-left my-1 mx-2" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Investigations{" "}
                <MdOutlineStorage className="float-left my-1 mx-2" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                OT <AiOutlineAppstoreAdd className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Inventory{" "}
                <MdOutlineInventory className="float-left my-1 mx-2" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                TPA <SiJetpackcompose className="float-left my-1 mx-2" />
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl bg-white">
          {/* First card*/}
          <div class="text h-20 w-9/12 rounded-lg bg-blue-200 mx-8 my-4">
            <p class="mx-2 font-serif text-2xl font-bold text-gray-500">
              Mr Registration
            </p>
            <p class="mx-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              laboriosam eius nisi Nihil laboriosam eius nisi Nihil laboriosam
              eius nisi ihil laboriosam eius nis ihil laboriosam eius nis ihil
              laboriosam eius nis eius nisi ihil laboriosam eius nis ihil
              laboriosam eius nis ihil laboriosam eius nis ihil laboriosam eius
              nis ihil laboriosam eius nis ihil laboriosam eius nis
            </p>
          </div>

          {/* End First card */}
          {/* Second card */}
          <Card
            className="w-9/12 border m-8 "
            style={{ backgroundColor: "#E9EFFD" }}
          >
            <div style={{ padding: "50px" }}>
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="patientName"
                    id="patientName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer required"
                    placeholder=" "
                    required
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                  <label
                    htmlFor="patientName"
                    className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Patient Name
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="fatherName"
                    id="fatherName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                  <label
                    htmlFor="fatherName"
                    className="peer-focus:font-medium absolute text-sm font-bold  text-gray-500   dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Father Name
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="motherName"
                    id="motherName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => setMotherName(e.target.value)}
                  />
                  <label
                    htmlFor="motherName"
                    className="peer-focus:font-medium absolute text-sm font-bold  text-gray-500    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mother Name
                  </label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      onChange={(e) => setSex(e.target.value)}
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose </option>
                      <option value="Male"> MALE</option>
                      <option value="Female">FEMALE</option>
                      <option value="Others">OTHERS</option>
                    </select>
                    <label
                      htmlFor="sex"
                      className="peer-focus:font-medium absolute text-lg  font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Sex
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <label
                      htmlFor="dob"
                      className="peer-focus:font-medium absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      DOB
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="addressone"
                      id="addressone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setAddressOne(e.target.value)}
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium font-bold absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address 1
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="addresstwo"
                      id="addresstwo"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setAddressTwo(e.target.value)}
                    />
                    <label
                      htmlFor="addresstwo"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address 2
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="city"
                      id="city"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <label
                      htmlFor="city"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      City
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setState(e.target.value)}
                    />
                    <label
                      htmlFor="state"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      State
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="pin"
                      id="pin"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setPin(e.target.value)}
                    />
                    <label
                      htmlFor="pin"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Pin
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <label
                      htmlFor="floating_company"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Mobile No
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Corporate Id
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="aadharno"
                      id="aadharno"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setAadharNo(e.target.value)}
                    />
                    <label
                      htmlFor="aadharno"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Aadhar No.
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="dob"
                      id="dob"
                      value="500"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setConsultantfees(e.target.value)}
                    />
                    <label
                      htmlFor="dob"
                      className="peer-focus:font-medium absolute text-sm font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Consultant fees
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <select
                      type="text"
                      id="countries"
                      name="paymentmode"
                      placeholder=""
                      onChange={(e) => appendPaymentMode(e.target.value)}
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose a Payment </option>
                      <option value="CASH" id="CASH" name="CASH">
                        CASH
                      </option>
                      <option value="CARD">CARD</option>
                      <option value="CHEQUE" id="CHEQUE" name="CHEQUE">
                        CHEQUE
                      </option>
                      <option value="CSHCRD" id="CSHCRD" name="CSHCRD">
                        CSHCRD
                      </option>
                      <option value="CSHUPI" id="CSHUPI" name="CSHUPI">
                        CSHUPI
                      </option>
                      <option value="NET">NET</option>
                      <option value="CSHLESS">CSHLESS</option>
                      <option value="CREDIT">CREDIT</option>
                      <option value="PCARD">PCARD</option>
                    </select>

                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      PaymentMode
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="chequeNo"
                      id=" "
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setPlaceOfBirth(e.target.value)}
                      style={{ visibility: isVisible ? "visible" : "hidden" }}
                    />
                    <label
                      htmlFor="chequeNo"
                      style={{ visibility: isVisible ? "visible" : "hidden" }}
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Cheque Number
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="bankName"
                      id=" "
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setPlaceOfBirth(e.target.value)}
                      style={{ visibility: isVisible ? "visible" : "hidden" }}
                    />
                    <label
                      htmlFor="bankName"
                      style={{ visibility: isVisible ? "visible" : "hidden" }}
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Bank Name
                    </label>
                  </div>
                  <div
                    className="relative z-0 w-full mb-6 group"
                    style={{ visibility: isVisible ? "visible" : "hidden" }}
                  >
                    <input
                      type="text"
                      name="chequedate"
                      id="chequedate"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => setBankName(e.target.value)}
                    />
                    <label
                      htmlFor="chequedate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Cheque Date
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={postData}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </Card>
          {/* End of Second card */}
        </div>
      </div>
    </div>
  );
};

export default MrRegistration;

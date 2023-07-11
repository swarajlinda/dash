import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
 
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { GiCardboardBox } from "react-icons/gi";
import { GoFileSubmodule } from "react-icons/go";
import { FaFirstdraft } from "react-icons/fa";
import { BsFillLayersFill } from "react-icons/bs";
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
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

 

const Ipd = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [myTab, setMyTab] = useState(0);
  const data = [
    {
      label: " Flag approval",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: " Final Bill",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: " Detailed Bill ",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: " Summary Bill",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Prov. Bill",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const myhandleTabClick = (index) => {
    setMyTab(index);
  };
  return (
    <div className="p-4 bg-blue-100">
      <div class=" grid  grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
        {/* SIDEBAR  ****************************************************************************************************************************************/}
        <div class="col-span-4 col-start-1 row-span-full bg-blue-900 h-full  ">
          <div>
            <p className="mx-14 text-white text-lg font-mono  my-4 ">
              Framework Futuristics{" "}
            </p>
          </div>
          <div id="main" class="my-14 flex flex-col  space-y-4">
            <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left">
                Dashboard{" "}
                <AiFillHome className="float-left my-1 mx-2 animate-bounce" />
                <AiOutlineCaretDown className="float-right my-2 mx-24  " />
              </p>
            </div>
            <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left   ">
                Patient Reg.{" "}
                <MdAppRegistration className="float-left my-1 mx-2 animate-bounce " />
              </p>
            </div>
            <div class="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700 flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left ">
                Organise{" "}
                <CgOrganisation className="float-left my-1 mx-2 animate-bounce" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 flow-root rounded-2xl">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Pharmacy{" "}
                <MdLocalPharmacy className="float-left my-1 mx-2 animate-bounce" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Reception{" "}
                <BsReception4 className="float-left my-1 mx-2 animate-bounce" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                OPD{" "}
                <AiFillLayout className="float-left my-1 mx-2 animate-bounce" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl">
              <p class="mx-12 my-2 text-lg font-bold text-white ">
                IPD{" "}
                <RiVipDiamondFill className="float-left my-1 mx-2 animate-bounce" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white ">
                Billing{" "}
                <MdPayments className="float-left my-1 mx-2 animate-bounce" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Investigations{" "}
                <MdOutlineStorage className="float-left my-1 mx-2 animate-bounce" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                OT{" "}
                <AiOutlineAppstoreAdd className="float-left my-1 mx-2 animate-bounce" />{" "}
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                Inventory{" "}
                <MdOutlineInventory className="float-left my-1 mx-2 animate-bounce" />
              </p>
            </div>
            <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p class="mx-12 my-2 text-lg font-bold text-white">
                TPA{" "}
                <SiJetpackcompose className="float-left my-1 mx-2 animate-bounce" />
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl bg-white"
          style={{ backgroundColor: "#F8F7FA" }}
        >
          {/*Top Header */}

          <ul
            className="items-center w-60 text-sm font-medium my-1  bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600  mx-6"
            style={{ backgroundColor: "#675CD8", color: "white" }}
          >
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox-list"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="vue-checkbox-list"
                  class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300 mx-2"
                >
                  Inpatient
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="react-checkbox-list"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="react-checkbox-list"
                  class="w-full py-3 ml-2 text-sm font-medium   dark:text-gray-300 mx-2"
                >
                  {" "}
                  Discharged
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  type="text"
                  className="rounded-lg h-7 "
                  placeholder="Search Patient"
                />
                <input
                  type="text"
                  className="rounded-lg h-7 mx-2 border border-indigo-600 "
                  placeholder="Patient Name"
                />
                <input
                  type="text"
                  className="rounded-lg h-7 "
                  placeholder="MR no."
                />
              </div>
            </li>
          </ul>
          {/* HEADERS TAB  *******************************************************************************************************************************/}
          <div className="tabs-container p-4 mx-2">
            <div className="tabs  ">
              {/* Header Tab 0 *******************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 0 ? "active" : ""} `}
                onClick={() => handleTabClick(0)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillGrid1X2Fill className=" mx-2 my-1  hover:scale-105" />{" "}
                  IPD Billing
                </p>
              </div>
              {/* Header Tab 1 ********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <FaFirstdraft className=" mx-2 my-1 " /> Nursing
                </p>
              </div>
              {/* Header Tab 2 *********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(2)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillLayersFill className=" mx-2 my-1 " /> Money Reciept
                </p>
              </div>
              {/* Header Tab 3 *********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 3 ? "active" : ""}`}
                onClick={() => handleTabClick(3)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillLayersFill className=" mx-2 my-1 " /> Discharge
                </p>
              </div>
              {/* Header Tab 4 *********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(4)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillLayersFill className=" mx-2 my-1 " /> Bed Mapping
                </p>
              </div>
              {/* Header Tab 5 *********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(5)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillLayersFill className=" mx-2 my-1 " /> Final Bill
                </p>
              </div>
              {/* Header Tab 6 *********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(6)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillLayersFill className=" mx-2 my-1 " /> Todays
                  Admission/Discharge
                </p>
              </div>
              {/* Header Tab 7 *********************************************************************************************************************************/}
              <div
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(7)}
                style={{ backgroundColor: "#675CD8", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillLayersFill className=" mx-2 my-1 " />
                  Patient counselling
                </p>
              </div>
            </div>
            {/*  Contents Tab  **********************************************************************************************************************************/}
            <div className="tab-content p-4" style={{}}>
              {/*  Content Tab 0 ********************************************************************************************************************************/}
              {activeTab === 0 && (
                <div className=" h-screen w-4/5">
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-4  ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                      <thead class="text-xs text-white uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label for="checkbox-all-search" class="sr-only">
                                checkbox
                              </label>
                            </div>
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Ward Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                            BedName
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Status
                          </th>
                          <th scope="col" class="px-6 py-3">
                            PatientName
                          </th>
                          <th scope="col" class="px-6 py-3">
                            RegistrationNo.
                          </th>
                          <th scope="col" class="px-6 py-3">
                            MrNo.
                          </th>
                          <th scope="col" class="px-6 py-3">
                            RegistrationDate
                          </th>
                          <th scope="col" class="px-6 py-3">
                            ConsulatantName
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Sex
                          </th>
                          <th scope="col" class="px-6 py-3">
                            FatherName
                          </th>
                          <th scope="col" class="px-6 py-3">
                            MobileNo.
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Address1
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Provisonal
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Diagnosis
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Attendant
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Dept.Id
                          </th>
                          <th scope="col" class="px-6 py-3">
                            ServiceNo.
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Advance
                          </th>
                          <th scope="col" class="px-6 py-3">
                            CorporateId
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-1"
                                class="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple MacBook Pro 17"
                          </th>
                          <td class="px-6 py-4">Silver</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">$2999</td>
                          <td class="px-6 py-4">3.0 lb.</td>
                          <td class="px-6 py-4">3.0 lb.</td>
                          <td class="px-6 py-4">3.0lb.</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-table-search-2"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-2"
                                class="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Microsoft Surface Pro
                          </th>
                          <td class="px-6 py-4">White</td>
                          <td class="px-6 py-4">Laptop PC</td>
                          <td class="px-6 py-4">No</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">1.0 lb.</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">$1999</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-table-search-3"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-3"
                                class="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Magic Mouse 2
                          </th>
                          <td class="px-6 py-4">Black</td>
                          <td class="px-6 py-4">Accessories</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">No</td>
                          <td class="px-6 py-4">$99</td>
                          <td class="px-6 py-4">0.2 lb.</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-table-search-3"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-3"
                                class="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple Watch
                          </th>
                          <td class="px-6 py-4">Black</td>
                          <td class="px-6 py-4">Watches</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">No</td>
                          <td class="px-6 py-4">$199</td>
                          <td class="px-6 py-4">0.12 lb.</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Watches</td>
                          <td class="px-6 py-4">Watches</td>
                          <td class="px-6 py-4">Watches</td>
                          <td class="px-6 py-4">Watches</td>
                          <td class="px-6 py-4">Watches</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-table-search-3"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-3"
                                class="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple iMac
                          </th>
                          <td class="px-6 py-4">Silver</td>
                          <td class="px-6 py-4">PC</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">$2999</td>
                          <td class="px-6 py-4">7.0 lb.</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-table-search-3"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="checkbox-table-search-3"
                                class="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple AirPods
                          </th>
                          <td class="px-6 py-4">White</td>
                          <td class="px-6 py-4">Accessories</td>
                          <td class="px-6 py-4">No</td>
                          <td class="px-6 py-4">Yes</td>
                          <td class="px-6 py-4">$399</td>
                          <td class="px-6 py-4">38 g</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                          <td class="px-6 py-4">Laptop</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class=" rounded-lg w-full  mx-4 my-4 shadow-xl h-2/6 basis-1/4  "
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <div className=" border-b border-gray-200 dark:border-gray-700">
                      <ul
                        class="flex flex-wrap -mb-px text-sm font-medium text-center"
                        id="myTab"
                        data-tabs-toggle="#myTabContent"
                        role="tablist"
                      >
                        <li class="mr-2" role="presentation">
                          <button
                            className="inline-block p-2 border-b-2 rounded-t-lg  hover:scale-105"
                            id="profile-tab"
                            data-tabs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                            style={{
                              backgroundColor: "#675CD8",
                              color: "white",
                            }}
                          >
                            <p className="flex">
                              {" "}
                              <ImProfile className=" " />
                              LineItems
                            </p>
                          </button>
                        </li>
                        <li class="mr-2" role="presentation">
                          <button
                            className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                            id="dashboard-tab"
                            data-tabs-target="#dashboard"
                            type="button"
                            role="tab"
                            aria-controls="dashboard"
                            aria-selected="false"
                            style={{
                              backgroundColor: "#675CD8",
                              color: "white",
                            }}
                          >
                            <p className="flex">
                              {" "}
                              <GiCardboardBox className="  " />
                              PatientBills{" "}
                            </p>
                          </button>
                        </li>
                        <li className="mr-2" role="presentation">
                          <button
                            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                            id="settings-tab"
                            data-tabs-target="#settings"
                            type="button"
                            role="tab"
                            aria-controls="settings"
                            aria-selected="false"
                            style={{
                              backgroundColor: "#675CD8",
                              color: "white",
                            }}
                          >
                            <p className="flex ">
                              {" "}
                              <MdMiscellaneousServices className=" " />
                              PreviousBills
                            </p>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div id="myTabContent" className=" ">
                      <div
                        className="hidden p-2 rounded-lg bg-gray-50 dark:bg-gray-800 "
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="  flex   ">
                          <label
                            for="countries"
                            class="block  text-sm font-medium text-gray-900 dark:text-white  "
                          >
                            {" "}
                            Rate Card
                          </label>
                          <label
                            for="countries"
                            class="block  text-sm font-medium text-gray-900 dark:text-white  mx-16 "
                          >
                            Type
                          </label>
                          <label
                            for="countries"
                            class="block  text-sm font-medium text-gray-900 dark:text-white  mx-14 "
                          >
                            {" "}
                            Billing Items
                          </label>
                        </div>
                        <div className="flex space-x-2">
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected> DEFAULT</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <p className="my-2 text-gray-900 text-sm font-medium">
                            Consultant{" "}
                          </p>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <input
                            type="date"
                            className="border w-40 rounded-md"
                            placeholder="_/__/__"
                          />
                          <input
                            type="text"
                            className="border w-20 rounded-md"
                            placeholder="_/__/__"
                          />
                          <input
                            type="text"
                            className="border w-20 rounded-md"
                            placeholder="_/__/__"
                          />
                        </div>
                        <div className=" grid grid-cols-2">
                          <div className="relative overflow-x-auto my-2">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" class="px-6 py-3">
                                    Category
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    FieldName
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    UnitRate
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Qty
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    TimeIn
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Amount
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    CounsultantName
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Apple MacBook Pro 17"
                                  </th>
                                  <td class="px-6 py-4">Silver</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">$2999</td>
                                  <td class="px-6 py-4">$2999</td>
                                  <td class="px-6 py-4">$2999</td>
                                  <td class="px-6 py-4">$2999</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Microsoft Surface Pro
                                  </th>
                                  <td class="px-6 py-4">White</td>
                                  <td class="px-6 py-4">Laptop PC</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">White</td>
                                  <td class="px-6 py-4">White</td>
                                  <td class="px-6 py-4">White</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className=" grid grid-rows-4 grid-flow-col">
                            <div className="rounded-lg m-4 text-gray-900">
                              {" "}
                              <span className=" text-gray-900  text-sm font-medium ">
                                Bill Amt{" "}
                              </span>{" "}
                              <input
                                type="text"
                                className="rounded-lg mx-2 w-44 h-7 "
                              />
                            </div>
                            <div className="rounded-lg m-4 ">
                              {" "}
                              <span className=" text-gray-900  text-sm font-medium ">
                                Bill Desc{" "}
                              </span>
                              <input
                                type="text"
                                className="rounded-lg  mx-2   w-44 h-7 "
                              />
                            </div>
                            <div className="rounded-lg m-4  ">
                              {" "}
                              <span className=" text-gray-900  text-sm font-medium ">
                                {" "}
                                Demand{" "}
                              </span>
                              <input
                                type="text"
                                className="rounded-lg  mx-2   w-44 h-7 "
                              />
                            </div>
                            <div className="rounded-lg m-4  ">
                              {" "}
                              <span className=" text-gray-900  text-sm font-medium ">
                                {" "}
                                Demand{" "}
                              </span>
                              <input
                                type="text"
                                className="rounded-lg  mx-2   w-44 h-7 "
                              />
                            </div>
                            <div className="rounded-lg m-4  ">
                              {" "}
                              <span className=" text-gray-900  text-sm font-medium ">
                                {" "}
                                paymentMode{" "}
                              </span>
                              <input
                                type="text"
                                className="rounded-lg  mx-2   w-44 h-7 "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                      >
                        <div className="  flex   ">
                          <label
                            for="countries"
                            class="block  text-sm font-medium text-gray-900 dark:text-white  "
                          >
                            {" "}
                            Rate Card
                          </label>
                          <label
                            for="countries"
                            class="block  text-sm font-medium text-gray-900 dark:text-white  mx-16 "
                          >
                            Type
                          </label>
                        </div>
                        <div className="flex space-x-2">
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <p className="my-2 text-gray-900 text-sm font-medium">
                            Consultant{" "}
                          </p>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <input
                            type="date"
                            className="border w-40 rounded-md"
                            placeholder="_/__/__"
                          />
                          <input
                            type="time"
                            className="border w-20 rounded-md"
                            placeholder=" "
                          />
                          <input
                            type="text"
                            className="border w-20 rounded-md"
                            placeholder=" "
                          />
                        </div>
                        <div className="relative overflow-x-auto my-2">
                          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col" class="px-6 py-3">
                                  Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  FieldName
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  UnitRate
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  Qty
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  TimeIn
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  CounsultantName
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">Silver</td>
                                <td class="px-6 py-4">Laptop</td>
                                <td class="px-6 py-4">$2999</td>
                                <td class="px-6 py-4">$2999</td>
                                <td class="px-6 py-4">$2999</td>
                                <td class="px-6 py-4">$2999</td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">Laptop PC</td>
                                <td class="px-6 py-4">$1999</td>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">White</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                        id="settings"
                        role="tabpanel"
                        aria-labelledby="settings-tab"
                      >
                        <div className="flex space-x-2 ">
                          <p className="my-2 text-gray-900 text-sm font-medium">
                            Consultant{" "}
                          </p>
                          <select
                            id="countries"
                            class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <input
                            type="time"
                            className="border w-40 rounded-md"
                            placeholder="_/__/__"
                          />
                          <input
                            type="date"
                            className="border w-40 rounded-md"
                            placeholder="_/__/__"
                          />
                          <input
                            type="text"
                            className="border w-20 rounded-md"
                            placeholder="_/__/__"
                          />
                        </div>
                        <div className="relative overflow-x-auto my-2">
                          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col" class="px-6 py-3">
                                  Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  FieldName
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  UnitRate
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  Qty
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  TimeIn
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  CounsultantName
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">Silver</td>
                                <td class="px-6 py-4">Laptop</td>
                                <td class="px-6 py-4">$2999</td>
                                <td class="px-6 py-4">$2999</td>
                                <td class="px-6 py-4">$2999</td>
                                <td class="px-6 py-4">$2999</td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">Laptop PC</td>
                                <td class="px-6 py-4">$1999</td>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">White</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*  Content Tab 1 ********************************************************************************************************************************/}
              {activeTab === 1 && (
                <div className=" h-screen">
                  <div className="w-full">
                    <div className="flex mb-4">
                      <button
                        className={`px-4 py-2 mr-2 rounded-md ${
                          myTab === 0 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(0)}
                      >
                        WardProcedures
                      </button>
                      <button
                        className={`px-4 py-2 rounded-md ${
                          myTab === 1 ? "  text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(1)}
                      >
                        ChangeWardBed
                      </button>
                      <button
                        className={`px-4 py-2 mr-2 mx-2 rounded-md ${
                          myTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(2)}
                      >
                        DoctorsVisit
                      </button>
                      <button
                        className={`px-4 py-2 mr-2 mx-1 rounded-md ${
                          myTab === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(3)}
                      >
                        DischargeTickets
                      </button>
                      <button
                        className={`px-4 py-2 mr-2 mx-1 rounded-md ${
                          myTab === 4 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(4)}
                      >
                        InvestigationRequest
                      </button>
                      <button
                        className={`px-4 py-2 mr-2 mx-1 rounded-md ${
                          myTab === 5 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(5)}
                      >
                        Equipments
                      </button>
                      <button
                        className={`px-4 py-2 mr-2 mx-1 rounded-md ${
                          myTab === 6 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(6)}
                      >
                        DepartmentMovement
                      </button>
                      <button
                        className={`px-4 py-2 mr-2 mx-1 rounded-md ${
                          myTab === 7 ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                        style={{ backgroundColor: "#675CD8", color: "white" }}
                        onClick={() => myhandleTabClick(7)}
                      >
                        DepartmentMovement
                      </button>
                    </div>
                    <div>
                      {myTab === 0 && (
                        <div className="px-4 py-2 bg-gray-100">
                          <div className="flex items-center pl-3">
                            <input
                              type="text"
                              className="rounded-lg h-7 "
                              placeholder="Reg. No"
                            />
                            <input
                              type="text"
                              className="rounded-lg h-7 mx-2 border border-indigo-600 "
                              placeholder="EMR"
                            />
                            <input
                              type="text"
                              className="rounded-lg h-7 "
                              placeholder=" Name"
                            />
                            <input
                              type="text"
                              className="rounded-lg h-7 mx-2"
                              placeholder="Mobile"
                            />
                          </div>
                          <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 my-2 ">
                            <table class=" text-sm text-left text-gray-500 dark:text-gray-400 ">
                              <thead class="text-xs text-white uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-all-search"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Ward Name
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    BedName
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Status
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    PatientName
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    RegistrationNo.
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    MrNo.
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    RegistrationDate
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    ConsulatantName
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Sex
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    FatherName
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    MobileNo.
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Address1
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Provisonal
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Diagnosis
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Attendant
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Dept.Id
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    ServiceNo.
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Advance
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    CorporateId
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td class="w-4 p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-table-search-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-table-search-1"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Apple MacBook Pro 17"
                                  </th>
                                  <td class="px-6 py-4">Silver</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">$2999</td>
                                  <td class="px-6 py-4">3.0 lb.</td>
                                  <td class="px-6 py-4">3.0 lb.</td>
                                  <td class="px-6 py-4">3.0lb.</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td class="w-4 p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-table-search-2"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-table-search-2"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Microsoft Surface Pro
                                  </th>
                                  <td class="px-6 py-4">White</td>
                                  <td class="px-6 py-4">Laptop PC</td>
                                  <td class="px-6 py-4">No</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">1.0 lb.</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">$1999</td>
                                  <td class="px-6 py-4">$1999</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td class="w-4 p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-table-search-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-table-search-3"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Magic Mouse 2
                                  </th>
                                  <td class="px-6 py-4">Black</td>
                                  <td class="px-6 py-4">Accessories</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">No</td>
                                  <td class="px-6 py-4">$99</td>
                                  <td class="px-6 py-4">0.2 lb.</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td class="w-4 p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-table-search-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-table-search-3"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Apple Watch
                                  </th>
                                  <td class="px-6 py-4">Black</td>
                                  <td class="px-6 py-4">Watches</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">No</td>
                                  <td class="px-6 py-4">$199</td>
                                  <td class="px-6 py-4">0.12 lb.</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Watches</td>
                                  <td class="px-6 py-4">Watches</td>
                                  <td class="px-6 py-4">Watches</td>
                                  <td class="px-6 py-4">Watches</td>
                                  <td class="px-6 py-4">Watches</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td class="w-4 p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-table-search-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-table-search-3"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Apple iMac
                                  </th>
                                  <td class="px-6 py-4">Silver</td>
                                  <td class="px-6 py-4">PC</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">$2999</td>
                                  <td class="px-6 py-4">7.0 lb.</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td class="w-4 p-4">
                                    <div class="flex items-center">
                                      <input
                                        id="checkbox-table-search-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label
                                        for="checkbox-table-search-3"
                                        class="sr-only"
                                      >
                                        checkbox
                                      </label>
                                    </div>
                                  </td>
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    Apple AirPods
                                  </th>
                                  <td class="px-6 py-4">White</td>
                                  <td class="px-6 py-4">Accessories</td>
                                  <td class="px-6 py-4">No</td>
                                  <td class="px-6 py-4">Yes</td>
                                  <td class="px-6 py-4">$399</td>
                                  <td class="px-6 py-4">38 g</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                  <td class="px-6 py-4">Laptop</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="  flex   ">
                            <label
                              for="countries"
                              class="block  text-sm font-medium text-gray-900 dark:text-white  "
                            >
                              Select Ward
                            </label>
                            <label
                              for="countries"
                              class="block  text-sm font-medium text-gray-900 dark:text-white  mx-16 "
                            >
                              Type
                            </label>
                            <label
                              for="countries"
                              class="block  text-sm font-medium text-gray-900 dark:text-white  mx-14 "
                            >
                              {" "}
                              Billing Items
                            </label>
                          </div>
                          <div className="flex space-x-2">
                            <select
                              id="countries"
                              class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>SelcetWard</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                              id="countries"
                              class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                              id="countries"
                              class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                              id="countries"
                              class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <p className="my-2 text-gray-900 text-sm font-medium">
                              Consultant{" "}
                            </p>
                            <select
                              id="countries"
                              class="bg-gray-50 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <input
                              type="date"
                              className="border w-40 rounded-md"
                              placeholder="_/__/__"
                            />
                          </div>
                        </div>
                      )}
                      {myTab === 1 && (
                        <div className="px-4 py-2 bg-gray-100">
                          Content for Change Ward Bed
                        </div>
                      )}
                      {myTab === 2 && (
                        <div className="px-4 py-2 bg-gray-100">
                          Content for Doctors Visit
                        </div>
                      )}
                      {myTab === 3 && (
                        <div className="px-4 py-2 bg-gray-100">
                          Content for DischagreTickets
                        </div>
                      )}
                      {myTab === 4 && (
                        <div className="px-4 py-2 bg-gray-100">
                          Content for InvestigationRequest
                        </div>
                      )}
                      {myTab === 5 && (
                        <div className="px-4 py-2 bg-gray-100">
                          Content for Equipments
                        </div>
                      )}
                      {myTab === 6 && (
                        <div className="px-4 py-2 bg-gray-100">
                          Content for DepartmentMovements
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/*  Content Tab 2 ********************************************************************************************************************************/}
              {activeTab === 2 && (
                <div className="">
                  <div className="h-screen flex">
                    <div
                      class=" rounded-lg w-3/6 mx-8 h-4/5  my-4 shadow-xl   "
                      style={{ backgroundColor: "#FFFFFF" }}
                    ></div>
                    <div
                      class=" rounded-lg w-1/5 mx-2 my-4 shadow-xl h-1/3   "
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <button
                        type="button"
                        className="text-white w-5/6 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-8 my-4 mr-2 mb-2"
                        style={{ backgroundColor: "#675CD8" }}
                      >
                        <p className="flex mx-14">
                          {" "}
                          <TbFileInvoice className="mx-2" /> Send Invoice
                        </p>
                      </button>
                      <button
                        type="button"
                        className="text-gray-500 w-5/6 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-8 my-1 mr-2 mb-2"
                        style={{ backgroundColor: "#DFE0E2" }}
                      >
                        <p className="flex mx-14">
                          {" "}
                          <TbFileInvoice className="mx-2" />
                          Download
                        </p>
                      </button>
                      <button
                        type="button"
                        className="text-gray-500 w-5/6 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-8 my-1 mr-2 mb-2"
                        style={{ backgroundColor: "#DFE0E2" }}
                      >
                        <p className="flex mx-14">
                          {" "}
                          <TbFileInvoice className="mx-2" /> Print
                        </p>
                      </button>
                      <button
                        type="button"
                        className="text-gray-500 w-5/6 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-8 my-2 mr-2 mb-2"
                        style={{ backgroundColor: "#DFE0E2" }}
                      >
                        <p className="flex mx-14">
                          {" "}
                          <TbFileInvoice className="mx-2" /> Edit Invoice
                        </p>
                      </button>
                      <button
                        type="button"
                        className="text-white w-5/6 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-8 my-3 mr-2 mb-2"
                        style={{ backgroundColor: "#675CD8" }}
                      >
                        <p className="flex mx-14">
                          {" "}
                          <RiSecurePaymentLine className="mx-2" /> Add payment
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/*  Content Tab 3 ********************************************************************************************************************************/}
              {activeTab === 3 && (
                <div className=" h-screen">
                  <Tabs value="html" orientation="vertical">
                    <TabsHeader className="w-32 ">
                      {data.map(({ label, value }) => (
                        <Tab
                          key={value}
                          value={value}
                          className="font-semibold rounded-lg   my-2"
                          style={{ backgroundColor: "#675CD8" }}
                        >
                          {label}
                        </Tab>
                      ))}
                    </TabsHeader>
                    <TabsBody>
                      {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className="py-0">
                          {desc}
                        </TabPanel>
                      ))}
                    </TabsBody>
                  </Tabs>
                </div>
              )}
              {/*  Content Tab 4 ********************************************************************************************************************************/}
              {activeTab === 4 && (
                <div className=" h-screen">
                  <div
                    class=" rounded-lg w-4/5 mx-4  shadow-xl h-2/5 basis-1/4  "
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase  bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-6">
                              Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Available
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">Silver</td>
                            <td class="px-6 py-4">Laptop</td>
                            <td class="px-6 py-4">$2999</td>
                            <td class="px-6 py-4">$2999</td>

                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">White</td>
                            <td class="px-6 py-4">Laptop PC</td>
                            <td class="px-6 py-4">$1999</td>
                            <td class="px-6 py-4">$1999</td>

                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white dark:bg-gray-800">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">Black</td>
                            <td class="px-6 py-4">Accessories</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="px-6 py-4">$99</td>

                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white dark:bg-gray-800">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">Black</td>
                            <td class="px-6 py-4">Accessories</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white dark:bg-gray-800">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">Black</td>
                            <td class="px-6 py-4">Accessories</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">White</td>
                            <td class="px-6 py-4">Laptop PC</td>
                            <td class="px-6 py-4">$1999</td>
                            <td class="px-6 py-4">$1999</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class=" rounded-lg w-4/5 mx-4 my-6 shadow-xl h-2/5 basis-1/4  "
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr className="bg-slate-400">
                            <th scope="col" class="p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-all-search"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-all-search"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-6">
                              Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Accesories
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Available
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Weight
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">Silver</td>
                            <td class="px-6 py-4">Laptop</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">$2999</td>
                            <td class="px-6 py-4">3.0 lb.</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                href="#section"
                              >
                                Edit
                              </a>
                              <a
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                                href="#section"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-2"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-2"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">White</td>
                            <td class="px-6 py-4">Laptop PC</td>
                            <td class="px-6 py-4">No</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">$1999</td>
                            <td class="px-6 py-4">1.0 lb.</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                href="#section"
                              >
                                Edit
                              </a>
                              <a
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                                href="#section"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-3"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-3"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">Black</td>
                            <td class="px-6 py-4">Accessories</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">No</td>
                            <td class="px-6 py-4">$99</td>
                            <td class="px-6 py-4">0.2 lb.</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-3"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-3"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Apple Watch
                            </th>
                            <td class="px-6 py-4">Black</td>
                            <td class="px-6 py-4">Watches</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">No</td>
                            <td class="px-6 py-4">$199</td>
                            <td class="px-6 py-4">0.12 lb.</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-3"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-3"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Apple iMac
                            </th>
                            <td class="px-6 py-4">Silver</td>
                            <td class="px-6 py-4">PC</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">$2999</td>
                            <td class="px-6 py-4">7.0 lb.</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-3"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-3"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Apple AirPods
                            </th>
                            <td class="px-6 py-4">White</td>
                            <td class="px-6 py-4">Accessories</td>
                            <td class="px-6 py-4">No</td>
                            <td class="px-6 py-4">Yes</td>
                            <td class="px-6 py-4">$399</td>
                            <td class="px-6 py-4">38 g</td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a
                                href="#section"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                              <a
                                href="#section"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {/*  Content Tab 5 *********************************************************************************************************************************/}
              {activeTab === 5 && (
                <div className=" ">
                  <div className=" h-screen ">
                    <form className="">
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Patient Name
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Attendent Name
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Relation
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        style={{ backgroundColor: "#675CD8" }}
                      >
                        <p className="flex">
                          {" "}
                          <GoFileSubmodule className="mx-2 " /> Submit
                        </p>
                      </button>
                    </form>

                    <div
                      class=" rounded-lg w-10/12   mr-8 my-4 shadow-xl h-2/5 basis-1/4  "
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul
                          class="flex flex-wrap -mb-px text-sm font-medium text-center"
                          id="myTab"
                          data-tabs-toggle="#myTabContent"
                          role="tablist"
                        >
                          <li class="mr-2" role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 rounded-t-lg  hover:scale-105"
                              id="profile-tab"
                              data-tabs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <ImProfile className=" " /> Profile
                              </p>
                            </button>
                          </li>
                          <li class="mr-2" role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="dashboard-tab"
                              data-tabs-target="#dashboard"
                              type="button"
                              role="tab"
                              aria-controls="dashboard"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <GiCardboardBox className="  " />
                                Dashboard{" "}
                              </p>
                            </button>
                          </li>
                          <li className="mr-2" role="presentation">
                            <button
                              class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="settings-tab"
                              data-tabs-target="#settings"
                              type="button"
                              role="tab"
                              aria-controls="settings"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex ">
                                {" "}
                                <MdMiscellaneousServices className=" " />{" "}
                                Settings
                              </p>
                            </button>
                          </li>
                          <li role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="contacts-tab"
                              data-tabs-target="#contacts"
                              type="button"
                              role="tab"
                              aria-controls="contacts"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <IoMdContacts /> Contacts
                              </p>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div id="myTabContent">
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Profile tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="dashboard"
                          role="tabpanel"
                          aria-labelledby="dashboard-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Dashboard tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling.. Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.. Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="settings"
                          role="tabpanel"
                          aria-labelledby="settings-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Settings tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="contacts"
                          role="tabpanel"
                          aria-labelledby="contacts-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Contacts tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*  Content Tab 6 *********************************************************************************************************************************/}
              {activeTab === 6 && (
                <div className=" ">
                  <div className=" h-screen ">
                    <form className="">
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Patient Name
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Attendent Name
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Relation
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        style={{ backgroundColor: "#675CD8" }}
                      >
                        <p className="flex">
                          {" "}
                          <GoFileSubmodule className="mx-2 " /> Submit
                        </p>
                      </button>
                    </form>

                    <div
                      class=" rounded-lg w-10/12   mr-8 my-4 shadow-xl h-2/5 basis-1/4  "
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul
                          class="flex flex-wrap -mb-px text-sm font-medium text-center"
                          id="myTab"
                          data-tabs-toggle="#myTabContent"
                          role="tablist"
                        >
                          <li class="mr-2" role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 rounded-t-lg  hover:scale-105"
                              id="profile-tab"
                              data-tabs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <ImProfile className=" " /> Profile
                              </p>
                            </button>
                          </li>
                          <li class="mr-2" role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="dashboard-tab"
                              data-tabs-target="#dashboard"
                              type="button"
                              role="tab"
                              aria-controls="dashboard"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <GiCardboardBox className="  " />
                                Dashboard{" "}
                              </p>
                            </button>
                          </li>
                          <li className="mr-2" role="presentation">
                            <button
                              class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="settings-tab"
                              data-tabs-target="#settings"
                              type="button"
                              role="tab"
                              aria-controls="settings"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex ">
                                {" "}
                                <MdMiscellaneousServices className=" " />{" "}
                                Settings
                              </p>
                            </button>
                          </li>
                          <li role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="contacts-tab"
                              data-tabs-target="#contacts"
                              type="button"
                              role="tab"
                              aria-controls="contacts"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <IoMdContacts /> Contacts
                              </p>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div id="myTabContent">
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Profile tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="dashboard"
                          role="tabpanel"
                          aria-labelledby="dashboard-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Dashboard tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling.. Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.. Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="settings"
                          role="tabpanel"
                          aria-labelledby="settings-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Settings tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="contacts"
                          role="tabpanel"
                          aria-labelledby="contacts-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Contacts tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*  Content Tab 7 *********************************************************************************************************************************/}
              {activeTab === 7 && (
                <div className=" ">
                  <div className=" h-screen ">
                    <form className="">
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Patient Name
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Attendent Name
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Relation
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-4 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                          <input
                            type=" text"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-8 ">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group mx-16">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        style={{ backgroundColor: "#675CD8" }}
                      >
                        <p className="flex">
                          {" "}
                          <GoFileSubmodule className="mx-2 " /> Submit
                        </p>
                      </button>
                    </form>

                    <div
                      class=" rounded-lg w-10/12   mr-8 my-4 shadow-xl h-2/5 basis-1/4  "
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul
                          class="flex flex-wrap -mb-px text-sm font-medium text-center"
                          id="myTab"
                          data-tabs-toggle="#myTabContent"
                          role="tablist"
                        >
                          <li class="mr-2" role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 rounded-t-lg  hover:scale-105"
                              id="profile-tab"
                              data-tabs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <ImProfile className=" " /> Profile
                              </p>
                            </button>
                          </li>
                          <li class="mr-2" role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="dashboard-tab"
                              data-tabs-target="#dashboard"
                              type="button"
                              role="tab"
                              aria-controls="dashboard"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <GiCardboardBox className="  " />
                                Dashboard{" "}
                              </p>
                            </button>
                          </li>
                          <li className="mr-2" role="presentation">
                            <button
                              class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="settings-tab"
                              data-tabs-target="#settings"
                              type="button"
                              role="tab"
                              aria-controls="settings"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex ">
                                {" "}
                                <MdMiscellaneousServices className=" " />{" "}
                                Settings
                              </p>
                            </button>
                          </li>
                          <li role="presentation">
                            <button
                              className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:scale-105"
                              id="contacts-tab"
                              data-tabs-target="#contacts"
                              type="button"
                              role="tab"
                              aria-controls="contacts"
                              aria-selected="false"
                              style={{
                                backgroundColor: "#675CD8",
                                color: "white",
                              }}
                            >
                              <p className="flex">
                                {" "}
                                <IoMdContacts /> Contacts
                              </p>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div id="myTabContent">
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Profile tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="dashboard"
                          role="tabpanel"
                          aria-labelledby="dashboard-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Dashboard tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling.. Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.. Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="settings"
                          role="tabpanel"
                          aria-labelledby="settings-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Settings tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                        <div
                          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          id="contacts"
                          role="tabpanel"
                          aria-labelledby="contacts-tab"
                        >
                          <p class="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong class="font-medium text-gray-800 dark:text-white">
                              Contacts tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. . Clicking another tab will toggle the
                            visibility of this one for the next. The tab
                            JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling. . Clicking another tab will
                            toggle the visibility of this one for the next. The
                            tab JavaScript swaps classes to control the content
                            visibility and styling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipd;

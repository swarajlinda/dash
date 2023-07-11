import React, { useState } from "react";
import dayjs from 'dayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
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
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaFirstdraft } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
 

const IPDservices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [myTab, setMyTab] = useState(0);
  const [equipTab, setEquipTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const myhandleTabClick = (index) => {
    setMyTab(index);
  };
  const equiphandleTabClcik = (index) => {
    setEquipTab(index);
  }
  
  return (
    <div className="p-4 bg-blue-100">
      <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
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
        <div
          className="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl bg-white"
          style={{ backgroundColor: "#F8F7FA" }}
        >
       
            <p class="mx-14 font-serif my-2 text-blue-900 text-2xl font-bold">IPD Services</p>
            <div className="text  mx-12 flex h-12 w-10/12 rounded-lg  ">
            {/*  <!-- Modal toggle --> */}
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="block text-white bg-blue-700 h-9 my-1  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:scale-110"
              type="button"
              style={{ backgroundColor: "#233876", color: "white" }}
            >
              <p className="  flex  mx-2 font-bold ">
                {" "}
                <RiUserSearchFill className=" mx-2 my-1  hover:scale-105" />{" "}
                FIND PATIENT
              </p>
            </button>
         
            {/* <!-- Main modal --> */}
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50   hidden w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative  w-2/3 max-w-full max-h-full my-2">
                {/*    <!-- Modal content --> */}
                <div class="relative bg-indigo-300 rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="px-6 py-4 lg:px-8">
                  <h3 class="mb-4 text-xl font-bold   text-blue-900 dark:text-white text-center">
                    Find patients
                  </h3>
                  <form class="space-y-2" action="#">
                  <div className="flex">
                    <label
                      for="email"
                      class="block my-3 mx-2  text-sm font-medium text-blue-900 dark:text-white"
                    >
                      SearchPatient
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 h-9 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Search patient "
                      required
                      />
                      <label
                      for="email"
                      class="block my-3 mx-2  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile 
                    </label>
                      <input
                      type="text"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 h-9 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Search mobile "
                      required
                      />
                      <label
                      for="email"
                      class="block my-3 mx-2  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      UHID/EMR 
                    </label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 h-9 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search UHID/EMR "
                    required
                    />
                      <div class="flex items-center my-3 mx-2 h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                      </div>
                      <label
                      for="remember"
                      class="ml-2 text-sm my-3 font-medium text-gray-900 dark:text-gray-300 mx-2 "
                    >
                      Inpatient
                      </label>
                      <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 my-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                      />
                      <label
                      for="remember"
                      class="ml-2 text-sm my-3 font-medium text-gray-900 dark:text-gray-300"
                    >
                      Dischagre
                      </label>
                      <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 my-3 mx-2  rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                      />
                      <label
                      for="remember"
                      class="  text-sm font-medium my-3 text-gray-900 dark:text-gray-300"
                    >
                      All
                    </label>
                  </div>

                 
                    </form>
                    <form class="space-y-2" action="#">
                    <div className="flex">
                      <label
                        for="email"
                        class="block my-3 mx-2  text-sm font-medium text-blue-900 dark:text-white"
                      >
                        SelectWard
                      </label>
                      <select id="countries" class="bg-gray-50 border mx-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 h-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Ward </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                        <label
                        for="email"
                        class="block my-3 mx-2  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        SelectBed 
                      </label>
                      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 h-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Select Bed </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                        <label
                        for="email"
                        class="block my-3 mx-2  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        RegNo.
                      </label>
                      <input
                      type="text"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 h-9 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Search RegNo. "
                      required
                      />
                      
                    </div>
  
                   
                    </form>
                </div>
                  <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400   ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">White</td>
                        <td class="px-6 py-4">Laptop </td>
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">White</td>
                        <td class="px-6 py-4">Laptop </td>
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">White</td>
                        <td class="px-6 py-4">Laptop </td>
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
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
                    </tbody>
                  </table>
                </div>
               
                </div>
              </div>
            </div>
          </div>
       
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 w-3/4">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                  Status 
                </th>
                <th scope="col" class="px-6 py-3">
                  CashLess
                </th>
                <th scope="col" class="px-6 py-3">
                  Corporate  
                </th>
                <th scope="col" class="px-6 py-3">
                  PatientName 
                </th>
                <th scope="col" class="px-6 py-3">
                  RegistrationNo.
                </th>
                <th scope="col" class="px-6 py-3">
                  MRNo. 
                </th>
                <th scope="col" class="px-6 py-3">
                   Department 
                </th>
                <th scope="col" class="px-6 py-3">
                  ConsulatantName
                </th>
                <th scope="col" class="px-6 py-3">
                  Sex
                </th>
                <th scope="col" class="px-6 py-3">
                  GuardianName
                </th>
                <th scope="col" class="px-6 py-3">
                  RegistrationDate
                </th>
                <th scope="col" class="px-6 py-3">
                   MobileNo.
                </th>
                <th scope="col" class="px-6 py-3">
                  ServiceNo.
                </th>
                <th scope="col" class="px-6 py-3">
                  WardName 
                </th>
                <th scope="col" class="px-6 py-3">
                   BedName
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>
                <th scope="col" class="px-6 py-3">
                   Attendant 
                </th>
                <th scope="col" class="px-6 py-3">
                AttendantMobNo.
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
                    <label for="checkbox-table-search-1" class="sr-only">
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
                    <label for="checkbox-table-search-2" class="sr-only">
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
                    <label for="checkbox-table-search-3" class="sr-only">
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
            
            </tbody>
          </table>
        </div>  
          {/* Tabs start ************************************************************************************************************************************/}
          <div className="tabs-container p-4 mx-6">
            <div className="tabs  ">
              <div
                className={`tab ${
                  (activeTab === 0 ? "active" : "w-10", "h-9")
                } `}
                onClick={() => handleTabClick(0)}
                style={{ backgroundColor: "#233876", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <BsFillGrid1X2Fill className=" mx-2 my-1  hover:scale-105" />{" "}
                  Ward Procedures
                </p>
              </div>
              <div
                className={`tab ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
                style={{ backgroundColor: "#233876", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <FaFirstdraft className=" mx-2 my-1 " /> ChangeWardBed
                </p>
              </div>
              <div
                className={`tab ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(2)}
                style={{ backgroundColor: "#233876", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <FaFirstdraft className=" mx-2 my-1 " /> DoctorsVisit
                </p>
              </div>
              <div
                className={`tab ${activeTab === 3 ? "active" : ""}`}
                onClick={() => handleTabClick(3)}
                style={{ backgroundColor: "#233876", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <FaFirstdraft className=" mx-2 my-1 " /> InvestigationRequests
                </p>
              </div>
              <div
                className={`tab ${activeTab === 4 ? "active" : ""}`}
                onClick={() => handleTabClick(4)}
                style={{ backgroundColor: "#233876", color: "white" }}
              >
                <p className="  flex  mx-2 ">
                  {" "}
                  <FaFirstdraft className=" mx-2 my-1 " /> Equipment
                </p>
              </div>
          
            </div>
          </div>
          {/*Content tabs ***********************************************************************************************************************************/}
          {/*  Content Tab 0 ********************************************************************************************************************************/}
          {activeTab === 0 && (
            <div className=" h-screen  ">
            <div className="w-full">
            <div className="flex mb-4 mx-12">
              <button
                className={`px-4 py-2 mr-2 h-9 rounded-t-lg ${
                  myTab === 0 ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                style={{ backgroundColor: "#233876", color: "white" }}
                onClick={() => myhandleTabClick(0)}
              >
               Add/Update
              </button>
              <button
                className={`px-4 py-2 h-9 rounded-t-lg ${
                  myTab === 1 ? "  text-white" : "bg-gray-300"
                }`}
                style={{ backgroundColor: "#233876", color: "white" }}
                onClick={() => myhandleTabClick(1)}
              >
               Conclude
              </button>
          {/*  Content Tab 2 ********************************************************************************************************************************/}     
            </div>
            {myTab === 0 && (
              <div className="w-10/12  ">
              <div
              className="rounded-lg my-2 bg-gray-50 dark:bg-gray-800 "
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
            <div className="flex mx-8 ">
                <label
                  for="countries"
                  class="block mx-4  text-sm font-medium text-gray-900 dark:text-white  "
                >
                  {" "}
                  Rate Card
                </label>
                <label
                  for="countries"
                  class="block  text-sm font-medium text-gray-900 dark:text-white  mx-16 "
                >
                  Service
                </label>
            
            </div>
            <div className="flex space-x-2 mx-10">
                <select
                  id="countries"
                  class="bg-gray-50 border my-2 h-9 border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected> DEFAULT</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="countries"
                  class="bg-gray-50 h-9 border my-2 border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
               
             
                <p className="my-4 text-gray-900 text-sm font-medium">
                  Consultant{" "}
                </p>
                <select
                  id="countries"
                  class="bg-gray-50 border h-9 my-2 border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                        </select>
                        <p className="my-4 text-sm font-medium text-gray-900  ">Start Time</p>
                        <div className=" ">
                          <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className=" rounded-lg " />
                          </div>
                <input
                  type="text"
                  className="border my-2 h-9 w-20 rounded-md"
                  placeholder="Qty"
                />
                <input
                  type="text"
                  className="border my-2 h-9 w-20 rounded-md"
                  placeholder="Type"
                />
                <input
                type="text"
                className="border h-9 my-2 w-20 rounded-md"
                placeholder="Unit"
                />
                <input
                type="text"
                className="border h-9 my-2 w-20 rounded-md"
                placeholder="Rate"
                />
                <input
                type="text"
                className="border my-2 h-9 w-20 rounded-md"
                placeholder="Amount"
                />
            
                <button type="button" class="text-white my-2 h-9 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </div>
              </div>  
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 w-11/12  ">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                      Category 
                    </th>
                    <th scope="col" class="px-6 py-3">
                      FieldName
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Unit 
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Rate
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Qty.
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Qty 
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
                        <label for="checkbox-table-search-1" class="sr-only">
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
                        <label for="checkbox-table-search-2" class="sr-only">
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
                        <label for="checkbox-table-search-3" class="sr-only">
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
                        <label for="checkbox-table-search-3" class="sr-only">
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
                        <label for="checkbox-table-search-3" class="sr-only">
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
                        <label for="checkbox-table-search-3" class="sr-only">
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
            </div> 
                )}
                {myTab === 1 && (
                  <div className="w-10/12    ">
                  <div
                  className=" my-2  rounded-lg bg-gray-50 dark:bg-gray-800 "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                <div className="flex mx-8 ">
                   
                </div>
                <div className="flex space-x-2 mx-10">
                
                        
                 
                
                  <p className="my-4 ">StartTime</p>
                  
                  <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className="  rounded-lg " />
                  
                        <p className="my-4 ">EndTime</p>
                        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className="  rounded-lg " />
                        
                        <button type="button" class="text-white my-2 h-9 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ShowCurrent</button>
                        <button type="button" class="text-white my-2 h-9 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ShowAll</button>       
                    <input
                      type="text"
                      className="border h-9 w-20 my-2 rounded-md "
                      placeholder="Qty"
                    />
                    <input
                      type="text"
                      className="border h-9 w-20 my-2 rounded-md"
                      placeholder="Type"
                    />
                  
                    <input
                    type="text"
                    className="border h-9 w-20 my-2 rounded-md"
                    placeholder="Rate"
                    />
                    <input
                    type="text"
                    className="border h-9 w-20 my-2 rounded-md"
                    placeholder="Amount"
                    />
                
                    <button type="button" class="text-white my-2 h-9 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                </div>
                  </div>  
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg  mx-10 w-11/12    ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                          Category 
                        </th>
                        <th scope="col" class="px-6 py-3">
                          FieldName
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Unit 
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Rate
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Qty.
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Qty 
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                </div> 
                    )}
      </div>
   </div>
          )}
          {activeTab === 1 && (
            <div className=" h-screen  ">
            <div >
            <div
            className=" my-2  rounded-lg bg-gray-50 dark:bg-gray-800 "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
          <div className="flex mx-8 ">
             
          </div>
          <div className="flex space-x-2 mx-10">
          
                  
           
          
            <p className="my-4 text-sm font-bold ">BedMovementTime</p>
            
                    <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className="  rounded-lg " />
                    <label htmlFor="" className="my-4">Search Patient</label>
               <input type="text" className="h-9 my-2 rounded-lg" />     
               <label htmlFor="" className="my-4">Select Ward </label>
               <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 h-9 my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option selected> Select Ward</option>
               <option value="US">United States</option>
               <option value="CA">Canada</option>
               <option value="FR">France</option>
               <option value="DE">Germany</option>
                    </select>
                    <label htmlFor="" className="my-4">Select Bed </label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 h-9 my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected> Select Bed</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
           <input
              type="text"
              className="border h-9 w-1/12 my-2 rounded-md"
              placeholder="Remarks"
              />
          
             
          </div>
            </div>  
    
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg  mx-10 w-9/12    ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                          Excluded  
                        </th>
                        <th scope="col" class="px-6 py-3">
                          WardName
                        </th>
                        <th scope="col" class="px-6 py-3">
                          BedName 
                        </th>
                        <th scope="col" class="px-6 py-3">
                          TImeIn
                        </th>
                        <th scope="col" class="px-6 py-3">
                          TImeOut.
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Rate  
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Days 
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                          TransferInNote 
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                              id="checkbox-table-search-3"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-search-3" class="sr-only">
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
                              id="checkbox-table-search-3"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-search-3" class="sr-only">
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
                              id="checkbox-table-search-3"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-search-3" class="sr-only">
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
                              id="checkbox-table-search-3"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>  
            </div>
          )}
          {activeTab === 2 && (
            <div className=" h-screen  ">
            <div >
            <div
            className=" my-2  rounded-lg bg-gray-50 dark:bg-gray-800 "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
          <div className="flex mx-8 ">
             
          </div>
          <div className="flex space-x-2 mx-10">
          
                  
           
          
            <p className="my-4 text-sm font-bold ">Visit Form </p>
                    <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className="  rounded-lg " />
                    <p className="my-4 text-sm font-bold ">Visit To </p>
                    <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className="  rounded-lg " />

                     
               <label htmlFor="" className="my-4 text-sm font-bold ">Select Consultant </label>
               <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 h-9 my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option selected> Select Ward</option>
               <option value="US">United States</option>
               <option value="CA">Canada</option>
               <option value="FR">France</option>
               <option value="DE">Germany</option>
                    </select>
                    
              <input
                    type="text"
                    className="border h-9 my-2 w-1/12 rounded-md"
                    placeholder="Rate"
                    />          
                    <button type="button" class="text-white h-9 my-2 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
          
             
          </div>
            </div>  
    
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg  mx-10 w-9/12    ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                       Consultant Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                        VisitFrom 
                        </th>
                        <th scope="col" class="px-6 py-3">
                          VisitTo 
                        </th>
                        <th scope="col" class="px-6 py-3">
                         Fee 
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Remarks 
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
             
                      </tr>
                    </tbody>
                  </table>
                  </div>  
            </div>
          )}
          {activeTab === 4 && (
            <div className= "h-screen">
              <div className="w-full">
              <div className="flex mb-4 mx-12">
              <button
                className={`px-4 py-2 mr-2 h-9 rounded-t-lg ${
                  equipTab === 0 ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                style={{ backgroundColor: "#233876", color: "white" }}
                onClick={() => equiphandleTabClcik(0)}
              >
               AddEqipment
              </button>
              <button
                className={`px-4 py-2 h-9 rounded-t-lg ${
                  equipTab === 1 ? "  text-white" : "bg-gray-300"
                }`}
                style={{ backgroundColor: "#233876", color: "white" }}
                onClick={() => equiphandleTabClcik(1)}
              >
               EquipmentRemoval
                  </button>
                  <button
                  className={`px-4 mx-2 py-2 h-9 rounded-t-lg ${
                    equipTab === 2 ? "  text-white" : "bg-gray-300"
                  }`}
                  style={{ backgroundColor: "#233876", color: "white" }}
                  onClick={() => equiphandleTabClcik(2)}
                >
                 EquipmentUtilization
                </button>
          {/*  Content Tab 2 ********************************************************************************************************************************/}     
                </div>
                {equipTab === 0 && (
                  <div className="w-10/12  ">
                  <div
                  className="rounded-lg my-2 bg-gray-50 dark:bg-gray-800 "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                <div className="flex mx-8 ">
                    <label
                      for="countries"
                      class="block mx-4  text-sm font-medium text-gray-900 dark:text-white  "
                    >
                      {" "}
                      Rate Card
                    </label>
                    <label
                      for="countries"
                      class="block  text-sm font-medium text-gray-900 dark:text-white  mx-16 "
                    >
                      Equipment
                    </label>
                
                </div>
                <div className="flex space-x-2 mx-10">
                    <select
                      id="countries"
                      class="bg-gray-50 border my-2 h-9 border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-1/12   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected> DEFAULT</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <select
                      id="countries"
                      class="bg-gray-50 h-9 border my-2  border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block  w-2/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                   
                 
                 
                            <p className=" my-4 text-sm font-medium text-gray-900  ">Issued Date</p>
                            <div className=" ">
                              <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className=" rounded-lg " />
                              </div>
                    <input
                      type="text"
                      className="border my-2 h-9 w-20 rounded-md"
                      placeholder="Rate"
                    />
                    <button type="button" class="text-white bg-gray-700 h-9 my-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
                 
                
                
                </div>
                  </div>  
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 w-11/12  ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                         Started On
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Ended On
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Equipment Group Name 
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Equipment Name
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>         
                </div> 
                )}
                {equipTab === 1 && (
                  <div className="w-10/12  ">
                  <div
                  className="rounded-lg my-2 bg-gray-50 dark:bg-gray-800 "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
             
                      <div className="flex space-x-2 mx-16">
                          
                
                       <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className=" rounded-lg " />
                            
                     <button type="button" class="text-white bg-gray-700 h-9 my-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove</button>
                </div>
                  </div> 
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 w-11/12  ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                         Started On
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Ended On
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Equipment Group Name 
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Equipment Name
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>            
                </div> 
                )}
                {equipTab === 2 && (
                  <div className="w-10/12  ">
                  <div
                  className="rounded-lg my-2 bg-gray-50 dark:bg-gray-800 "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
             <div className="flex justify-start   space-x-2 mx-16">
                          <p className="text-xl font-bold my-2 text-blue-900">Equipment Utilizaton</p>
            <button type="button" class="text-white bg-gray-700 h-9 my-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Forced Release</button>
                     <button type="button" class="text-white bg-gray-700 h-9 my-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Refresh</button>
                        
                </div>
                  </div> 
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 w-11/12  ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
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
                         Started On
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Ended On
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Equipment Group Name 
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Equipment Name
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
                            <label for="checkbox-table-search-1" class="sr-only">
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
                            <label for="checkbox-table-search-2" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                            <label for="checkbox-table-search-3" class="sr-only">
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
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">Laptop</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>            
                </div> 
                 )}
              </div>
            </div>
             
          )}
          
        </div>
      </div>
    </div>
  );
};

export default IPDservices;

import React ,{useState} from 'react'
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
import Card from "@mui/material/Card";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
const Opdoppointment = () => {
  const [myTab, setMyTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const myhandleTabClick = (index) => {
    setMyTab(index);
  };
  return (
      <div className="p-4 bg-blue-100">
          <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
          <div className="col-span-4 col-start-1 row-span-full  bg-indigo-800 h-full">
          <div>
            <p className="mx-12  text-white  text-xl font-mono my-2">
              Framework Futuristics{" "}
            </p>
          </div>
          <div id="main" class=" my-10 flex flex-col  space-y-4">
            <div className="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p className="mx-12 my-2 text-lg font-bold text-white float-left">
                Dashboard <AiFillHome className="float-left my-1 mx-2" />
                <AiOutlineCaretDown className="float-right my-2 mx-24" />
              </p>
            </div>
            <div className="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p className="mx-12 my-2 text-lg font-bold text-white float-left">
                Patient Reg.{" "}
                <MdAppRegistration className="float-left my-1 mx-2" />
              </p>
            </div>
            <div className="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700 flow-root">
              <p className="mx-12 my-2 text-lg font-bold text-white float-left ">
                Organise <CgOrganisation className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 flow-root rounded-2xl">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                Pharmacy <MdLocalPharmacy className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                Reception <BsReception4 className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                OPD <AiFillLayout className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl">
              <p className="mx-12 my-2 text-lg font-bold text-white ">
                IPD <RiVipDiamondFill className="float-left my-1 mx-2" />
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
              <p className="mx-12 my-2 text-lg font-bold text-white ">
                Billing <MdPayments className="float-left my-1 mx-2" />
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                Investigations{" "}
                <MdOutlineStorage className="float-left my-1 mx-2" />
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                OT <AiOutlineAppstoreAdd className="float-left my-1 mx-2" />{" "}
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                Inventory{" "}
                <MdOutlineInventory className="float-left my-1 mx-2" />
              </p>
            </div>
            <div className="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
              <p className="mx-12 my-2 text-lg font-bold text-white">
                TPA <SiJetpackcompose className="float-left my-1 mx-2" />
              </p>
            </div>
          </div>
              </div>
              <div
              className="col-span-8 col-end-11 row-span-full ml-1 w-screen rounded-tl-3xl bg-white"
              style={{ backgroundColor: "#F8F7FA" }}
              >
              <p class="mx-12 my-2 font-serif text-2xl font-bold text-blue-900 underline ">
             OPD APPOINTMENT MANAGEMENT
          </p>
          {/*  <!-- Modal toggle --> */}
          <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          class="block text-white bg-blue-900 h-9 my-1 mx-12  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:scale-110"
          type="button"
        
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
              <h3 class="mb-4 text-xl font-bold   text-white dark:text-white text-center">
                Find patients
              </h3>
              <form class="space-y-2" action="#">
                <div className="flex">
                  <label
                    for="email"
                    class="block my-3 mx-2  text-sm font-medium text-gray-900 dark:text-white"
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
            </div>
              <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10   ">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400   ">
                <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
          {/* Tabs start *******************************************************************************************************/}
          <div className="tabs-container  mx-10">
          <div className="tabs  ">
            <div
              className={`tab ${
                (activeTab === 0 ? "active" : "w-10", "h-9 bg-blue-900 text-white")
              } `}
              onClick={() => handleTabClick(0)}
             
            >
              <p className="  flex  mx-2 ">
                {" "}
                <BsFillGrid1X2Fill className=" mx-2 my-1  hover:scale-105" />{" "}
               Registration
              </p>
            </div>
            <div
              className={`tab ${activeTab === 1 ? "active" : "bg-blue-900 text-white "}`}
              onClick={() => handleTabClick(1)}
            
            >
              <p className="  flex  mx-2 ">
                {" "}
                <FaFirstdraft className=" mx-2 my-1 " /> Appointment
              </p>
              </div>
              <div
              className={`tab ${activeTab === 2 ? "active" : "bg-blue-900 text-white"}`}
              onClick={() => handleTabClick(2)}
             
            >
              <p className="  flex  mx-2 ">
                {" "}
                <FaFirstdraft className=" mx-2 my-1 " />Discount 
              </p>
              </div>
              <div
              className={`tab ${activeTab === 3 ? "active" : "bg-blue-900 text-white"}`}
              onClick={() => handleTabClick(3)}
             
            >
              <p className="  flex  mx-2 ">
                {" "}
                <FaFirstdraft className=" mx-2 my-1 " /> Enquiry  
              </p>
              </div>
              <div
              className={`tab ${activeTab === 4 ? "active" : "bg-blue-900 text-white"}`}
              onClick={() => handleTabClick(4)}>
              <p className="  flex  mx-2 ">
                {" "}
                <FaFirstdraft className=" mx-2 my-1 " />  Free Consultation  
              </p>
              </div>
          
          </div>
          </div>
          {/*Content tabs ******************************************************************************************************/}
          {activeTab === 0 && (
            <div className="  flex w-11/12 ">
             
            
            <Card
            className=" shadow-xl w-9/12 z-0 border m-8 my-2"
            
          >
            <div style={{ padding: "30px" }}>
              <form className="my-2">
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_phone"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Patient Name
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_company"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 font-serif font-bold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Fathers Name
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Attendant
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-4 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose </option>
                      <option value="Male"> Fathers</option>
                      <option value="Female">Friends </option>
                      <option value="Others">Uncle</option>
                    </select>
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 font-serif font-bold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Relation
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose </option>
                      <option value="Male"> MALE</option>
                      <option value="Female">FEMALE</option>
                      <option value="Others">OTHERS</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Sex
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      State
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      pin
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-4 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 font-serif font-bold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      DOB
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      City
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Actual Age
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Remarks
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-4 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 font-serif font-bold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Weight (KG)
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose</option>
                      <option value="Male"> Critical</option>
                      <option value="Female">General </option>
                      <option value="Others"> Semi Critical </option>
                      <option value="Others">VIP</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-lg font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Criticially
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose</option>
                      <option value="Male"> Critical</option>
                      <option value="Female">General </option>
                      <option value="Others"> Semi Critical </option>
                      <option value="Others">VIP</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-lg font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Corporate
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Service No.
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-4 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 font-serif font-bold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Department
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose</option>
                      <option value="Male"> Critical</option>
                      <option value="Female">General </option>
                      <option value="Others"> Semi Critical </option>
                      <option value="Others">VIP</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-lg font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Consultant
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose</option>
                      <option value="Male"> Critical</option>
                      <option value="Female">General </option>
                      <option value="Others"> Semi Critical </option>
                      <option value="Others">VIP</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-lg font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Shift
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Service No.
                    </label>
                  </div>
                </div>
                <div class="grid md:grid-cols-4 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 font-serif font-bold dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Payment Mode
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose</option>
                      <option value="Male"> Critical</option>
                      <option value="Female">General </option>
                      <option value="Others"> Semi Critical </option>
                      <option value="Others">VIP</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-lg font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Bank
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      required
                      class="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option selected>Choose</option>
                      <option value="Male"> Critical</option>
                      <option value="Female">General </option>
                      <option value="Others"> Semi Critical </option>
                      <option value="Others">VIP</option>
                    </select>
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-lg font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Cheque
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm font-serif font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Cheque Dte.
                    </label>
                  </div>
                </div>

             
                <button
                  type="submit"
                      class="text-white my-2 bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      
                >
                  Submit
                    </button>
                    <button
                  type="submit"
                  class="text-white mx-2 my-2 bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  print
                </button>
              </form>
            </div>
          </Card>
        
            
            </div>
          )}
           {activeTab === 1 && (
            <div className="w-4/5">
              <div className=' mx-10 rounded-lg  flex bg-white shadow-lg w-11/12'>
                 <Select
                placeholder="SelectDepartment "
                className='w-48 mx-5 my-2 font-bold   '
            size="sm"
          >
            <Option>ABC</Option>
            <Option>ABC</Option>
            <Option>ABC</Option>
            <Option>ABC</Option>
                </Select>
                <Select
                placeholder="SelectConsultant"
                className='w-48 mx-10 my-2 font-bold'
            size="sm"
          >
            <Option>ABC</Option>
            <Option>ABC</Option>
            <Option>ABC</Option>
            <Option>ABC</Option>
                </Select>
                <Select
                placeholder="SelectShift"
                className='w-48 mx-10 my-2 font-bold '
            size="sm"
          >
            <Option>ABC</Option>
            <Option>ABC</Option>
            <Option>ABC</Option>
            <Option>ABC</Option>
                </Select>
                <input type="date" className='h-9 w-48 my-2 rounded-lg' />
                <button type="button" class="text-white  bg-indigo-500  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm h-9 my-2 mx-2 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
              </div>
               <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>

                </tr>
              </tbody>
            </table>
          </div> 
        </div>
          )}
          {activeTab === 2 && (
            <div className="w-4/5">
           <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>

                </tr>
              </tbody>
            </table>
              </div> 
              <p className='font-bold text-gray-600 mx-10 rounded-lg border w-1/6 text-center bg-gray-300'>After Discount </p>
              <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>

                </tr>
              </tbody>
            </table>
          </div> 
        </div>
          )}
          {activeTab === 3 && (
            <div className="w-4/5">
              <div className="w-full">
                <div className='flex mb-4 mx-12 '>
                   <button
                className={`px-4 py-2 mr-2 h-9 my-2 rounded-md ${
                  myTab === 0 ? " text-white" : ""
                }`}
                style={{ backgroundColor: "#675CD8", color: "white" }}
                onClick={() => myhandleTabClick(0)}
              >
                      DoctorsAvaibility 
                  </button>
                  <button
                  className={`px-4 py-2 mr-2  h-9 my-2 rounded-md ${
                    myTab === 1 ? "  text-white" : " "
                  }`}
                  style={{ backgroundColor: "#675CD8", color: "white" }}
                  onClick={() => myhandleTabClick(1)}
                >
                  DoctorsOpdList
                </button>
                </div>
                <div>
                  {myTab === 0 && (
                    <div>
                   
                    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                      <thead class="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
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
                             Inhouse Consultant
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Specialization
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Professional Degree
                          </th>
                          <th scope="col" class="px-6 py-3">
                           OPDConst.Fee
                          </th>
                          <th scope="col" class="px-6 py-3">
                            IPDConst.Fee
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Surgeon
                          </th>
                          <th scope="col" class="px-6 py-3">
                             Anesthesist 
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Days
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
              
        
                        </tr>
                      </tbody>
                    </table>
                      </div> 
                    </div>
                  )}
                  {myTab === 1 && (
                  <div>
                      <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                      <thead class="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
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
                             Registration Time 
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Status
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Registration No.
                          </th>
                          <th scope="col" class="px-6 py-3">
                            PatientName
                          </th>
                          <th scope="col" class="px-6 py-3">
                             Age
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Sex
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Mobile No.
                          </th>
                          <th scope="col" class="px-6 py-3">
                             Critically
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Fee 
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
                          <td class="px-6 py-4">Laptop PC</td>
                          <td class="px-6 py-4">Laptop PC</td>
                              
                         
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
                          <td class="px-6 py-4">Laptop PC</td>
                          <td class="px-6 py-4">Laptop PC</td>
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
                          <td class="px-6 py-4">Laptop PC</td>
                          <td class="px-6 py-4">Laptop PC</td>
        
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
                          <td class="px-6 py-4">Laptop PC</td>
                          <td class="px-6 py-4">Laptop PC</td>
        
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
                       
                        </tr>
                      </tbody>
                    </table>
                      </div> 
                  </div>
                  )}
                </div>
              </div>     
          </div>
          )}
          {activeTab === 4 && (
            <div className="w-4/5">
              <p className="mx-10 font-semibold">Free Consultation</p>
           <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
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
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>
                  <td class="px-6 py-4">Watches</td>

                </tr>
              </tbody>
            </table>
          </div> 
        </div>
          )}
          </div>    
          </div>
      </div>
  )
}

export default Opdoppointment
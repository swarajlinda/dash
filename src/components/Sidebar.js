import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { MdLocalPharmacy } from "react-icons/md";
import { BsReception4 } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import { SiJetpackcompose } from "react-icons/si";
import { MdAppRegistration } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
 import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
      <div>
    <div className='grid grid-cols-12 p-2'>
      <div class="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
      <div>
        <p className="mx-16 text-white text-lg font-mono my-2">
          Framework Futuristics{" "}
        </p>
      </div>
      <div id="main" class="my-20 flex flex-col  space-y-4">
        <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-indigo-600  flow-root ">
          <p class="mx-12 my-2 text-lg font-bold text-white float-left">
            Dashboard <AiFillHome className="float-left my-1 mx-2" />
            <AiOutlineCaretDown className="float-right my-2 mx-24" />
          </p>
        </div>
        <div className="my-2 ">
        <li>
        <button type="button" class="flex items-center mx-14 w-full p-2 text-white font-semibold transition duration-75 rounded-lg group hover:bg-indigo-600 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>IPD</span>
              <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
          <Link to="Ipdbill" >
              <li>
                 <a href="/#" class="flex items-center w-full p-2 mx-12 font-semibold text-white transition duration-75 rounded-lg pl-11 group hover:bg-indigo-600    dark:hover:bg-gray-700">IPD Bills</a>
              </li>
            </Link>
            <Link to="Ipdothers">
              <li>
                 <a href="/#" class="flex items-center w-full p-2  mx-12 font-semibold text-white transition duration-75 rounded-lg pl-11 group hover:bg-indigo-600    dark:hover:bg-gray-700">IPD Others </a>
            </li>
            </Link>
            <Link to="IPDservices">
              <li>
                 <a href="/#" class="flex items-center w-full p-2  mx-12 font-semibold text-white transition duration-75 rounded-lg pl-11 group hover:bg-indigo-600    dark:hover:bg-gray-700"> IPD Services</a>
              </li>
            </Link>
        </ul>
          </li>
          </div>
        <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-indigo-600  flow-root ">
          <p class="mx-12 my-2 text-lg font-bold text-white float-left   ">
            PatientReg.{" "}
            <MdAppRegistration className="float-left my-1 mx-2   " />
          </p>
        </div>
        <div class="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-indigo-600 flow-root">
          <p class="mx-12 my-2 text-lg font-bold text-white float-left ">
            Organise <CgOrganisation className="float-left my-1 mx-2" />{" "}
          </p>
        </div>
        <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
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
         { /*  <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl">
          <ul class="mx-12  py-2 text-lg font-bold text-white ">
            IPD <RiVipDiamondFill className="float-left my-1 mx-2" />
          </ul>
         </div> */}
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
     </div>
      </div>
  )
}

export default Sidebar
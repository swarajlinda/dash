import React from "react";
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

const Template = () => {
  return (
    <div className="p-4 bg-blue-100">
      <div className="grid  grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
        <div className="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
          <div class="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
            <div>
              <p className="mx-16 text-white text-lg font-mono my-2">
                Framework Futuristics{" "}
              </p>
            </div>
            <div id="main" class="my-20 flex flex-col  space-y-4">
              <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
                <p class="mx-12 my-2 text-lg font-bold text-white float-left">
                  Dashboard{" "}
                  <AiFillHome className="float-left my-1 mx-2 animate-bounce " />
                  <AiOutlineCaretDown className="float-right my-2 mx-24" />
                </p>
              </div>
              <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
                <p class="mx-12 my-2 text-lg font-bold text-white float-left">
                  Patient Reg.{" "}
                  <MdAppRegistration className="float-left my-1 mx-2 animate-bounce " />
                </p>
              </div>
              <div class="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700 flow-root">
                <p class="mx-12 my-2 text-lg font-bold text-white float-left ">
                  Organise{" "}
                  <CgOrganisation className="float-left my-1 mx-2 animate-bounce " />{" "}
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 flow-root rounded-2xl">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  Pharmacy{" "}
                  <MdLocalPharmacy className="float-left my-1 mx-2 animate-bounce " />{" "}
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  Reception{" "}
                  <BsReception4 className="float-left my-1 mx-2 animate-bounce " />{" "}
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  OPD{" "}
                  <AiFillLayout className="float-left my-1 mx-2 animate-bounce  " />{" "}
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl">
                <p class="mx-12 my-2 text-lg font-bold text-white ">
                  IPD{" "}
                  <RiVipDiamondFill className="float-left my-1 mx-2 animate-bounce " />
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
                <p class="mx-12 my-2 text-lg font-bold text-white ">
                  Billing{" "}
                  <MdPayments className="float-left my-1 mx-2 animate-bounce " />
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2 rounded-2xl flow-root ">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  Investigations{" "}
                  <MdOutlineStorage className="float-left my-1 mx-2 animate-bounce " />
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root ">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  OT{" "}
                  <AiOutlineAppstoreAdd className="float-left my-1 mx-2 animate-bounce " />{" "}
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  Inventory{" "}
                  <MdOutlineInventory className="float-left my-1 mx-2 animate-bounce " />
                </p>
              </div>
              <div class="w-30 h-12 border-blue-300 hover:bg-blue-700 mx-2  rounded-2xl flow-root">
                <p class="mx-12 my-2 text-lg font-bold text-white">
                  TPA{" "}
                  <SiJetpackcompose className="float-left my-1 mx-2 animate-bounce " />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl"
          style={{ backgroundColor: "#F8F7FA" }}
        >
          <div>
            {" "}
            <p className="text-3xl text-gray-500  font-semibold mx-10 my-2">
              Roles List{" "}
            </p>
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              asperiores vitae temporibus et officiis, pariatur adipisci
              repellat necessitatibus eos nemo?
            </p>
          </div>
          <div className="flex flex-row gap-x-10 mx-10 my-5 ">
            {/* First Card  */}
            <div
              class=" rounded-lg w-1/4 shadow-xl h-40 basis-1/4  hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="  flow-root">
                <p className="text-gray-400 font-normal text-xl p-4 flex  float-left">
                  Total 7 Users{" "}
                </p>
                <div className="  flex -space-x-2 overflow-hidden mx-4 my-2  ">
                  {" "}
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110   "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className=" p-3 text-gray-500  font-semibold text-3xl">
                Adminstrator{" "}
              </p>
              <p className=" text-indigo-500  font-semibold mx-4 ">Edit role</p>
            </div>
            {/* Second Card  */}
            <div
              class=" rounded-lg  w-1/5  shadow-xl h-40 basis-1/4  hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="  flow-root">
                <p className="text-gray-400  font-normal text-xl p-4 flex  float-left">
                  Total 4 Users{" "}
                </p>
                <div className="  flex -space-x-2 overflow-hidden mx-4 my-2  ">
                  {" "}
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110   "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="p-4 text-gray-500  font-semibold text-3xl">
                Manager
              </p>
              <p className=" text-indigo-500   font-semibold mx-4 ">
                Edit role
              </p>
            </div>
            {/* Third Card  */}
            <div
              class=" rounded-lg w-1/5 shadow-xl h-40 basis-1/4  hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {" "}
              <div className="  flow-root">
                <p className="text-gray-400 font-normal text-xl p-4 flex  float-left">
                  Total 9 Users{" "}
                </p>
                <div className="  flow-root mx-16">
                  <div className="  flex -space-x-2 overflow-hidden mx-4 my-2  ">
                    {" "}
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                      src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                      alt=""
                    />
                    <img
                      class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110   "
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p className="p-4 text-gray-500  font-semibold text-3xl">Users</p>
              <p className=" text-indigo-500   font-semibold mx-4 ">
                Edit role
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-10  mb-4  mx-10  ">
            {/* Fourth Card  */}
            <div
              class=" rounded-lg w-1/5 shadow-xl h-40 basis-1/4 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="  flow-root">
                <p className="text-gray-400 font-semibold text-xl p-4 flex  float-left">
                  Total 7 Users{" "}
                </p>
                <div className="  flex -space-x-2 overflow-hidden mx-4 my-2  ">
                  {" "}
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110   "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className=" p-3 text-gray-500  font-semibold text-3xl">
                Support
              </p>
              <p className=" text-indigo-500  font-semibold mx-4 ">Edit role</p>
            </div>
            {/* Fifth Card  */}
            <div
              class=" rounded-lg w-1/5 shadow-xl h-40 basis-1/4 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="  flow-root">
                <p className="text-gray-400 font-semibold text-xl p-4 flex  float-left">
                  Total 9 Users{" "}
                </p>
                <div className="  flex -space-x-2 overflow-hidden mx-4 my-2  ">
                  {" "}
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 "
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110   "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110  "
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white hover:scale-110 bg-slate-500 "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className=" p-3 text-gray-500  font-semibold text-3xl">
                Restricted Users
              </p>
              <p className=" text-indigo-500  font-semibold mx-4 ">Edit role</p>
            </div>
            {/* Sixth Card  */}
            <div
              class=" rounded-lg w-1/5 shadow-xl h-40 basis-1/4 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="  flow-root">
                <p className="text-gray-400 font-semibold text-xl p-4 flex  float-left">
                  Total 9 Users{" "}
                </p>
              </div>
              <p className=" p-3 text-gray-500  font-semibold text-3xl">
                Support
              </p>
              <p className=" text-indigo-500  font-semibold mx-4 ">Edit role</p>
            </div>
          </div>
          {/* Table */}
          <div className="m-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center  mx-4 py-4 bg-white dark:bg-gray-800">
                <div className="mx-4 my-4">
                  <button
                    id="dropdownActionButton"
                    data-dropdown-toggle="dropdownAction"
                    class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span class="sr-only">Action button</span>
                    Action
                    <svg
                      class="w-3 h-3 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {/*  <!-- Dropdown menu --> */}
                  <div
                    id="dropdownAction"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownActionButton"
                    >
                      <li>
                        <a
                          href="/#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Reward
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Promote
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Activate account
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="/#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete User
                      </a>
                    </div>
                  </div>
                </div>
                <label for="table-search" class="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search-users"
                    class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for users"
                  />
                </div>
              </div>
              <table className="w-11/12  text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
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
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                        alt="Jese"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">
                          neil.sims@flowbite.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">React Developer</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/*   <!-- Modal toggle -->*/}
                      <a
                        href="/#"
                        type="button"
                        data-modal-target="editUserModal"
                        data-modal-show="editUserModal"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-2" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="Jese"
                      />
                      <div class="pl-3">
                        <div className="text-base font-semibold">
                          Bonnie Green
                        </div>
                        <div className="font-normal text-gray-500">
                          bonnie@flowbite.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">Designer</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/*   <!-- Modal toggle -->*/}
                      <a
                        href="/#"
                        type="button"
                        data-modal-show="editUserModal"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-2" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Jese"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">Jese Leos</div>
                        <div className="font-normal text-gray-500">
                          jese@flowbite.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">Vue JS Developer</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/* <!-- Modal toggle -->*/}
                      <a
                        href="/#"
                        type="button"
                        data-modal-show="editUserModal"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-2" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Jese"
                      />
                      <div className="pl-3">
                        <div clasName="text-base font-semibold">
                          Thomas Lean
                        </div>
                        <div className="font-normal text-gray-500">
                          thomes@flowbite.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">UI/UX Engineer</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/*   <!-- Modal toggle -->*/}
                      <a
                        href="/#"
                        type="button"
                        data-modal-show="editUserModal"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-3" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        type="image"
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Jese  "
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Leslie Livingston
                        </div>
                        <div className="font-normal text-gray-500">
                          leslie@flowbite.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">SEO Specialist</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                        Offline
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/*   <!-- Modal toggle -->*/}
                      <a
                        href="/#"
                        type="button"
                        data-modal-show="editUserModal"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/*    <!-- Edit user modal -->*/}
              <div
                id="editUserModal"
                tabindex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div class="relative w-full max-w-2xl max-h-full">
                  {/*   <!-- Modal content --> */}
                  <form
                    action="#"
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                  >
                    {/* <!-- Modal header -->*/}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Edit user
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="editUserModal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
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
                      </button>
                    </div>
                    {/*   <!-- Modal body -->*/}
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bonnie"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Green"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="example@company.com"
                            required=""
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="phone-number"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Phone Number
                          </label>
                          <input
                            type="number"
                            name="phone-number"
                            id="phone-number"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="e.g. +(12)3456 789"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="department"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Department
                          </label>
                          <input
                            type="text"
                            name="department"
                            id="department"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Development"
                            required=""
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="company"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Company
                          </label>
                          <input
                            type="number"
                            name="company"
                            id="company"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="123456"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="current-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Current Password
                          </label>
                          <input
                            type="password"
                            name="current-password"
                            id="current-password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="••••••••"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="new-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="••••••••"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    {/*   <!-- Modal body -->*/}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Save all
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Of the Table */}
        </div>
      </div>
    </div>
  );
};

export default Template;

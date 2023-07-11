import React from "react";
import Card from "@mui/material/Card";
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

const OpdRegistration = () => {
  return (
    <div className="p-4 bg-blue-100">
      <div className="grid grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
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
                <AiFillHome className="float-left my-1 mx-2 animate-bounce" />
                <AiOutlineCaretDown className="float-right my-2 mx-24" />
              </p>
            </div>
            <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left ">
                Patient Reg.{" "}
                <MdAppRegistration className="float-left my-1 mx-2 animate-bounce" />
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
        <div className="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl bg-white ">
          <div class="text h-20 w-9/12 rounded-lg bg-blue-200 mx-8 my-4">
            <p class="mx-2 font-serif text-2xl font-bold">OPD Registration</p>
            <p class="mx-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              laboriosam eius nisi Nihil laboriosam eius nisi Nihil laboriosam
              eius nisi ihil laboriosam eius nis ihil laboriosam eius nis ihil
              laboriosam eius nis eius nisi ihil laboriosam eius nis ihil
              laboriosam eius nis ihil laboriosam eius nis ihil laboriosam eius
              nis ihil laboriosam eius nis ihil laboriosam eius nis
            </p>
          </div>
          <Card
            className="h-screen w-9/12 z-0 border m-8 my-2"
            style={{ backgroundColor: "#E9EFFD" }}
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

                <div class="  grid grid-flow-row gap-2 w-1/4   ">
                  <div class="   rounded-lg flex">
                    <p className="text-sm font-serif font-bold text-gray-500">
                      consultant
                    </p>
                    <input type="text" className="mx-2 border " />
                  </div>
                  <div class="   rounded-lg flex">
                    <p className="text-sm font-serif font-bold text-gray-500">
                      Book Fee
                    </p>
                    <input type="text" className="mx-4 border  " />
                  </div>
                  <div class="   rounded-lg flex">
                    <p className="text-sm font-serif font-bold text-gray-500">
                      Discount
                    </p>
                    <input type="text" className="mx-4 border  " />
                  </div>
                  <div class="rounded-lg flex">
                    <p className="text-sm font-serif font-bold text-gray-500">
                      Demand
                    </p>
                    <input type="text" className="mx-5 border  " />
                  </div>
                  <div class="   rounded-lg flex">
                    <p className="text-sm font-serif font-bold text-gray-500">
                      Cash Pmt.
                    </p>
                    <input type="text" className="mx-2 border  " />
                  </div>
                  <div class="   rounded-lg flex">
                    <p className="text-sm font-serif font-bold text-gray-500">
                      Card Pmt.
                    </p>
                    <input type="text" className="mx-2 border  " />
                  </div>
                  <div class="   rounded-lg flex">
                    <p className="text-sm font-serif  font-bold text-gray-500">
                      Due
                    </p>
                    <input type="text" className="mx-12 border  " />
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OpdRegistration;

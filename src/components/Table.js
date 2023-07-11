import React, { useState } from "react";
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
import { TfiWrite } from "react-icons/tfi";

const Table = () => {
  const [, setSearch] = React.useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="p-4 bg-blue-100">
      <div className="grid  grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
        <div class="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
          <div>
            <p className="mx-16 text-white text-lg font-mono my-2">
              Framework Futuristics{" "}
            </p>
          </div>
          <div id="main" class="my-10 flex flex-col  space-y-4">
            <div class="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-blue-700  flow-root ">
              <p class="mx-12 my-2 text-lg font-bold text-white float-left">
                Dashboard <AiFillHome className="float-left my-1 mx-2   " />
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
        <div
          class="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl"
          style={{ backgroundColor: "#F8F7FA" }}
        >
          {/* Heading */}
          <div>
            {" "}
            <p className="text-3xl text-gray-500  font-semibold mx-10 my-2">
              Live Patient List
            </p>
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              asperiores vitae temporibus et officiis, pariatur adipisci
              repellat necessitatibus eos nemo?
            </p>
          </div>
          {/* End Of Heading */}
          {/*Table*/}
          {/* */}
          <div className="p-4 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="  bg-white dark:bg-gray-900 mx-4 my-2 ">
                <label for="table-search" class="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
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
                    id="search"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <table className="w-10/12 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="">
                    <th scope="col" class="p-4">
                      <div className="flex items-center"> id</div>
                    </th>
                    <th
                      scope=""
                      className="px-6 py-3 text-gray-600 underline bg-slate-100 "
                    >
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-slate-100 underline"
                    >
                      consultant
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-slate-100 underline"
                    >
                      UHID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-slate-100 underline"
                    >
                      Bed no.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-slate-100 underline"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-6  00">
                    <td className="w-4 p-4">
                      <div className="flex items-center">1</div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">
                      <button
                        data-modal-target="extralarge-modal"
                        data-modal-toggle="extralarge-modal"
                        class="block my-2 w-full md:w-auto text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        <TfiWrite className="bg-black" />
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">2</div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">
                      <button
                        data-modal-target="extralarge-modal"
                        data-modal-toggle="extralarge-modal"
                        class="block my-2 w-full md:w-auto text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        <TfiWrite className="bg-black" />
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">3</div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4">
                      <button
                        data-modal-target="extralarge-modal"
                        data-modal-toggle="extralarge-modal"
                        class="block my-2 w-full md:w-auto text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        <TfiWrite className="bg-black" />
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div class="flex items-center">4</div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$179</td>
                    <td className="px-6 py-4">
                      <button
                        data-modal-target="extralarge-modal"
                        data-modal-toggle="extralarge-modal"
                        class="block my-2 w-full md:w-auto text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        <TfiWrite className="bg-black" />
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">5</div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      iPad
                    </th>
                    <td className="px-6 py-4">Gold</td>
                    <td className="px-6 py-4">Tablet</td>
                    <td className="px-6 py-4">$699</td>
                    <td className="px-6 py-4">
                      <button
                        data-modal-target="extralarge-modal"
                        data-modal-toggle="extralarge-modal"
                        class="block my-2 w-full md:w-auto text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        <TfiWrite className="bg-black" />
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                      <div className="flex items-center">6</div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple iMac 27"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">PC Desktop</td>
                    <td className="px-6 py-4">$3999</td>
                    <td className="px-6 py-4">
                      <button
                        data-modal-target="extralarge-modal"
                        data-modal-toggle="extralarge-modal"
                        class="block my-2 w-full md:w-auto text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        <TfiWrite className="bg-black" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Modal Toggle */}

            {/* Main Modal */}
            <div
              id="extralarge-modal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative w-full max-w-2xl max-h-full">
                {/*Modal content*/}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700  w-full">
                  {/*Modal header */}
                  <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      IPD
                    </h3>
                  </div>

                  {/* Modal Body */}
                  {/* Tabs Content*/}
                  <div class="p-3  ">
                    <div className="tabs-container">
                      <div className="tabs mx-2">
                        <div
                          className={`tab ${activeTab === 0 ? "active" : ""}`}
                          onClick={() => handleTabClick(0)}
                          style={{ backgroundColor: "#1A56DB", color: "white" }}
                        >
                          IPD Billing
                        </div>
                        <div
                          className={`tab ${activeTab === 1 ? "active" : ""}`}
                          onClick={() => handleTabClick(1)}
                          style={{ backgroundColor: "#1A56DB", color: "white" }}
                        >
                          Ward Procedure
                        </div>
                        <div
                          className={`tab ${activeTab === 2 ? "active" : ""}`}
                          onClick={() => handleTabClick(2)}
                          style={{ backgroundColor: "#1A56DB", color: "white" }}
                        >
                          Doctor Visit
                        </div>
                      </div>
                      <div className="tab-content">
                        {activeTab === 0 && (
                          <div className=" ">
                            <div className="  h-96 ">
                              <p className="  mx-64 font-semibold text-lg underline">
                                IPD Billing
                              </p>
                              <div className="flex  space-x-64 my-2   ">
                                <p className=" mx-4">Rate Card </p>
                                <p className="mx-6">Billing Type </p>
                              </div>

                              <div className="flex space-x-10 ">
                                <select
                                  id="countries"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option selected> Rate</option>
                                  <option value="US">United States</option>
                                  <option value="CA">Canada</option>
                                  <option value="FR">France</option>
                                  <option value="DE">Germany</option>
                                </select>
                                <select
                                  id="countries"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option selected> Billing Type </option>
                                  <option value="US">United States</option>
                                  <option value="CA">Canada</option>
                                  <option value="FR">France</option>
                                  <option value="DE">Germany</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab === 1 && (
                          <div className=" h-96">
                            <p className="  mx-64 font-semibold text-lg underline">
                              WardProcedure
                            </p>
                            <div className="flex  space-x-64 my-2 ">
                              <p className="mx-6 ">Rate Card </p>
                              <p className=" mx-6"> Services </p>
                            </div>
                            <div className="flex space-x-10 ">
                              <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option selected> Rate</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                              <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option selected> Services</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>
                        )}
                        {activeTab === 2 && (
                          <div className=" h-96">
                            <p className="  mx-64 font-semibold text-lg underline">
                              DoctorVisit
                            </p>
                            <div className="flex  space-x-64 my-2 ">
                              <p className="mx-6 ">Rate Card </p>
                              <p className=" mx-6"> Doctors Visit </p>
                            </div>
                            <div className="flex space-x-10 ">
                              <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option selected> Rate</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                              <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option selected> Doctors Visit </option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/*  Modal Footer */}
                </div>
              </div>
            </div>

            {/* Main modal*/}
          </div>
          {/* End of Table*/}
        </div>
      </div>
    </div>
  );
};

export default Table;

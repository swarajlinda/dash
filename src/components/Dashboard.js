import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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
import { TiMediaRecord } from "react-icons/ti";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Dashboard = () => {
  return (
    <div className="p-4 bg-blue-100">
      <div class=" grid  grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
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
                Patient Reg.{" "}
                <MdAppRegistration className="float-left my-1 mx-2   " />
              </p>
            </div>
            <div class="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-indigo-600 flow-root">
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
        <div class="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl bg-white  ">
          <div class="text h-20 w-9/12 rounded-lg bg-blue-200 mx-8 my-4">
            <p class="mx-2 font-serif text-2xl font-bold">Patient Dashboard</p>
            <p class="mx-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              laboriosam eius nisi Nihil laboriosam eius nisi Nihil laboriosam
              eius nisi ihil laboriosam eius nis ihil laboriosam eius nis ihil
              laboriosam eius nis eius nisi ihil laboriosam eius nis ihil
              laboriosam eius nis ihil laboriosam eius nis ihil laboriosam eius
              nis ihil laboriosam eius nis ihil laboriosam eius nis
            </p>
          </div>
          <div class=" flex mx-8 my-4 ">
            <button class="mx-2 my-2 h-8 rounded-lg bg-indigo-600 text-white px-2">
              <p>NewPatient</p>
            </button>
            <button class="mx-2 my-2 h-8 rounded-lg bg-indigo-600 text-white px-2">
              <p>SaveChanges</p>
            </button>
            <button class="my-2 rounded-lg bg-indigo-600 text-white px-2 ">
              <p>SaveChanges</p>
            </button>
            <button class="mx-2 my-2 rounded-lg bg-indigo-600 text-white px-2 ">
              <p>SaveChanges</p>
            </button>
            <button class="my-2 rounded-lg bg-indigo-600 text-white px-2 ">
              <p>SaveChanges</p>
            </button>
          </div>
          <div class="text my-2  mx-8 flex h-12 w-9/12 rounded-lg bg-blue-50">
            <Checkbox {...label} defaultChecked />
            <p class="mx-2 my-2 font-bold text-lg text-gray-500">
              Existing paitent
            </p>
            <input type="text" class="my-1 h-9 rounded-lg " placeholder="Search EMR " />
            <button class="mx-2 my-2 h-7 rounded bg-blue-700 text-white px-2 ">
              <p>SearchEMR</p>
            </button>
          </div>
          <div class="text h-30 my-5 mx-8 w-9/12 rounded-lg bg-blue-200">
            <div class="flex">
              <p class="mx-2 my-2 text-lg font-medium text-gray-600">
                patient Name
              </p>
              <input type="text" value="" class="my-2 w-1/5 h-9 rounded-lg " />
              <p class="mx-4 my-2 text-lg font-medium text-gray-600">Gender</p>
              <input type="text" class="my-2 w-1/4 h-9 rounded-lg " />
              <p class="mx-2 my-2 text-lg font-medium text-gray-600">
                Hospital ID
              </p>
              <input type="text" class="my-2 w-1/4 h-9 rounded-lg  " />
            </div>
            <div class="flex">
              <p class="mx-2 my-3 text-lg font-medium text-gray-600">
                Father Name
              </p>
              <input type="text" class="mx-2 my-2 w-1/4 h-9 rounded-lg" />
              <p class="mx-2 my-3 text-lg font-medium text-gray-600">
                Date Of Birth
              </p>
              <input type="text" class="my-2 w-1/4  h-9 rounded-lg" />
            </div>
          </div>
          <div class="my-2 mx-6 w-9/12 ">
            <p class="text-grey mx-2 my-4 text-xl font-medium text-gray-600">
              Visit History
            </p>
            <Card
              className=" h-full   "
              style={{
                backgroundColor: " #ffff",
              }}
            >
              <div className="flex flex-col overflow-x-auto ">
                <div className="sm:-mx-6 lg:-mx-6">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 ">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-2 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              MR NO
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Patient Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Reg. No
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              DOB
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Phone No
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Father
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Address
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200"
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              City
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-4 bg-blue-200   "
                              style={{ backgroundColor: "#E9EFFD" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium ">
                              <TiMediaRecord className="bg-green-500" />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 hover:focus: ">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <div>
                                <BsThreeDotsVertical />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium ">
                              2
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                          <tr class="border-b">
                            <td class="whitespace-nowrap px-6 py-4 font-medium ">
                              3
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                          <tr className="border-b ">
                            <td class="whitespace-nowrap px-6 py-4 font-medium ">
                              4
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                          <tr className="border-b ">
                            <td class="whitespace-nowrap px-6 py-4 font-medium ">
                              5
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>

                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                          <tr className="border-b ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium ">
                              6
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                          <tr className="border-b ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium ">
                              7
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                          <tr className="border-b ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium ">
                              8
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Cell
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <BsThreeDotsVertical />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

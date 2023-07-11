import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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

import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const PatientRegistration = () => {
  const [data, setData] = useState([]);

  /* GET api implement */
  const url = "http://localhost:3000/users";
  useEffect(() => {
    fetch(url, {
      headers: {
        companyId: "3434354346566",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("testdata", json);
        setData(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  /*POST api impement*/

  return (
    <div>
      <div className="p-4 bg-blue-100">
        <div className=" grid  grid-cols-12  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
          <div className="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
            <div>
              <p className="mx-16 text-white text-lg font-mono my-2">
                Framework Futuristics{" "}
              </p>
            </div>
            <div id="main" class="my-20 flex flex-col  space-y-4">
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
          <div className="col-span-8 col-end-11 row-span-full ml-1 h-screen w-screen rounded-tl-3xl bg-white  ">
            <div className="text h-20 w-9/12 rounded-lg bg-blue-200 mx-8 my-4">
              <p class="mx-2 font-serif text-2xl font-bold">
                Patient Dashboard
              </p>
              <p class="mx-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laboriosam eius nisi Nihil laboriosam eius nisi Nihil laboriosam
                eius nisi ihil laboriosam eius nis ihil laboriosam eius nis ihil
                laboriosam eius nis eius nisi ihil laboriosam eius nis ihil
                laboriosam eius nis ihil laboriosam eius nis ihil laboriosam
                eius nis ihil laboriosam eius nis ihil laboriosam eius nis
              </p>
            </div>
            <div className=" flex mx-8 my-4 ">
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
          </div>
            <div className="text my-2  mx-8 flex h-12 w-9/12 rounded-lg bg-blue-50">
              <Checkbox {...label} defaultChecked />
              <p class="mx-2 my-2 font-bold text-lg text-gray-500">
                Existing paitent
              </p>
              <input type="text" class="my-2 h-7" placeholder="Search EMR " />
              <button class="mx-2 my-2 h-7 rounded bg-blue-700 text-white px-2 ">
                <p>SearchEMR</p>
              </button>
            </div>
            <div className="text h-35 my-5 mx-8 w-9/12 rounded-lg bg-blue-200">
              <div className="flex">
                <p className="mx-2 my-2 text-lg font-medium text-gray-600 ">
                  patient Name
                </p>
                <input
                  type="text"
                  name="patientname"
                  value=""
                  className="my-2 w-1/4  h-8 rounded-lg"
                />
                <p className="mx-4 my-2 text-lg font-medium text-gray-600">
                  Gender
                </p>
                <input type="text" name="hospitalif" class="my-2 w-1/5 rounded-lg h-8" />
                <p className="mx-2 my-2 text-lg font-medium text-gray-600">
                  Hospital ID
                </p>
                <input type="text" class="my-2 w-1/4 rounded-lg h-8" />
              </div>
              <div className="flex">
                <p className="mx-2 my-2 text-lg font-medium text-gray-600">
                  Father Name
                </p>
                <input type="text" name="fathername" class="mx-2 my-2 w-1/4 rounded-lg h-8 " />
                <p className="mx-2 my-2 text-lg font-medium text-gray-600">
                  Date Of Birth
                </p>
                <input type="text" name="dob" class="my-2 w-1/4 rounded-lg h-8" />
              </div>
            </div>
            <div className="my-2 mx-6 w-9/12 ">
              <p className="text-grey mx-2 my-4 text-xl font-medium text-gray-600">
                Visit History
              </p>
              <Card
                className=" h-screen"
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
                                Id
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
                          {data.map((item) => {
                            return (
                              <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium ">
                                    {item.id}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 hover:focus: ">
                                    {item.patientname}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.status}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.regno}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.dob}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.phoneno}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.fathername}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.address}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {item.city}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    <div>
                                      <BsThreeDotsVertical />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
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
    </div>
  );
};

export default PatientRegistration;

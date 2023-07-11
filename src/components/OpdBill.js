import React ,{useState}  from 'react'
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
import { RiUserSearchFill } from "react-icons/ri";
 
const OpdBill = () => {
  const [data,setData] = useState ([])
  const [card, setCard] = useState('');
  const [type, setType] = useState('');
  const [bill, setBill] = useState('');
  const [consultant, setConsultant ] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [unit, setUnit] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    const newData = [...data, { card, type , bill , consultant , quantity , rate , unit , amount }];
    setData(newData);
    setCard('');
    setType('');
    setBill('');
    setConsultant('');
    setQuantity('');
    setRate('');
    setUnit('');
    setAmount('');
  };

  return (
      <div className='p-4  '>
      <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
      <div className="col-span-4 col-start-1 row-span-full h-full" style={{backgroundColor:"#233876"}}>
      <div>
        <p className="mx-12  text-white  text-xl font-mono my-2">
          Framework Futuristics{" "}
        </p>
      </div>
      <div id="main" class=" my-10 flex flex-col  space-y-4">
        <div className="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-yellow-400 flow-root ">
          <p className="mx-12 my-2 text-lg font-bold text-white float-left">
            Dashboard <AiFillHome className="float-left my-1 mx-2" />
            <AiOutlineCaretDown className="float-right my-2 mx-24" />
          </p>
        </div>
        <div className="w-30 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-yellow-400   flow-root ">
          <p className="mx-12 my-2 text-lg font-bold text-white float-left">
            Patient Reg.{" "}
            <MdAppRegistration className="float-left my-1 mx-2" />
          </p>
        </div>
        <div className="w-30  hover:bg-blue-70 mx-2 h-12 rounded-2xl border-blue-300 hover:bg-yellow-400  flow-root">
          <p className="mx-12 my-2 text-lg font-bold text-white float-left ">
            Organise <CgOrganisation className="float-left my-1 mx-2" />{" "}
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2 flow-root rounded-2xl">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            Pharmacy <MdLocalPharmacy className="float-left my-1 mx-2" />{" "}
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2  rounded-2xl flow-root ">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            Reception <BsReception4 className="float-left my-1 mx-2" />{" "}
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2  rounded-2xl flow-root">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            OPD <AiFillLayout className="float-left my-1 mx-2" />{" "}
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400 mx-2  rounded-2xl">
          <p className="mx-12 my-2 text-lg font-bold text-white ">
            IPD <RiVipDiamondFill className="float-left my-1 mx-2" />
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2 rounded-2xl flow-root ">
          <p className="mx-12 my-2 text-lg font-bold text-white ">
            Billing <MdPayments className="float-left my-1 mx-2" />
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2 rounded-2xl flow-root ">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            Investigations{" "}
            <MdOutlineStorage className="float-left my-1 mx-2" />
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2  rounded-2xl flow-root ">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            OT <AiOutlineAppstoreAdd className="float-left my-1 mx-2" />{" "}
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2  rounded-2xl flow-root">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            Inventory{" "}
            <MdOutlineInventory className="float-left my-1 mx-2" />
          </p>
        </div>
        <div className="w-30 h-12 border-blue-300 hover:bg-yellow-400  mx-2  rounded-2xl flow-root">
          <p className="mx-12 my-2 text-lg font-bold text-white">
            TPA <SiJetpackcompose className="float-left my-1 mx-2" />
          </p>
        </div>
      </div>
        </div>  
        <div className="col-span-8 col-end-11 row-span-full ml-1 w-screen rounded-tl-3xl bg-white"
          style={{ backgroundColor: "#F8F7FA" }}>
          <p className="mx-12 my-2 font-serif text-2xl  font-extrabold text-blue-900 underline" >
          OPD BILLING 
          </p>
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
              <RiUserSearchFill className=" mx-2 my-1  " />{" "}
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
            <div class="relative  h-1/2 w-2/3 max-w-full max-h-full my-2">
              {/*    <!-- Modal content --> */}
              <div class="relative bg-blue-400 rounded-lg shadow dark:bg-gray-700">
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
                <div class="px-6 py-6 lg:px-8">
                      <h3 class="mb-8 text-2xl text-center font-bold text-indigo-900 dark:text-white">
                        BILLING ELEMENT
                      </h3>
                      <form class="space-y-2" action="#">
                        <div className="ml-16">
                          <div className="grid grid-cols-3">
                            <label
                              for="small"
                              class="block  text-sm font-bold mx-2  text-indigo-700 dark:text-white"
                            >
                              Rate Card
                            </label>
                            <label
                              for="small"
                              class="block  text-sm font-bold mx-4 text-indigo-700 dark:text-white "
                            >
                              Type
                            </label>
                            <label
                            for="small"
                            class="block  text-sm font-bold  mx-4 text-indigo-700 dark:text-white "
                          >
                            Type
                          </label>
                          </div>
                          <div className=" grid grid-cols-3">
                            <select
                              id="small"
                              class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option selected>Choose Rate Card</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                              id="small"
                              class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option selected>Choose Type </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                            id="small"
                            class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option selected>Choose Type </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          </div>
                        </div>
                        <div className="ml-16">
                        <div>
                          <div className="grid grid-cols-3">
                            <label
                              for="small"
                              class="block text-sm  font-bold  text-indigo-700 dark:text-white"
                            >
                              Qty
                            </label>
                            <label
                              for="small"
                              class="block mx-4 text-sm  font-bold  text-indigo-700 dark:text-white "
                            >
                              Rate
                            </label>
                          </div>
                          <div className="grid grid-cols-3">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block p-2.5 w-3/4  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Quantity"
                              required
                            />
                            <input
                              type="text"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300 mx-4 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block p-2.5 w-3/4  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Quantity"
                              required
                              />
                              <input
                              type="text"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300 mx-4 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block p-2.5 dark:bg-gray-600 w-3/4  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Quantity"
                              required
                            />
                          </div>
                          </div>
                          </div>
                        <button
                          type="submit"
                          class="w-1/6 text-white   items-end ml-16  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                          "
                          style={{ backgroundColor: "#675CD8", color: "white" }}
                        >
                          Add Items
                        </button>
                      </form>
                    </div>
            
             
              </div>
            </div>
          </div>
          </div>
          <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-2 w-3/4 ">
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
          
          <div className="flex mx-16">
          <label
            for="countries"
            class="block  text-sm font-medium text-gray-900 dark:text-white mx-6 "
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
      <div className="flex space-x-2 mx-12">
            <select
              value={card}
              onChange={(e) => setCard(e.target.value)}
            
            class="bg-gray-50 h-9 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-900 focus:border-blue-900 block  w-1/12   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected> DEFAULT</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            id="countries"
            class="bg-gray-50 h-9 border border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-900 focus:border-blue-900 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
            <select
              value={bill}
              onChange={(e) =>setBill(e.target.value)}
            id="countries"
            class="bg-gray-50 border h-9  border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-900 focus:border-blue-900 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              value={consultant}
              onChange={(e) =>setConsultant(e.target.value)}
            id="countries"
            class="bg-gray-50 border h-9  border-gray-500 rounded-md text-gray-900 text-sm   focus:ring-blue-900 focus:border-blue-900 block  w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <p className="my-2 text-gray-900 text-sm font-medium">
          Qty
        </p>
            <input type="text"  value={quantity}   onChange={(e) =>setQuantity(e.target.value)} className='w-20 h-9 rounded-lg focus:ring-blue-900 focus:border-blue-900 ' />
            <p className="my-2 text-gray-900 text-sm font-medium">
            Rate
          </p>
            <input type="text"  value={rate} onChange={(e) =>setRate(e.target.value)} className='w-20 h-9 rounded-lg' />
            <p className="my-2 text-gray-900 text-sm font-medium">
            Unit
          </p>
            <input type="text" value={unit}  onChange={(e) =>setUnit(e.target.value)} className='w-20 h-9 rounded-lg' />
            <p className="my-2 text-gray-900 text-sm font-medium">
            Amount
          </p>
            <input type="text"  value={amount} onChange={(e) =>setAmount(e.target.value)} className='w-20 h-9 rounded-lg' />
            <button type="button" onClick={handleAdd} class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
        
      </div>
      <div class="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 my-4 w-3/4 ">
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
                 RateCard 
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                   BIllingItems  
                </th>
                <th scope="col" class="px-6 py-3">
                   Consultant  
                </th>
                <th scope="col" class="px-6 py-3">
                   Quantity 
                </th>
                <th scope="col" class="px-6 py-3">
                    Rate
                </th>
                <th scope="col" class="px-6 py-3">
                  Unit 
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
              
           
              </tr>
            </thead>
              <tbody>
                {data.map((item, index) => (
              <tr  key={index}   class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                    <td className='font-bold'> {item.card}</td>
                    <td >{item.type}</td>
                    <td> {item.bill}</td>
                    <td> {item.consultant}</td>
                    <td> {item.quantity}</td>
                    <td> {item.rate}</td>
                    <td> {item.unit}</td>
                    <td> {item.amount}</td>
                     
              </tr>
              ))}
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
               </tr>
              
            </tbody>
          </table>
      </div> 
      {/*    <!-- Modal toggle --> */}
        <button
                data-modal-target="authentication-modal1"
                data-modal-toggle="authentication-modal1"
                class="block text-white bg-blue-700 mx-12 my-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                style={{ backgroundColor:  "#233876", color: "white" }}
              >
                Billing Element
          </button>    
     {/*   <!-- Main modal --> */}
         <div
                id="authentication-modal1"
                tabindex="-1"
                aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div class="relative w-3/5 max-w-full max-h-full">
                  {/*   <!-- Modal content --> */}
                  <div class="relative bg-indigo-300 rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="authentication-modal1"
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
                    <div class="px-6 py-6 lg:px-8">
                      <h3 class="mb-8 text-2xl text-center font-bold text-indigo-700 dark:text-white">
                        BILLING ELEMENT
                      </h3>
                      <form class="space-y-2" action="#">
                        <div className="ml-16">
                          <div className="grid grid-cols-3">
                            <label
                              for="small"
                              class="block  text-sm font-bold mx-2  text-indigo-700 dark:text-white"
                            >
                              Rate Card
                            </label>
                            <label
                              for="small"
                              class="block  text-sm font-bold mx-4 text-indigo-700 dark:text-white "
                            >
                              Type
                            </label>
                            <label
                            for="small"
                            class="block  text-sm font-bold  mx-4 text-indigo-700 dark:text-white "
                          >
                            Type
                          </label>
                          </div>
                          <div className=" grid grid-cols-3">
                            <select
                              id="small"
                              class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option selected>Choose Rate Card</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                              id="small"
                              class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option selected>Choose Type </option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                            id="small"
                            class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option selected>Choose Type </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          </div>
                        </div>
                        <div className="ml-16">
                        <div className="grid grid-cols-3">
                          <label
                            for="small"
                            class="block  text-sm font-bold mx-2  text-indigo-700 dark:text-white"
                          >
                            Rate Card
                          </label>
                          <label
                            for="small"
                            class="block  text-sm font-bold mx-4 text-indigo-700 dark:text-white "
                          >
                            Type
                          </label>
                          <label
                          for="small"
                          class="block  text-sm font-bold  mx-4 text-indigo-700 dark:text-white "
                        >
                          Type
                        </label>
                        </div>
                        <div className=" grid grid-cols-3">
                          <select
                            id="small"
                            class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option selected>Choose Rate Card</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select
                            id="small"
                            class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option selected>Choose Type </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select
                          id="small"
                          class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        >
                          <option selected>Choose Type </option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                        </div>
                      </div>
                        <div className="ml-16">
                          <div className="grid grid-cols-3">
                            <label
                              for="small"
                              class="block text-sm mx-2 font-bold  text-indigo-700 dark:text-white"
                            >
                              Consultant Date
                            </label>
                            <label
                              for="small"
                              class="block mx-4 text-sm  font-bold  text-indigo-700 dark:text-white "
                            >
                              Unit
                            </label>
                          </div>
                          <div className="grid grid-cols-3">
                            <input
                              type="date"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Search patient "
                              required
                            />
                            <select
                              id="small"
                              class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option selected>Choose unit</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <select
                            id="small"
                            class="bg-gray-50 border border-gray-300 mx-3 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block w-3/4  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option selected>Choose unit</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          </div>
                        </div>
                        <div className="ml-16">
                        <div>
                          <div className="grid grid-cols-3">
                            <label
                              for="small"
                              class="block text-sm  font-bold  text-indigo-700 dark:text-white"
                            >
                              Qty
                            </label>
                            <label
                              for="small"
                              class="block mx-4 text-sm  font-bold  text-indigo-700 dark:text-white "
                            >
                              Rate
                            </label>
                          </div>
                          <div className="grid grid-cols-3">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block p-2.5 w-3/4  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Quantity"
                              required
                            />
                            <input
                              type="text"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300 mx-4 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block p-2.5 w-3/4  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Quantity"
                              required
                              />
                              <input
                              type="text"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300 mx-4 text-gray-900 text-sm rounded-lg focus:ring-indigo-700 focus:border-indigo-700 block p-2.5 dark:bg-gray-600 w-3/4  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Quantity"
                              required
                            />
                          </div>
                          </div>
                          </div>
                        <button
                          type="submit"
                          class="w-1/6 text-white   items-end ml-16  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                          "
                          style={{ backgroundColor: "#675CD8", color: "white" }}
                        >
                          Add Items
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
         </div>     
      </div>
      </div>
      </div>
  )
}

export default OpdBill
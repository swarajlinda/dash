import React from 'react'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
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
 
const Pathalogy = () => {
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };
  const formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];
  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };
  return (
    <div className='p-4 bg-blue-100'>
    <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
    <div className="col-span-4 col-start-1 row-span-full bg-blue-900 h-full">
    <div>
      <p className="mx-12  text-white  text-xl font-mono my-2">
        Framework Futuristics{" "}
      </p>
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
      </div>
      <div className='col-span-8 col-end-11 row-span-full ml-1 w-screen rounded-tl-3xl bg-white'>
      <p class="mx-12 my-2 font-serif text-3xl font-bold text-indigo-500 underline ">
  PATHALOGY
          </p>
          <div className="text h-39 my-3 mx-12 w-9/12 rounded-lg bg-indigo-300 shadow-2xl">
          <div className="flex   space-y-2">
            <p className="mx-6 my-2 text-lg font-medium text-gray-600">
              patient Name
            </p>
            <input
              type="text"
              name="patientname"
              value=""
              className="my-2 h-9  w-1/5 rounded-lg"
            />
            <p className="mx-6 my-2 text-lg font-medium text-gray-600">
           Hospital ID
            </p>
            <input
              type="text"
              name="hospitalif"
              class="my-2 h-9  w-1/5 rounded-lg"
            />
            <p className="mx-6 my-2 text-lg font-medium text-gray-600">
              Patient Type 
            </p>
            <input type="text" class="my-2 h-9  w-1/5 rounded-lg" />
          </div>
          <div className="flex">
            <p className="mx-6 my-2 text-lg font-medium text-gray-600">
              Doctor Name 
            </p>
            <input
              type="text"
              name="fathername"
              class="mx-2 my-2 w-1/5 rounded-lg h-9 "
            />
         
          </div>
          </div>
          <div className="text h-3/4 my-8 mx-12 w-9/12 rounded-lg  bg-white shadow-2xl">
          <div style={{ display: "grid", justifyContent: "start"}} className='mx-2 my-2 '>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="write your content ...."
              onChange={handleProcedureContentChange}
                style={{ height: "220px" }}
                  >
            </ReactQuill>
          </div>
          </div>
      </div>
      </div>
      </div>
  )
}

export default Pathalogy

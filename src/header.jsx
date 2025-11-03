{
  /* assets */
}
import mlogo from "./assets/mlogo.jpg";
import person2 from "./assets/person2.jpeg";

{
  /*react icons */
}
import { IoFolderSharp } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoMdContact } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

{
  /*material ui*/
}

import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-gray-200 flex justify-between items-center py-3 px-4 w-auto">
      {/*m logo and company name*/}
      <div className="flex items-center max-lg:hidden">
        <img src={mlogo} alt="" className="w-8 bg-trasperant" />
        <p className="font-medium text-[22px] ml-2">minecloud</p>
      </div>

      {/*sm,md,lg view comapany name nad logo*/}
      <div className="flex items-center lg:hidden">
        <img src={mlogo} alt="" className="w-5 bg-trasperant" />
        <p className="font-medium text-[15px] ml-1">minecloud</p>
      </div>

      {/*header button components */}
      <div className="flex gap-2 max-lg:hidden ">
        <button className="bg-gray-200 hover:bg-white w-auto py-1 px-4 flex items-center font-medium rounded-lg hover:text-blue-700 hover:scale-110 transition-all delay-100 duration-105">
          <IoFolderSharp className="size-5 m-1 " /> Files
        </button>
        <button className="bg-gray-200 hover:bg-white w-auto  py-1 px-4 flex items-center font-medium rounded-lg hover:text-blue-700 hover:scale-110 transition-all delay-100 duration-105">
          <FiActivity className="size-5 m-1 " /> Activity
        </button>
        <button className="bg-gray-200 hover:bg-white w-auto py-1 px-4 flex items-center font-medium rounded-lg hover:text-blue-700 hover:scale-110 transition-all delay-100 duration-105">
          <SlCalender className="size-5 m-1 " /> Calender
        </button>
        <button className="bg-gray-200 hover:bg-white w-auto py-1 px-4 flex items-center font-medium rounded-lg hover:text-blue-700 hover:scale-110 transition-all delay-100 duration-105">
          <IoMdContact className="size-5 m-1 " /> Contact
        </button>
      </div>

      {/*header Search bar and static menu component */}

      <div className="flex items-center max-lg:hidden">
        <div className="flex items-center mr-10">
          <IoIosSearch className="rounded-l-lg m-1 box-border w-7 h-7 -mr-0 p-1 bg-white " />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-white h-7 border-l-0 outline-0 rounded-r-lg "
          />
        </div>
        <IoIosNotifications className="size-6 mr-4" />
        <img src={person2} alt="" className="rounded-[100%] w-10" />
      </div>

      {/*sm,md,lg view header menu companent */}

      <div className="flex lg:hidden">
        <div className="flex items-center pr-8">
          <IoIosSearch className="rounded-l-lg m-1 box-border w-7 h-7 -mr-0 p-1 bg-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-white h-7 border-l-0 outline-0 rounded-r-lg w-12 text-[10px]"
          />
          <IoIosNotifications className="size-6 -mr-5 ml-4" />
        </div>

        <div className="lg:hidden">
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <img src={person2} alt="" className="rounded-[100%] w-10" />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <IoFolderSharp className="size-5 m-1 " /> Files
              </MenuItem>
              <MenuItem>
                <FiActivity className="size-5 m-1 " /> Activity
              </MenuItem>
              <MenuItem>
                <SlCalender className="size-5 m-1 " /> Calender
              </MenuItem>
              <MenuItem>
                <IoMdContact className="size-5 m-1 " /> Contact
              </MenuItem>
            </Menu>
          </React.Fragment>
        </div>
      </div>
    </header>
  );
}

export default Header;

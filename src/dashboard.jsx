import bluefolder from "./assets/bluefolder.png";
import readme from "./assets/readme.png";
import txt from "./assets/txt.png";
import html from "./assets/html.png";
{
  /* react icons */
}
import { IoCloseSharp } from "react-icons/io5";
import {
  MdCircle,
  MdDelete,
  MdFavorite,
  MdKeyboardArrowRight,
  MdOutlineSettings,
  MdStorage,
} from "react-icons/md";
import { BsList, BsTag } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoIosFolder, IoMdShare } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpeg";
import person3 from "./assets/person3.webp";
import person4 from "./assets/person4.jpg";
import person5 from "./assets/person5.avif";
import person6 from "./assets/person6.avif";

{
  /* material ui */
}
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

{
  /* react icons */
}
import { PiSquaresFourLight } from "react-icons/pi";







function Dashboard() {
  {
    /* Qick Access datas */
  }

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const IconsContainer = (value) => {
    switch (value) {
      case "Recent":
        return <FaClockRotateLeft />;

      case "Favorite":
        return <FaRegHeart />;

      case "Shared":
        return <IoMdShare />;

      case "Tags":
        return <BsTag />;

      default:
        break;
    }
  };

  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex flex-col justify-between h-[100vh] ">
        <div className="flex flex-col items-start m-3">
          <button className="font-medium mt-8  p-2 rounded-lg w-full mx-1 text-left hover:bg-blue-200 flex items-center ">
            <IoIosFolder className="mr-3 text-xl" />
            All files
            <FaChevronDown className="text-lg ml-24" />
          </button>
          {["Recent", "Favorite", "Shared", "Tags"].map((items) => {
            return (
              <button className="font-medium mt-4  p-2 mx-1 rounded-lg w-full text-left hover:bg-blue-200 flex items-center">
                <span className="mr-3 text-xl">{IconsContainer(items)}</span>
                {items}
              </button>
            );
          })}
        </div>

        <div className="">
          <button className="font-medium mt-4 p-1 rounded-lg w-55 m-4  text-left hover:bg-blue-200 flex items-center text-lg ">
            <MdOutlineSettings className="mr-2" />
            Settings
          </button>

          <button className="font-medium mt-4  p-1 rounded-lg w-55 m-4  text-left hover:bg-blue-200 flex items-center text-lg ">
            <MdDelete className="mr-2" />
            Deleted Files
          </button>

          <div className="   w-auto m-4 p-3 rounded-xl border border-gray-300">
            <div className=" flex items-center text-lg justify-between">
              <span className="flex items-center">
                <MdStorage className="mr-2" />
                Storage{" "}
              </span>
              <MdKeyboardArrowRight />
            </div>
            <div className="w-[100%] rounded-xl  bg-gray-300 h-2  mt-3  ">
              <div className="h-2 w-[10%] bg-blue-700 rounded-2xl "></div>
            </div>

            <div className="mt-2">
              <p>42 GB used from 255 GB</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );

  const foldertypeImages = (type) => {
    switch (type) {
      case "fol":
        return <img src={bluefolder} alt="folder" className="w-5 mr-2" />;

      case "txt":
        return <img src={txt} alt="folder" className="w-5 mr-2" />;

      case "html":
        return <img src={html} alt="folder" className="w-5 mr-2" />;

      case "md":
        return <img src={readme} alt="folder" className="w-5 mr-2" />;

      default:
        break;
    }
  };

  const quickAccessContent = [
    {
      name: "Studio Work",
      storage: "2.3 GB",
      itemsCount: 23,
    },
    {
      name: "Source",
      storage: "1.2 MB",
      itemsCount: 1,
    },
    {
      name: "Brand Assets",
      storage: "241 MB",
      itemsCount: 8,
    },
    {
      name: "Docs",
      storage: "4.3 MB",
      itemsCount: 4,
    },
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  {
    /* create row function */
  }
  function createColumn(name, sharing, size, modified, foldertype) {
    return { name, sharing, size, modified, foldertype };
  }
  {
    /*rows datas*/
  }
  const rows = [
    createColumn("Docs", "Public", "12.3 MB", "Today", "fol"),
    createColumn("Fonts", "Public", "122.3 MB", "Yesterday", "fol"),
    createColumn("Source", "Public", "32.3 MB", "Apr 1 ,2023", "fol"),
    createColumn("Example", "Admins", "34.3 MB", "Mar 28 ,2023", "fol"),
    createColumn("OFL.txt", "Admins", "56.3 KB", "Mar 21 ,2023", "txt"),
    createColumn("Readme.md", "Public", "76.3 KB", "Mar 19 ,2023", "md"),
    createColumn("index.html", "Public", "11.3 KB", "Mar 18 ,2023", "html"),
  ];

  const createActivity = (day,personIdList,comment,personName) => {
    return {day,personIdList,comment,personName};
  }

  const activityData = [
    createActivity("Yesterday",["person2","person1"],"You shared edit to access","Miko"),
    createActivity("Yesterday",["person2","person3"],"You shared edit to access","Reena"),
    createActivity("Apr 21,2022",["person2","person4"],"You changed to view access to","Ashley"),
    createActivity("Apr 20,2022",["person2","person5"],"You shared edit to access","Miko"),
    createActivity("Feb 20,2022",["person2","person6"],"You change edit to view access to ","Nolan"),
    
  ]

  {
    /*admins*/
  }
  const Admins = () => {
    return (
      <AvatarGroup max={3}>
        <Avatar
          alt="Cindy Baker"
          sx={{ width: 30, height: 30 }}
          src={person3}
        />
        <Avatar
          alt="Agnes Walker"
          sx={{ width: 30, height: 30 }}
          src={person4}
        />
        <Avatar
          alt="Trevor Henderson"
          sx={{ width: 30, height: 30 }}
          src={person6}
        />
      </AvatarGroup>
    );
  };

  return (
    <div className="w-auto h-auto p-9 pt-2 lg:flex lg:flex-row lg:justify-start items-center bg-gray-200">
      {/*App drawer */}

      <section>
        <div className="min-w-[10vw] border border-gray-200 h-screen bg-white max-lg:hidden mr-4 -mt-6 -ml-4 rounded-2xl ">
          {DrawerList}
        </div>

        <div>
          <div>
            <Button onClick={toggleDrawer(true)}>
              <BsList className="text-black text-2xl lg:hidden -ml-12 mb-2" />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        </div>
      </section>

      <section className="w-full">
        {/* Quick access */}
        <div className="bg-white w-auto h-auto rounded-xl">
          {/*quick access header*/}
          <div className="flex justify-between px-6 pt-4 pb-4">
            <h1 className="text-xl">Quick Access</h1>
            <p className="text-2xl">...</p>
          </div>

          {/*Quick access items container*/}
          <div className="flex max-md:gap-3 md:gap-3 pb-7 pl-6 max-md:flex-wrap">
            {quickAccessContent.map((items) => {
              return (
                <div className=" flex flex-col justify-center items-start lg:size-32 bg-white border-gray-400 border rounded-lg pl-3 gap-y-0 max-md:scale-90 max-lg:p-3 hover:scale-110 transition-all delay-100 duration-100 ">
                  <img src={bluefolder} alt="folder" className="w-10 mr-2" />
                  <p className="font-medium">{items.name}</p>
                  <div className="flex text-gray-600">
                    <p>{items.storage}</p>
                    <div className="flex items-center ">
                      <MdCircle className="size-1 mx-1" />
                      {items.itemsCount == 1 || items.itemsCount == 0 ? (
                        <p> {`${items.itemsCount} item`}</p>
                      ) : (
                        <p> {`${items.itemsCount} item`}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Menu container */}
        <div className="bg-white w-auto rounded-xl mt-3 pb-2 ">
          {/* Breadcrumb container*/}
          <div className=" p-4 flex items-center justify-between">
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Concept Font
                </Link>
                <Typography sx={{ color: "text.primary" }}>Maszeh</Typography>
              </Breadcrumbs>
            </div>

            {/* four square and add new button*/}
            <div className="flex items-center">
              <PiSquaresFourLight className="size-6 mr-3" />
              <button className="bg-blue-600 p-2 rounded-xl text-white font-bold">
                + Add New
              </button>
            </div>
          </div>

          {/* items column container */}
          <div className="p-2">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Sharing</TableCell>
                    <TableCell align="right">Size</TableCell>
                    <TableCell align="right">Modified</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="hover:bg-blue-100"
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex! items-center"
                      >
                        {foldertypeImages(row.foldertype)}
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {row.sharing === "Admins" ? Admins() : row.sharing}
                      </TableCell>
                      <TableCell align="right">{row.size}</TableCell>
                      <TableCell align="right">{row.modified}</TableCell>
                      <TableCell align="right" className="text-7xl">
                        ...
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>

      <aside className="w-[30vw] bg-white h-[100vh] max-lg:w-auto max-lg:mt-5 max-lg:p-8 -mt-12 rounded-xl lg:ml-3 p-3">
        <div className="">
          <div className="flex justify-between items-center ">
            <img src={bluefolder} alt="" className="w-12" />
            <IoCloseSharp className="text-[25px]" />
          </div>
          <h1 className="text-2xl font-medium">Source</h1>
          <div className="flex items-center text-gray-400 font-medium">
            <p>1.2 MB </p>
            <MdCircle className="text-[5px] mx-1" />
            <p>Yesterday </p>
            <MdCircle className="text-[5px] mx-1" />
            <p>1 item</p>
          </div>
          <hr className="mt-2 text-gray-300 mb-2" />
          <div className="flex justify-between items-center font-medium">
            <p className="text-gray-400">Tags</p>
            <p className="text-blue-700">Edit</p>
          </div>
          <div className="mt-2">
            <button className="bg-blue-200 text-blue-800 font-medium p-1 rounded-lg px-2 ">
              Work
            </button>
            <button className="bg-blue-200 text-blue-800 font-medium p-1 rounded-lg px-2 mx-2">
              Source
            </button>
            <button className="bg-blue-200 text-blue-800 font-medium p-1 rounded-lg px-2 ">
              Font
            </button>
          </div>
          <div className="flex justify-between items-center mt-3 font-medium">
            <p className="text-gray-500">Sharing</p>
            <p className="text-blue-700">Manage</p>
          </div>
          <div className="flex mt-2">
            <AvatarGroup total={9}>
              <Avatar alt="Remy Sharp" src={person1} />
              <Avatar alt="Remy Sharp" src={person3} />
              <Avatar alt="Remy Sharp" src={person4} />
              <Avatar alt="Remy Sharp" src={person5} />
            </AvatarGroup>
          </div>
          <div>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Activity" sx={{ fontSize: 12 }} />
                <Tab value="two" label="Comments" sx={{ fontSize: 12 }} />
                <Tab value="three" label="Versions" sx={{ fontSize: 12 }} />
              </Tabs>
            </Box>
          </div>
          <div className="h-[50vh] overflow-scroll ">
            <div className="max-lg:-ml-130 ">
              <Timeline sx={{marginTop: 2,display:"flex",alignItems:"center"}}>
                {activityData.map(items=>{
                  return (
                    <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: "blue" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <TimelineContent>
                      <Typography sx={{ marginTop: -1, marginLeft: -2 }}>
                        {items.day}
                      </Typography>
                      <Typography
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <AvatarGroup
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            mr: 1,
                            ml: -3,
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src={person2}
                            sx={{ width: 30, height: 30 }}
                          />
                          <Avatar
                            alt="Remy Sharp"
                            src={person3}
                            sx={{ width: 30, height: 30 }}
                          />
                        </AvatarGroup>
                        <Typography sx={{ fontSize: 14 ,width:100}}>
                          {items.comment}
                        </Typography>
                      </Typography>
                      <Typography sx={{ marginLeft: -2, color: "blue" }}>
                        {items.personName}
                      </Typography>
                    </TimelineContent>
                  </TimelineContent>
                </TimelineItem>
                  )
                })}
                
              </Timeline>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Dashboard;

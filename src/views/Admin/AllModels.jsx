import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {GET_ALL_ACTORS} from 'queries'
import {apolloClient} from 'index'
 import Loader from 'components/UI/Loader'
 import {getUrlFT} from 'helpers'
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Actor", "Username","Videos","Meta","Stripchat"];
 
function AllModels() {

  const [allModels,setAllModels] = useState([])
  const [isLoading,setLoading] = useState(false)

  useEffect(() => {
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_ALL_ACTORS,
          // fetchPolicy:'no-cache'
        })
       setAllModels(data.getAllActors)
       setLoading(false)

      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[])

  if(isLoading) return <Loader/>
  return (
    <div className="container w-full mx-auto pt-20 mt-12 mb-4">
    <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              All Actors
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about all models
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allModels.map(( model,index,) => {
                const isLast = index === allModels.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={model.id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={getUrlFT(model.profilePic)}
                          alt={model.profilePic}
                          size="lg"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {model.username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Actor Videos">
                        <IconButton variant="text">
                          <Link to={`/admin/model/videos/${model.id}`}><PencilIcon className="h-4 w-4" /></Link>
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Actor Meta">
                        <IconButton variant="text">
                          <Link to={`/admin/model/meta/${model.id}`}><PencilIcon className="h-4 w-4" /></Link>
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Actor Meta">
                        <IconButton variant="text">
                          <Link to={`/admin/model/stripchat/${model.username}`}><PencilIcon className="h-4 w-4" /></Link>
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}

export default AllModels
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export function Experiece(props) {
    const {image, title, desc, link, text} = props;
    return (
      <Card className="max-w-[24rem] m-4 shadow-2xl border-copper border-2 overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 h-56 rounded-none"
        >
          <img
            src={image}
            alt="card image"
          />
        </CardHeader>
        <CardBody className=" bg-arsenic-primary" >
          <Typography variant="h4" className="text-left text-white" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead"  className="mt-3 text-gray-200 text-left font-normal">
           {desc}
          </Typography>
        </CardBody>
        <CardFooter className="flex bg-arsenic-secondary justify-center">

          <Typography className="font-normal text-blue-400 hover:text-copper  } ">
            <a href={link} target="blank">{text} </a>
          </Typography>
        </CardFooter>
      </Card>
    );
  }
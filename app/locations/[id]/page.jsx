import CardDetails from "@/components/card/CardDetails";

const page = ( {params} ) => {

  const id= params.id

  return (
    <>
    <CardDetails 
      id= {id}
    />
    </>
  )
};

export default page;

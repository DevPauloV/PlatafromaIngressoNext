

 async function SpotsLayoutPage ({
    params,
}: {
    params: { eventId: string };
}) {

    return <p>{params.eventId}</p>;
}


export default SpotsLayoutPage;

import { EventModel } from "../models";


async function getEvents(): Promise<EventModel[]> {
  const response = await fetch("http://localhost:8000/events");
  return response.json();
}


export default async function Home() {

  const events = await getEvents();

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text=3xl font-bold mb-8"> Shows disponiveis</h1>
      <div className="grid grid-cols-3 gap-8">
        {events.map((event, key) => (
          
          <div key={key} className="bg-white shadow-lg rounded-lg">
          <img className="w-full h-48 object-cover" src={event.image_url}/>
          <div className="p-4">


            <h2 className="text-xl text-black font-bold"> 
              {event.name}
              </h2>


            <p className="text-gray-700 mt-2">
               {new Date(event.date).toLocaleDateString()} 
               </p>


            <p className="text-gray-700 mt-2">
              {event.available_spots} lugares disponiveis
              </p>


            <p className="text-gray-700 mt-2">
              R$ {event.price.toFixed(2).replace('.', ',')} 
              </p>


            <p>
              <button>Reservar Lugar</button>
            </p>


          </div>
        </div>
      ))}

        


      </div>
    </main>
  );
}

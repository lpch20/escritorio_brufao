import ToolTipsRedes from "../ToolTipsRedes/ToolTipsRedes";

const people = [
  {
    name: "Federico Brufao",
    role: "Co-Founder / CEO",
    imageUrl:
      "/ImageFedeJr.jpeg",
  },
  {
    name: "Federico Brufao",
    role: "Co-Founder / CEO",
    imageUrl:
      "/ImageFedeJr.jpeg",
  },
  {
    name: "Federico Brufao",
    role: "Co-Founder / CEO",
    imageUrl:
      "/ImageFedeJr.jpeg",
  },
  // More people...
];

export default function HowAreYou() {
  return (
    <div className="bg-white  sm:py-32 px-24 py-24 lg:inset-x-18 ">
      <div className="mx-auto flex-col justify-center items-center xl:flex-col flex">
        <div className="">
          <h2 style={{fontFamily: 'koulen', color: '#1d88a2'}} className="text-3xl font-bold xl:text-9xl tracking-tight sm:text-4xl">
            Nuestro equipo
          </h2>
        </div>
        <div >
        <ul
          role="list"
          className="flex xl:flex-row flex-col justify-center items-start gap-24 xl:items-center xl:justify-between pt-16"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  style={{height: '150px'}}
                  className=" rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    <ToolTipsRedes></ToolTipsRedes>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}

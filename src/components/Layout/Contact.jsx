import bgContact from "/bg/bg1.webp";
import bgContact2 from "/bg/bg8.jpg";
const Contact = () => {
  return (
    <>
      <section className="pt-20 w-full bg-[rgb(0,0,0)]">
        <section className="w-full flex justify-center items-center">
          <div
            id="box-glass2"
            class="max-w-lg w-[96%] rounded-md z-50 relative border border-whiteCustom "
          >
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="py-8 px-3 z-50">
                <h2 className="text-center text-5xl font-bold text-white font-text">
                  CONTACTO
                </h2>
                <p className="mt-4 text-center text-sm text-whiteCustom font-title">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, consequuntur?
                </p>
                <form method="POST" action="#" className="mt-8 space-y-6">
                  <div className="rounded-md shadow-sm">
                    <div>
                      <label className="sr-only" for="email">
                        Email
                      </label>
                      <input
                        placeholder="Email address"
                        className="appearance-none  bg-transparent relative block w-full px-3 py-3 border border-gray-700  text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required=""
                        autocomplete="email"
                        type="email"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div className="mt-4 ">
                      <label className="sr-only" for="whatsapp">
                        Whatsapp
                      </label>
                      <input
                        placeholder="Whatsapp"
                        className="appearance-none  relative block w-full px-3 py-3 border border-gray-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required=""
                        autocomplete="current-whatsapp"
                        type="whatsapp"
                        name="whatsapp"
                        id="whatsapp"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea
                      placeholder="Escribe tu consulta aquí"
                      className="appearance-none  bg-transparent relative block w-full px-3 py-3 border border-gray-700  text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div>
                    <button
                      class="group relative w-full flex justify-center py-3 px-4 border border-primary text-sm font-medium rounded-md text-gray-900 bg-gray hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="relative w-full h-[400px] lg:h-[600px] -mt-8 lg:-mt-12 bg-[rgb(0,0,0)] flex justify-center items-center">
        <figure className="w-full h-full absolute inset-0 flex ">
          <img
            src={bgContact}
            alt="bgHome"
            className="w-full h-full object-cover object-center md:object-center "
          />
        </figure>
      </section>
    </>
  );
};

export default Contact;

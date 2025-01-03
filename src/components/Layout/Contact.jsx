import bgContact from "/bg/bg1.webp";
import map from "/map2.jpeg";
import { useForm } from "react-hook-form";


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://xioami-backend.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("Correo enviado:", result);
      } else {
        console.error("Error al enviar el correo:", result.error);
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
    }
  };
  return (
    <>
      <section id="contact_section" className="pt-20 w-full bg-white flex flex-col xl:pt-6 lg:flex-row lg:justify-center lg:items-center ">
        <div className=" w-full">
          <article className="flex  flex-col justify-center items-start text-balance text-sm font-medium gap-2 pl-4 ml-[5%] py-3 border-l-[2px] border-primary text-zinc-500 md:text-base xl:h-fit xl:mt-6 xl:pl-6 xl:gap-3 2xl:text-lg">
            <h6 className="text-6xl text-zinc-700  font-medium font-title xl:text-7xl 2xl:text-8xl">
              Contacto
            </h6>
            <p className=" mt-4 font-title flex items-center justify-start gap-2 xl:mt-4  xl:gap-3">
              <i className="bx bx-current-location text-2xl -mt-[3px] text-primary 2xl:text-3xl"></i>
            Rivadavia 4963, local 15 - Caballito
            </p>
            <p className=" font-title flex items-center justify-start gap-2 xl:gap-3">
              <i className="bx bxl-whatsapp text-2xl -mt-[6px] text-primary 2xl:text-3xl"></i>
              1158803286
            </p>
            <p className=" font-title flex items-center justify-start gap-2  xl:gap-3">
              <i className="bx bxs-envelope text-2xl -mt-[6px] text-primary xl:-mt-[3px] 2xl:text-3xl 2xl:-mt-[2px]"></i>
              info@serviciotecnicoxiaomi.com.ar
            </p>
            <p className="text-base text-stone-500 font-title px-1 sm:px-2 mt-1  xl:mt-2 xl:text-lg 2xl:text-xl">
              ¡No esperes más! Estamos listos para ayudarte.
            </p>
          </article>
          <section className="relative  h-[350px] lg:h-[400px] lg:mt-3  bg-white flex justify-center items-center  ">
            <a href="https://www.google.com/maps/place/Av.+Rivadavia+4963+local+15,+C1424+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6178829,-58.4353674,19z/data=!4m13!1m7!3m6!1s0x95bcca414bacf411:0xe1a00f408a151d26!2sAv.+Rivadavia+4963+local+15,+C1424+Cdad.+Aut%C3%B3noma+de+Buenos+Aires!3b1!8m2!3d-34.6176721!4d-58.4357975!3m4!1s0x95bcca414bacf411:0xe1a00f408a151d26!8m2!3d-34.6176721!4d-58.4357975?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
        <figure className="w-full mt-6 h-full absolute inset-0 flex justify-center items-center">
          <img
            src={map}
            alt="bgHome"
            className="w-[90%] rounded-sm border-zinc-600 h-full object-cover object-center md:object-center "
          />
        </figure>
          </a>
      </section>
        </div>
        <section className="w-full flex justify-center items-center mt-12">
          <div
            id="box-glass2"
            class="max-w-lg w-[95%] rounded-md z-50 relative border border-gray "
          >
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="pt-2 pb-6 px-3 z-50">
                <p className="mt-4 text-balance text-center text-base text-zinc-400 font-text2 2xl:text-lg">
                  Completá el formulario con tus datos y consulta. Nuestro
                  equipo se comunicará con vos a la brevedad para brindarte la
                  solución que necesitás.
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  method="POST"
                  action="#"
                  className="mt-8 space-y-6 font-text"
                >
                  <div className="rounded-md shadow-sm">
                    <div>
                      <label className="sr-only" for="email">
                        Email
                      </label>
                      <input
                        placeholder="Email"
                        className="appearance-none  bg-transparent relative block w-full px-3 py-3 border border-gray placeholder:text-primary  text-white rounded-md focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                        required=""
                        autocomplete="email"
                        type="email"
                        name="email"
                        id="email"
                        {...register("email")}
                      />
                    </div>
                    <div className="mt-4 ">
                      <label className="sr-only" for="whatsapp">
                        Whatsapp
                      </label>
                      <input
                        placeholder="Whatsapp"
                        className="appearance-none  relative block w-full px-3 py-3 border border-gray bg-transparent text-white placeholder:text-primary rounded-md focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                        required=""
                        autocomplete="current-whatsapp"
                        type="whatsapp"
                        id="whatsapp"
                        name="whatsapp"
                        {...register("wttp")}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea
                      placeholder="Escribe tu consulta aquí"
                      className="appearance-none  bg-transparent relative block w-full px-3 py-3 border border-gray placeholder:text-primary  text-white rounded-md focus:outline-none  focus:border-primary focus:z-10 h-[120px] sm:text-sm md:h-[150px] xl:h-[170px]"
                      {...register("message")}
                    />
                  </div>

                  <div>
                    <button
                      class="group relative w-full flex justify-center py-3 px-4 border border-gray text-base font-bold rounded-md text-primary bg-zinc-800 hover:bg-gray2 hover:text-stone-400 hover:border-primary duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      type="submit"
                    >
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="relative w-full h-6 lg:h-12  bg-white flex justify-center items-center"></section>
    </>
  );
};

export default Contact;
